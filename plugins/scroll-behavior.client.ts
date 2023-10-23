import { useRouter } from "vue-router";

export default async function () {
  if (typeof window !== "undefined") {
    const router = useRouter();

    router.afterEach(async (to, from) => {
      if (to.hash) {
        await router.isReady();

        const targetElement = document.querySelector(to.hash);

        if (targetElement) {
          const margin = 20;
          const scrollToPosition = targetElement.getBoundingClientRect().top + window.scrollY - margin;

          await window.scrollTo({
            top: scrollToPosition,
          });
          return;
        }
      }
    });
  }
}
