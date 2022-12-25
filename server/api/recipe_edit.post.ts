import { getFirestore } from "firebase-admin/firestore";
export default defineEventHandler(async (event) => {
  const { data } = await readBody(event);

  const db = getFirestore();
  const adddata= await db
    .collection("recipe")
    .doc(data.uuid).set(data.data)
    .then(function(docRef) {
      return 1;
  })
  .catch(function(error) {
      return error;
  });

  return adddata;
});
