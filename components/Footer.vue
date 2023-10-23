<template>
  <div class="pt-20 items-center bg-black-theme">
    <div class="w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto grid grid-cols-12 gap-y-8 lg:gap-10 xl:gap-10">
      <div class="col-span-12 lg:col-span-6 xl:col-span-3">
        <div class="relative tracking-wide pb-2 text-white font-medium mb-10">
          About Company
          <span
            class="absolute bottom-0 top-[45px] left-4 transform -translate-x-1/2 w-8 border-b-2 border-orange-color"
          ></span>
        </div>  
        
        <p class="leading-7 text-sm text-gray-400 mb-10 flex flex-wrap">Overlanders Logistics and Distribution, Inc. Is a newly established privately owned logistics and distribution company duly registered with the Securities and Exchange Commission (SEC) on November 10, 2015 under Registry No. CS201522521. </p>
        <img src="/overlanders.png" alt="Overlanders">
      </div>
      

      <div class="col-span-12 lg:col-span-6 xl:col-span-3">
        <div class="relative tracking-wide pb-2 col-span-3 text-white font-medium mb-10">
          Website Links
          <span
            class="absolute bottom-0 top-[45px] left-4 transform -translate-x-1/2 w-8 border-b-2 border-orange-color"
          ></span>
        </div>  

        <ul class="text-gray-400 text-sm flex flex-col  gap-4">
          <NuxtLink to="/">
            <li class="flex items-center gap-2 cursor-pointer"><span class="text-lg relative -top-[2px]">&#x2192;</span> Home</li>
          </NuxtLink>

          <NuxtLink to="/about-us">
            <li class="flex items-center gap-2 cursor-pointer"><span class="text-lg relative -top-[2px]">&#x2192;</span> About Us</li>
          </NuxtLink>

          <NuxtLink to="/products-services">
            <li class="flex items-center gap-2 cursor-pointer"><span class="text-lg relative -top-[2px]">&#x2192;</span> Products & Services</li>
          </NuxtLink>

          <NuxtLink to="/contact-us">
            <li class="flex items-center gap-2 cursor-pointer"><span class="text-lg relative -top-[2px]">&#x2192;</span> Contact Us</li>
          </NuxtLink>
        </ul>
      </div>

      <div class="col-span-12 lg:col-span-8 xl:col-span-6 mb-8">
        <div class="relative tracking-wide pb-2 block col-span-3 text-white font-medium mb-10">
          Contact Information
          <span
            class="absolute bottom-0 top-[45px] left-4 transform -translate-x-1/2 w-8 border-b-2 border-orange-color"
          ></span>
        </div>  

        <div class="text-gray-400 grid grid-cols-2 gap-2 text-sm mb-10">
          <p class="col-span-2 lg:col-span-1 mb-4">Email Address: overlanders@hmr.ph</p>

          <p class="col-span-2 lg:col-span-1 mb-4">Phone: (02) 8512-1491</p>
       
          <p class="col-span-2">Address: C2FV+VG2, W Service Road Cupang, Muntinlupa, Metro Manila</p>
        </div>
    
        <div class="w-full">
          <GMapMap
            :center="center"
            :zoom="15"
            :options="{
     
            }"
            style="width: 100%; height: 200px;"
          >
            <GMapMarker
              :key="index"
              v-for="(marker, index) in markers"
              :position="marker.position"
              :clickable="true"
              :draggable="true"
              @click="openMarker(marker.id)"
            >
              <GMapInfoWindow
                :closeclick="true"
                @closeclick="openMarker(null)"
                :opened="openedMarkerID === marker.id"
              >
                <div>{{ marker.description }}</div>
              </GMapInfoWindow>
            </GMapMarker>
          </GMapMap>
        </div>
      </div>

      <div class="text-gray-400 text-sm col-span-12 py-10 border-t border-gray-700 text-center">
        &copy;2023. All Rights Reserved. Designed by <span class="text-orange-color">HPAA</span> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      openedMarkerID: null,
      center: { lat: 48.8773406, lng: 2.327774 },
      markers: [
        {
          position: {
            lat: 48.8773406,
            lng: 2.327774,
          },
        },
      ],
    }
  },
}
</script>