import myFile from './my.png'
var app = {
    data() {
        return {
            myPng: myFile
        }
    },
    template: `
        <div>我是入口文件
            <img :src="myPng" />
        </div>
    `
}


export var num = 1


var num1 = 2
var num2 = 4
export {num1, num2}


export function add(a, b){return a + b}


export default app