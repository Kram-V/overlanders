<template>
  <!-- NAVBAR -->
  <!-- <div style="z-index: 99999;" class="flex items-center justify-between border-b px-4 py-2 sm:px-0 sm:py-0  border-gray-500 w-full sm:w-[85%] 2xl:w-[1400px] mx-auto text-white">
    <span class="p-2 lg:p-6 bg-white">
      <img class="w-[120px]" src="/overlanders-navbar-logo.png" alt="Overlanders">
    </span>

    <div class="block lg:hidden">
      <font-awesome-icon @click="handleOpenSidebar" class="text-2xl mt-1 cursor-pointer" icon="fa-solid fa-bars" />
    </div>

    <nav class="hidden lg:block">
      <ul class="flex">
        <NuxtLink to="/">
          <li class="navlink navlink-center mr-10 cursor-pointer" :class="{ 'border-b-2 border-orange-color': $route.path === '/' }">Home</li>
        </NuxtLink>
        <NuxtLink to="/about-us">
          <li class="navlink navlink-center mr-10 cursor-pointer" :class="{ 'border-b-2 border-orange-color': $route.path === '/about-us' }">About Us</li>
        </NuxtLink>
        <NuxtLink to="/products-services">
          <li class="navlink navlink-center mr-10 cursor-pointer" :class="{ 'border-b-2 border-orange-color': $route.path === '/products-services' }">Services</li>
        </NuxtLink>
        <NuxtLink to="/contact-us">
          <li class="navlink navlink-center cursor-pointer" :class="{ 'border-b-2 border-orange-color': $route.path === '/contact-us' }">Contact Us</li>
        </NuxtLink>
      </ul>
    </nav>
  </div> -->

 
  <div style="z-index: 999;" class=" fixed left-0 top-0 right-0 border-b px-4 py-2 sm:px-0 sm:py-0 bg-white text-black fixed-navbar-shadow">
    <div class="w-full sm:w-[85%] 2xl:w-[1400px] mx-auto flex items-center justify-between">
      <span class="p-2 lg:p-6">
        <NuxtLink to="/">
          <img class="w-[140px]" src="/overlanders-navbar-logo.png" alt="Overlanders">
        </NuxtLink>
      </span>

      <div class="block lg:hidden">
        <font-awesome-icon @click="handleOpenSidebar" class="text-2xl mt-1 cursor-pointer" icon="fa-solid fa-bars" />
      </div>

      <nav class="hidden lg:block">
        <ul class="flex">
          <NuxtLink to="/">
            <li class="navlink navlink-center mr-10 cursor-pointer" :class="{ 'border-b-2 border-orange-color': $route.path === '/' }">Home</li>
          </NuxtLink>
          <NuxtLink to="/about-us">
            <li class="navlink navlink-center mr-10 cursor-pointer" :class="{ 'border-b-2 border-orange-color': $route.path === '/about-us' }">About Us</li>
          </NuxtLink>
          <NuxtLink to="/products-services">
            <li class="navlink navlink-center mr-10 cursor-pointer" :class="{ 'border-b-2 border-orange-color': $route.path === '/products-services' }">Products & Services</li>
          </NuxtLink>
          <NuxtLink to="/contact-us">
            <li class="navlink navlink-center cursor-pointer" :class="{ 'border-b-2 border-orange-color': $route.path === '/contact-us' }">Contact Us</li>
          </NuxtLink>
        </ul>
      </nav>
    </div>
  </div>
  

  <!-- STICKY NAVBAR -->
  <!-- <div style="z-index: 999;" class="remove bg-white fixed-navbar-shadow hidden lg:block" ref="fixedNavbarContainer">
    <div class="flex items-center justify-between  w-[85%] 2xl:w-[1400px] mx-auto ">
      <span class="p-6">
        <img src="/overlanders-navbar-logo.png" alt="Overlanders">
      </span>
      <nav>
        <ul class="flex">
          <NuxtLink to="/">
            <li class="navlink navlink-center mr-10 cursor-pointer font-medium" :class="{ 'border-b-2 border-orange-color': $route.path === '/' }">Home</li>
          </NuxtLink>
          <NuxtLink to="/about-us">
            <li class="navlink navlink-center mr-10 cursor-pointer font-medium" :class="{ 'border-b-2 border-orange-color': $route.path === '/about-us' }">About Us</li>
          </NuxtLink>
          <NuxtLink to="/products-services">
            <li class="navlink navlink-center mr-10 cursor-pointer font-medium" :class="{ 'border-b-2 border-orange-color': $route.path === '/products-services' }">Services</li>
          </NuxtLink>
          <NuxtLink to="/contact-us">
            <li class="navlink navlink-center cursor-pointer font-medium" :class="{ 'border-b-2 border-orange-color': $route.path === '/contact-us' }">Contact Us</li>
          </NuxtLink>
        </ul>
      </nav>
    </div>
  </div> -->


  <!-- MOBILE VIEW SIDEBAR -->

  <!-- OVERLAY -->
  <div @click="handleCloseSidebar" style="z-index: 99999;" class="fixed top-0 left-0 h-screen w-full z-40 bg-black bg-opacity-60" :class="{ 'hidden': isSidebarNotActive }"></div>

  <div style="z-index: 99999;" :class="{ '-translate-x-full': isSidebarNotActive }" class=" overflow-y-auto p-4 z-50 bg-white fixed top-0 left-0 bottom-0 w-full sm:w-1/2 transform  transition-transform duration-300">
    <div class="flex justify-between items-center mb-4 px-2">
      <h1 class="text-lg font-medium relative -left-[5px]"><img class="" src="/overlanders-navbar-logo.png" alt=""></h1>
      
      <font-awesome-icon @click="handleCloseSidebar" class="text-2xl mt-1 cursor-pointer text-black" icon="fa-solid fa-xmark" />
    </div>

    <div class="text-black flex flex-col pt-14 items-center text-lg gap-6 h-[90%]">
      <NuxtLink to="/" @click="handleCloseSidebar">
        <span class="hover:text-orange-color cursor-pointer font-medium transition duration-300" :class="{ 'text-orange-color': $route.path === '/' }">Home</span>
      </NuxtLink>
      <NuxtLink to="/about-us" @click="handleCloseSidebar">
        <span class="hover:text-orange-color cursor-pointer font-medium transition duration-300" :class="{ 'text-orange-color': $route.path === '/about-us' }">About Us</span>
      </NuxtLink>
      <NuxtLink to="/products-services" @click="handleCloseSidebar">
        <span class="hover:text-orange-color cursor-pointer font-medium transition duration-300" :class="{ 'text-orange-color': $route.path === '/products-services' }">Services</span>
      </NuxtLink>
      <NuxtLink to="/contact-us" @click="handleCloseSidebar">
        <span class=" hover:text-orange-color cursor-pointer font-medium transition duration-300" :class="{ 'text-orange-color': $route.path === '/contact-us' }">Contact Us</span>
      </NuxtLink>
    </div>
  </div>
  
  <!-- MOBILE VIEW STICKY NAVBAR -->
  <!-- <div style="z-index: 999;" class="remove bg-white fixed-navbar-shadow block lg:hidden px-4 py-2 lg:px-0 lg:py-0 " ref="fixedStickyNavbarContainer">
    <div class="flex items-center justify-between w-[95%] sm:w-[85%] 2xl:w-[1400px] mx-auto ">
      <span>
        <img src="/overlanders-navbar-logo.png" alt="Overlanders">
      </span>

      <div class="block lg:hidden">
        <font-awesome-icon @click="handleOpenSidebar" class="text-2xl mt-1 cursor-pointer" icon="fa-solid fa-bars" />
      </div>
    </div>
  </div> -->
