import Vue from './vue.js.js'
import App from './app.js.js'
import {num, num1, num2, add} from './app.js.js'


console.log(App);
console.log(num, num1, num2, add(num1, num2));


new Vue({
    el: '#app',
    template: '<App />',
    components: {
        App
    }
})
