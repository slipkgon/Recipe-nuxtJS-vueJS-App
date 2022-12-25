import { RouterConfig } from "@nuxt/schema";
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    if (to === from) {
      return {
        left: 0,
        top: 0,
        behavior: "smooth",
      };
    }
    return new Promise((resolve) => {
      resolve(savedPosition);
    });
  },
};