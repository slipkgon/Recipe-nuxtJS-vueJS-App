import { getFirestore } from "firebase-admin/firestore";
export default defineEventHandler(async (event) => {
  const { data } = await readBody(event);
  const db = getFirestore();
  const adddata = await db
    .collection("recipe")
    .where("__name__", "==", data)
    .get()
    .then((querySnapshot) => {
      try {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
        });
        return 1;
      } catch {
        return 0;
      }
    })
    .catch(() => {
      return 0;
    });

  return adddata;

});
