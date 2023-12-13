<template>
  <div>
    <Head>
      <Title>Contact Us</Title>
      <Meta name="description" content="Get in touch with Overlanders" />
      <Meta name="og:title" content="Contact Us" />
      <Meta name="og:description" content="Get in touch with Overlanders" />
      <Meta name="og:image" content="/careers.png" />
      <Meta name="og:url" content="/" />
    </Head>

    <div class="bg-img-1 h-[400px]">
      <div>
        <div class="h-[302px] flex justify-center items-center w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto text-white pt-40 lg:mt-10">
          <h2 class="text-[34px] sm:text-[38px] font-semibold relative tracking-wide uppercase pb-2 block text-center">
            Contact Us
            <span
              class="absolute bottom-0 top-[45px] md:top-[50px] xl:top-[65px] left-1/2 transform -translate-x-1/2 w-10 border-b-4 border-orange-color"
            ></span>
          </h2>  
        </div>
      </div>  
    </div>

    
    <div class="grid grid-cols-1 pt-20 w-[92%] h-[400px] sm:w-[85%] 2xl:w-[1400px] mx-auto">
      <div>
        <GoogleMap
          :api-key="apiKey"
          style="width: 100%; height: 100%"
          :center="{ lat, lng }"
          :zoom="15"
        >
          <Marker :options="{ position: { lat, lng } }" />
        </GoogleMap> 
      </div>
    </div>
 

    <div class="grid grid-cols-12 py-20 w-[92%] sm:w-[85%] 2xl:w-[1400px] mx-auto">
      <div class="flex flex-col gap-4 col-span-12 lg:col-span-6 mb-12 lg:mb-0">
        <h2 class="text-[25px] text-orange-color">Contact Details</h2>
        <p>C2FV+VG2, W Service Rd, Cupang, Muntinlupa, Metro Manila</p>
        <p>overlanders@hmr.ph</p>
        <p class=" text-blue-900 font-semibold">(02) 8512-1491</p>
      </div>

      <div class="flex flex-col gap-4 col-span-12 lg:col-span-6">
        <h2 class="text-[25px] text-orange-color">Any Query?</h2>
       
        <form class="grid grid-cols-12 gap-4" @submit.prevent="sendEmail">
          <div class="flex flex-col gap-4 col-span-12 sm:col-span-6">
            <label>Your Name:</label>

            <div class="relative">
              <input
                v-model.trim="form.name"
                id="name"
                type="text"
                class="px-10 py-3 w-full  bg-gray-100 outline-none rounded-md"
                placeholder="Enter Your Name"
                required
              />
             
              <Icon name="mdi:user" class="absolute left-3 text-gray-400 top-3 text-2xl" />
              <!-- <span :class="{ 'text-red-600': error.name }">{{ error.name }}</span> -->
            </div>

         
          </div>

          <div class="flex flex-col gap-4 col-span-12 sm:col-span-6">
            <label>Your Mobile No: </label>

            <div class="relative">
              <input
                v-model.trim="form.mobile_no"
                id="mobile_no"
                type="text"
                class="px-10 py-3 bg-gray-100 outline-none w-full rounded-md"
                placeholder="(  09*********, 11 digits )"
                required
                pattern="09\d{9}"
              />

              <Icon name="bxs:mobile" class="absolute left-3 text-gray-400 top-3.5 text-xl" />
              <!-- <span :class="{ 'text-red-600': error.mobile_no }">{{ error.mobile_no }}</span> -->
            </div>
            
          </div>

          <div class="flex flex-col gap-4 col-span-12 sm:col-span-6">
            <label>Your Email Address:</label>

            <div class="relative">
              <input
                v-model.trim="form.email_address"
                id="email_address"
                type="email"
                class="px-10 py-3 bg-gray-100 outline-none w-full rounded-md"
                placeholder="Enter Your Email Address"
                required
              />

              <Icon name="ic:round-email" class="absolute left-3 text-gray-400 top-3.5 text-xl" />
              <!-- <span :class="{ 'text-red-600': error.email_address }">{{ error.email_address }}</span> -->
            </div>
          </div>

          <div class="flex flex-col gap-4 col-span-12 sm:col-span-6">
            <label>Subject:</label>

            <div class="relative">
              <input
                v-model.trim="form.subject"
                id="subject"
                type="text"
                class="px-10 py-3 bg-gray-100 outline-none w-full rounded-md"
                placeholder="Subject"
                required
              />

              <Icon name="fluent:book-24-filled" class="absolute left-3 text-gray-400 top-3.5 text-xl" />
              <!-- <span :class="{ 'text-red-600': error.subject }">{{ error.subject }}</span> -->
            </div>
          </div>

          <div class="flex flex-col gap-4 col-span-12 mb-4">
            <label for="message" 
              >Message:
            </label>

            <div class="relative">
              <textarea
                v-model.trim="form.message"
                name=""
                id="message"
                cols="30"
                rows="5"
                class="px-10 py-3  bg-gray-100 flex w-full outline-none text-gray-500 rounded-md"
                placeholder="Your Message"
                required
              ></textarea>

              <Icon name="fa-solid:paper-plane" class="absolute left-3 text-gray-400 top-3.5 text-lg" />
              <!-- <span :class="{ 'text-red-600': error.message }">{{ error.message }}</span> -->
            </div>
          </div>

          <div class="col-span-12">
            <button class="btn btn-gradient self-start text-white">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>

import { GoogleMap, Marker } from "vue3-google-map";
export default {
  components: { GoogleMap, Marker }, 
  data() {
    return {
      lat: 14.684689,
      lng: 121.071133,
      apiKey: import.meta.env.GOOGLE_MAPS_API_KEY,

      form: {
        name: "",
        mobile_no: "",
        email_address: "",
        subject: "",
        message: ""
      },

      // error: {
      //   name: "",
      //   mobile_no: "",
      //   email_address: "",
      //   subject: "",
      //   message: ""
      // }
    }
  },

  methods: {
    sendEmail() {
      this.$mail.send({
        subject: this.form.subject,
        html: `
          <p>Name: ${this.form.name}</p>
          <p>Mobile No: ${this.form.mobile_no}</p>
          <p>Email Address: ${this.form.email_address}</p>
          <p>Message: ${this.form.message}</p>
        `
      })

      useNuxtApp().$toast.success('You have sent your message.');

      this.form.name = "";
      this.form.mobile_no = "";
      this.form.email_address = "";
      this.form.subject = "";
      this.form.message = "";
    },
  },
}
</script>

<style scoped>
.bg-img-1 {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
  url("/header.png");
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
}
</style>