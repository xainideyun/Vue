import Vue from './vue.js'
import App from './app.js'
import {num, num1, num2, add} from './app.js'


console.log(App);
console.log(num, num1, num2, add(num1, num2));


new Vue({
    el: '#app',
    template: '<App />',
    components: {
        App
    }
})
