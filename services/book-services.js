import { db } from "./firebase-config";

import {
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "wedd");
class BookDataService {
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "wedd", id);
    return updateDoc(bookDoc, updatedBook);
  };

  // Fungsi real-time listener
  getAllBooksRealtime = (callback) => {
    return onSnapshot(bookCollectionRef, callback);
  };
}

export default new BookDataService();
