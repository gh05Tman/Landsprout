import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const PROJECTS_COLLECTION = "projects";

// Save a new project
export async function saveProject(project: any, imageFile?: File) {
  let imageUrl = project.imageUrl || "";
  if (imageFile) {
    const storageRef = ref(storage, `projects/${project.userId}/${Date.now()}_${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    imageUrl = await getDownloadURL(storageRef);
  }
  const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
    ...project,
    imageUrl,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  return docRef.id;
}

// Load all projects for a user
export async function loadProjects(userId: string) {
  const q = query(collection(db, PROJECTS_COLLECTION), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Load a single project by ID
export async function loadProjectById(projectId: string) {
  const docRef = doc(db, PROJECTS_COLLECTION, projectId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

// Update a project
export async function updateProject(projectId: string, data: any) {
  const docRef = doc(db, PROJECTS_COLLECTION, projectId);
  await updateDoc(docRef, { ...data, updatedAt: Timestamp.now() });
}

// Delete a project
export async function deleteProject(projectId: string) {
  const docRef = doc(db, PROJECTS_COLLECTION, projectId);
  await deleteDoc(docRef);
}