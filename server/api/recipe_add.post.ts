import { getFirestore } from "firebase-admin/firestore";

export default defineEventHandler(async (event) => {
  const { data } = await readBody(event);

  const db = getFirestore();
  const adddata= await db
    .collection("recipe")
    .add(data)
    .then(function(docRef) {
      return docRef.id;
  })
  .catch(function(error) {
      return error;
  });

  return adddata;
});
