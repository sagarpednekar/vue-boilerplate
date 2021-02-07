import { createApp } from "vue";

import App from "./App.vue";

import TodoComponent from "./Components/TodoListing/TodoList.vue";

const app = createApp(App);


/**
 * Register global components here
 */

app.component("todo-list", TodoComponent);

// load our app by finding element with id
app.mount("#app");