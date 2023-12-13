<template>
  <div>
    <NuxtLayout>
      <Navbar />
        <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/overlanders.png'
    }
  ]
})
</script>
