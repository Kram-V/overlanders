<template>
  <div>
    <section class="section-1">
      <div class="bg-img-1 h-[400px]">
        <div>
          <div class="h-[302px] flex justify-center items-center w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto text-white pt-40 lg:mt-10">
            <h2 class="text-[34px] sm:text-[38px] font-semibold relative tracking-wide uppercase pb-2 block text-center">
              Products & Services
              <span
                class="absolute bottom-0 top-[45px] md:top-[50px] xl:top-[65px] left-1/2 transform -translate-x-1/2 w-10 border-b-4 border-orange-color"
              ></span>
            </h2>  
          </div>
        </div>  
      </div>
    </section>

    <section class="section-2">
      <div class="py-20">
        <div class="w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto">
          <h3 class="text-[25px] lg:text-[33px] font-bold text-black text-center mb-8">Our Logistics & Distribution Services</h3>
          <p class="leading-7 text-gray-900 text-center w-[90%] mx-auto mb-8 font-medium">Experience unmatched efficiency in every shipment. Our logistics and distribution services are tailored to propel your business forward.</p>
      

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class=" bg-white rounded-lg p-5 flex flex-col gap-4 drop-shadow-xl">
              <img src="/warehouse-&-storage.png" alt="Services">
              <h6 class="text-xl lg:text-xl font-bold text-gray-700">Warehouse & Storage</h6>
              <p class="leading-8 text-gray-500">Overlanders warehousing and storage is extended to a diverse range of industries. Our scalable storage costs are variable based on the capacity, seasonality, or organic growth of your business. Our storage facilities are flexible to our client’s requirements whether this be palletized, bulk storage, or stillage.</p>
            </div>

            <div class=" bg-white rounded-lg p-5 flex flex-col gap-4 drop-shadow-xl">
              <img src="/warehouse-management-system.png" alt="Services">
              <h6 class="text-xl lg:text-xl font-bold text-gray-700">Warehouse Management System</h6>
              <p class="leading-8 text-gray-500">Overlanders can provide visibility into an organization’s inventory at any time and location, whether in a facility or in transit. Our process, allow organizations to control and administer warehouse operations from the time goods or materials enter a warehouse until they move out.</p>
            </div>

            <div class=" bg-white rounded-lg p-5 flex flex-col gap-4 drop-shadow-xl">
              <img src="/wholesale-distribution.png" alt="Services">
              <h6 class="text-xl lg:text-xl font-bold text-gray-700">Wholesale Distribution & End-to-End Logistics</h6>
              <p class="leading-8 text-gray-500">Overlanders conveniently and efficiently delivers and distributes your products, brands, stocks, and services to the growing Philippine retail market. ‘Just-in-time’ delivery policy is practiced where logistics and inventory management is handled, allowing you to focus on your core business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-3">
      <div class="bg-img-2 py-20">
        <div class="w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto">
          <div class="rounded-lg  sm:p-10 w-full lg:w-[700px] 2xl:w-[1000px] relative text-white flex flex-col gap-4 text-center lg:text-left animate-to-right">
            <h2 class="text-[32px] lg:text-[38px] font-semibold -mb-2">Reach out today to discover more!</h2>
            <p class="leading-8 text-[14px]">Get in touch with us today to uncover more about our unparalleled services</p>

            <div class="flex justify-center lg:justify-start">
              <NuxtLink to="/contact-us">
                <button class="btn btn-gradient self-start text-white">
                  Contact Now
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  let sections = document.querySelectorAll("section")

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 500;
      let height = sec.offsetHeight;

      if (top >= offset && top < offset + height) {
        sec.classList.add("show-animate")
      }
    })
  }
})

watch(route, () => {
  let sections = document.querySelectorAll("section")
  
  sections.forEach(sec =>  {
    sec.classList.remove("show-animate")
  })
})
</script>

<style scoped>
.bg-img-1 {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
  url("/header.png");
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
}

.bg-img-2 {
  background-image: 
  url("/discover-more.png");
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
}
</style>