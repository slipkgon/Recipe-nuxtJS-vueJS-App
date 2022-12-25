import { initializeApp, getApps, cert } from "firebase-admin/app";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apps = getApps();
  if (!apps.length) {
    initializeApp({
      credential: cert(
        config.firebase
      ),
    });
   
  }
});