import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
faHouse, 
faQuoteLeft, 
faArrowRight, 
faUser, 
faMobile, 
faEnvelope, 
faBook, 
faPaperPlane,
faBars,
faXmark
} 
from '@fortawesome/free-solid-svg-icons'

library.add(
faHouse, 
faQuoteLeft, 
faArrowRight, 
faUser, 
faMobile, 
faEnvelope, 
faBook, 
faPaperPlane,
faBars,
faXmark
)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})