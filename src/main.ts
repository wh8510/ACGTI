import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initI18n } from './i18n'

initI18n()
const app = createApp(App)

app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal-init')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-active')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    observer.observe(el)
  }
})

app.use(router).mount('#app')
