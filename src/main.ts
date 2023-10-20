import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.use(createVuestic({
    config: {
        colors: {
            variables: {
                primary: "#560BAD",
                secondary: "#3F37C9",
                success: "#4CC9F0",
                info: "#158DE3",
                danger: "#F72585",
                warning: "#B5179E",
                backgroundPrimary: "#FFFFFF",
                backgroundSecondary: "#FFFFFF",
                backgroundElement: "#ECF0F1",
                backgroundBorder: "#DEE5F2",
                textPrimary: "#3A0CA3",
                textInverted: "#FFFFFF",
                shadow: "rgba(0, 0, 0, 0.12)",
                focus: "#49A8FF",
                transparent: "rgba(0, 0, 0, 0)",
                backgroundLanding: "#f4f9fc",
                backgroundLandingBorder: "rgba(155, 179, 206, 0.8)"
            }
        }
    }
}));
app.mount('#app')
