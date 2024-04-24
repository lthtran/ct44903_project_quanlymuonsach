import router from "@/router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";


createApp(App).use(router).mount("#app");
// createApp(App).use(createPinia()).use(router).mount("#app")

