import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "sonner";

export const useCollectionsData = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMultipleCollections() {
      try {
        const trailerShot = collection(db, "trailer");
        const filmShot = collection(db, "filmlar");
        const trailerSnapshot = await getDocs(trailerShot);
        const filmSnapshot = await getDocs(filmShot);

        const trailers = trailerSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        const films = filmSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Shu yerda `trailer` nomi bilan `data` holatiga set qilamiz
        setData({ trailers,films });
        setError(null);
      } catch (err) {
        console.error("Xatolik:", err.message);
        toast.error(err.message);
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    }

    fetchMultipleCollections();
  }, []);

  return { data, isPending, error };
};
