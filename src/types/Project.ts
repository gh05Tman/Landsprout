   export interface ProjectItem {
     id: string;
     type: string;
     x: number;
     y: number;
     // Add more fields as needed (e.g., width, height, rotation, etc.)
   }

   export interface Project {
     id?: string; // Firestore will generate this
     userId: string;
     name: string;
     createdAt: any; // Firestore Timestamp
     updatedAt: any; // Firestore Timestamp
     imageUrl: string;
     items: ProjectItem[];
   }