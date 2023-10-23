<template>
  <div>
    <section class="section-1">
      <div class="bg-img-1 h-[800px]">
        <div class="text-white">
      
          <div class="h-[703px] flex flex-col gap-5 text-center lg:text-left justify-center w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto pt-36 lg:pt-28 lg:mt-10">
            <div class="w-full lg:w-[900px] flex flex-col gap-5">
              <div>
                <h5 class="text-[24px] uppercase font-semibold relative pl-0 lg:pl-12 mb-5 hidden lg:block">
                  <span class="ml-4 absolute left-0 h-full border-l-4 border-orange-color rotate-90 hidden lg:block"></span>
                  Revolutionizing Returns
                </h5>

                <h5 class="text-[24px] uppercase font-semibold relative pl-0 lg:pl-12 mb-8 block lg:hidden">
                  Revolutionizing Returns
                  <span
                    class="absolute bottom-0 top-[85px] xsm:top-[45px] md:top-[50px] xl:top-[65px] left-1/2 transform -translate-x-1/2 w-10 border-b-4 border-orange-color"
                  ></span>
                </h5>

                <h1 class="text-[44px] sm:text-[50px] lg:text-6xl leading-[55px] sm:leading-[65px] lg:leading-[80px] font-extrabold tracking-wide">Your <span class="text-orange-color">Trusted Partner</span> in Reverse Logistics</h1>
              </div>

              <div class="mb-4">
                <p class="leading-[30px]">A Certified Wholesaler And Distributor Of Local And Internationally Manufactured Goods For Various Accredited Retail Companies In The Philippines.</p>
              </div>

              <div class="flex justify-center lg:justify-start">
                <!-- <button class=" bg-gradient-to-l from-orange-color to-dark-orange-color py-4 px-14 rounded-md w-[220px]  flex items-center justify-center gap-1 self-start uppercase text-[14px]">
                  Explore Now <span class="text-[12px]">></span>
                </button> -->

                <NuxtLink to="/about-us">
                  <button class="btn btn-gradient self-start">
                    Explore Now <span class="text-[12px]">></span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </section>

    <section class="section-2">
      <div class="w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center py-20">
        <img class="justify-self-center lg:justify-self-start animate-to-right" src="/who-we-are.png" alt="">

        <div class="animate-to-top">
          <div class="flex flex-col gap-4 mb-10">
            <span class="uppercase font-bold text-xl text-gray-600">Who we are</span>

            <h3 class="text-[25px] lg:text-[33px] font-bold text-black leading-[40px] lg:leading-[50px]">Optimizing Returns for Retail Success</h3>

            <p class="leading-7 text-gray-900 font-medium">Overlanders Logistics and Distribution, Inc. Is a newly established privately owned logistics and distribution company duly registered with the Securities and Exchange Commission (SEC) on November 10, 2015 under Registry No. CS201522521. </p>
            <p class="leading-7 text-gray-900 font-medium">It’s principal office address is located at: Kilometer 23, West Service Road Barangay Cupang Muntinlupa City.</p>
          </div>

          <NuxtLink :to="{ path: '/about-us', hash: '#who-we-are' }">
            <button class="btn btn-gradient self-start text-white">
              Know More
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-3">
      <div class=" bg-gray-100 py-20">
        <div class="w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto">
          <h3 class="text-[25px] lg:text-[33px] font-bold text-black text-center mb-8">What we do</h3>
          <p class="leading-7 text-gray-900 text-center w-[90%] mx-auto mb-8 font-medium">At Overlanders, we specialize in end to end reverse logistics solutions that turn your returns into revenue. Leveraging cutting edge technology and sustainable practices, we optimize your supply chain to save time, reduce costs, and boost customer satisfaction.</p>
      

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class=" bg-white rounded-lg p-5 flex flex-col gap-4 drop-shadow-xl">
              <img src="/icon-1.png" class="h-[50px] w-[50px] md:h-[60px] md:w-[60px]" alt="Services">
              <h2 class="text-xl lg:text-2xl font-bold text-gray-700">Our Services</h2>
              <p class="leading-8 text-gray-500">The company is engaged in the business of wholesale and distribution of its home brands, stock lots local and internationally manufactured goods over 100 retail stores nationwide and eCommerce channels.</p>

              <NuxtLink to="/products-services">
                <span class="text-orange-color underline self-start cursor-pointer text-[14px] lg:text-[16px]">READ MORE >></span>
              </NuxtLink>
            </div>

            <div class=" bg-white rounded-lg p-5 flex flex-col gap-4 drop-shadow-xl">
              <img src="/icon-2.png" class="h-[50px] w-[50px] md:h-[60px] md:w-[60px]" alt="Services">
              <h2 class="text-xl lg:text-2xl font-bold text-gray-700">Local & Foreign</h2>
              <p class="leading-8 text-gray-500">We help local and foreign manufacturers deliver their products in the Philippines in a seamless and timely manner that always prioritizes strategic and secure handling.</p>

              <NuxtLink to="/products-services">
                <span class="text-orange-color underline self-start cursor-pointer text-[14px] lg:text-[16px]">READ MORE >></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-4">
      <div class="w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8">
        <div class="self-center order-2 lg:order-1 animate-to-right">
          <div class="flex flex-col gap-4 mb-10">
            <span class="uppercase font-bold text-xl text-gray-600 leading-[30px]">Our Vision and Values</span>
            <h3 class="text-[25px] lg:text-[33px] font-bold text-black leading-[40px] lg:leading-[50px]">Turning Returns Into Business Opportunities</h3>

            <p class="leading-7 text-gray-900 font-medium">We continuously strive to be the preferred choice for complete distribution and end to end logistics servicing in the Philippines.</p> 
            <p class="leading-7 text-gray-900 font-medium">We seek to introduce innovative, alternative solutions that elevate the standards of the Philippine distribution and logistics industry</p>

            <div class="grid grid-cols-1 xsm:grid-cols-2 xl:grid-cols-3">
              <span class="flex items-center gap-2 font-semibold mb-3 xsm:mb-0"><img src="/check-circle.png" alt=""> Integrity</span>
              <span class="flex items-center gap-2 font-semibold"><img src="/check-circle.png" alt=""> Reliability</span>
            </div>

            <div class="grid grid-cols-1 xsm:grid-cols-2 xl:grid-cols-3">
              <span class="flex items-center gap-2 font-semibold mb-3 xsm:mb-0"><img src="/check-circle.png" alt=""> Transparency</span>
              <span class="flex items-center gap-2 font-semibold"><img src="/check-circle.png" alt=""> Professionalism</span>
            </div>

            <div class="grid grid-cols-1 xsm:grid-cols-2 xl:grid-cols-3">
              <span class="flex items-center gap-2 font-semibold mb-3 xsm:mb-0"><img src="/check-circle.png" alt=""> Fairness</span>
              <span class="flex items-center gap-2 font-semibold"><img src="/check-circle.png" alt=""> Excellence</span>
            </div>
          </div>

          <NuxtLink :to="{ path: '/about-us', hash: '#mission-vision' }">
            <button class="btn btn-gradient self-start text-white">
              Read More
            </button>
          </NuxtLink>
        </div>
        

        <div class=" justify-self-center order-1 lg:order-2 animate-to-bottom">
          <img src="/woman-in-warehouse.png" class=" rounded" alt="">
        </div>
      </div>
    </section>

    <section class="section-5">
      <div class="bg-img-2 py-20">
        <div class="w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto flex justify-center sm:justify-end">
          <div class=" bg-gray-100 rounded-lg p-6 sm:p-10  drop-shadow-xl w-[500px] relative">
            <h3 class="text-xl font-bold text-gray-800 leading-10 italic mb-6"><span class="text-orange-color">Quality</span> methods and results that strive for the most <span class="text-orange-color">efficient</span> solutions to <span class="text-orange-color">grow</span> our client's business.</h3>
            <p class="leading-8 text-gray-700 text-[14px]">At <span class="font-bold">Overlanders,</span> we employ quality methods and deliver results aimed at providing the most efficient solutions to drive our client's business growth.</p>

            <font-awesome-icon class="absolute text-[220px] sm:text-[300px] bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 -z-20 text-white" icon="fa-solid fa-quote-left" />
          </div>
        </div>
      </div>
    </section>

    <section class="section-6">
      <div class=" bg-gray-100 py-20">
        <div class="w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto">
          <h3 class="text-[25px] lg:text-[33px] font-bold text-black text-center mb-4">Shop At <span class="text-orange-color">Overlanders</span></h3>
          <p class="leading-7 text-gray-900 text-center w-[90%] mx-auto mb-12 font-medium">Shop At Overlanders and Discover Quality Products with Our Partners.</p>

          <div class="grid grid-cols-1 item xsm:grid-cols-2 gap-10">
            <div class=" flex justify-center">
              <img  src="/lazada-logo.png" alt="Lazada">
            </div>  

            <div class=" flex justify-center">
              <img src="/shopee-logo.png" alt="Shopee">
            </div>  
          </div>
        </div>
      </div>
    </section>

    <section class="section-7">
      <div class="w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 py-20 items-center">
        <img class=" justify-self-center animate-to-right"  src="/careers.png" alt="">

        <div class="animate-to-top">
          <div class="flex flex-col gap-4 mb-10">
            <span class="uppercase font-bold text-xl text-gray-600">Careers</span>

            <h3 class="text-[25px] lg:text-[33px] font-bold text-black leading-[40px] lg:leading-[50px]">Let's grow together</h3>

            <p class="leading-7 text-gray-900 font-medium">As a dynamic company willing to adapt to the market, we intend to be the most valued partner to all our clients.</p>
            <p class="leading-7 text-gray-900 font-medium">Be part of our team and join us on this journey to support and help businesses grow!</p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            
            <NuxtLink to="/contact-us">
              <button class="btn btn-gradient self-start text-white">
                Apply Now
              </button>
            </NuxtLink>
            <NuxtLink to="/about-us">
              <button class="border border-orange-color text-orange-color py-4 px-14 rounded-md w-full sm:w-[219px] flex justify-center items-center gap-1 self-start uppercase text-[14px]">
                Learn More
              </button>
            </NuxtLink>
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
  url("/header-homepage.png");
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
}

.bg-img-2 {
  background-image: url("/frame.png");
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
}


</style>