</template>


<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();

const fixedNavbarContainer = ref(null);
const fixedStickyNavbarContainer = ref(null);

const isSidebarNotActive = ref(true)

function handleOpenSidebar() {
  isSidebarNotActive.value = false;
}

const handleCloseSidebar = () => {
  isSidebarNotActive.value = true;
}




// onMounted(() => {
//   const handleScroll = () => {
//     if (window.scrollY > 300) {
//       fixedNavbarContainer.value.classList.remove('remove');
//       fixedNavbarContainer.value.classList.add('fixed-navbar');

//       fixedStickyNavbarContainer.value.classList.remove('remove');
//       fixedStickyNavbarContainer.value.classList.add('fixed-navbar');
//     } else {
//       fixedNavbarContainer.value.classList.add('remove');
//       fixedNavbarContainer.value.classList.remove('fixed-navbar');

//       fixedStickyNavbarContainer.value.classList.add('remove');
//       fixedStickyNavbarContainer.value.classList.remove('fixed-navbar')
      
//     }
//   };

//   window.addEventListener('scroll', handleScroll);

//   onBeforeUnmount(() => {
//     window.removeEventListener('scroll', handleScroll);
//   });
// });
</script>

<style scoped>
/* .remove {
  display: none;
}


.fixed-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: black;
} */

.fixed-navbar-shadow {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}




</style>
