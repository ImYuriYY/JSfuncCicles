// Циклы While и For
// TASK 1

// for(let i = 1; i <= 100; i++) {
//     console.log(i)
// }





// TASK 2

// for(let i = 11; i <= 33; i++){
//     console.log(i)
// }





// TASK 3

// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }





// TASK 4

// let result = 0;

// for(let i = 0; i <= 100; i++){
//     result += i
// }
// console.log(result)











// Работа с For для массивов
// TASK 1

// const arr = [1, 2, 3, 4, 5]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }





// TASK 2

// const arr = [1, 2, 3, 4, 5]
// let result = 0;

// for(let i = 0; i < arr.length; i++) {
//     result += arr[i]
// }
// console.log(result)










// Работа с For-In

// const obj = {
//     green: 'Зеленый',
//     red: 'Красный',
//     blue: 'Голубой'
// }

// for (key in obj) {
//     console.log(`${key}: ${obj[key]}`)
// }





// TASK 2

// const obj = {
//     kolya: 200,
//     vasya: 300,
//     petya: 400
// }

// for (key in obj) {
//     console.log(`${key} - зарплата ${obj[key]} долларов`)
// }










// ЗАДАЧИ
// TASK 1

// const arr = [2, 5, 9, 15, 0, 4]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 3 && arr[i] < 10) console.log(arr[i])
// }





// TASK 2
// const arr = [1, 2, 6, 654, 12, -54, -124, 431, -12, -33, -4, -12, 54]
// let result = 0;

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] >= 0) result += arr[i]
// }
// console.log(result)





// TASK 3

// const arr = [1, 2, 5, 9, 4, 13, 4, 10]

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 4) {
//         console.log('Есть')
//         break
//     }
// }






// TASK 4

// const arr = [10, 20, 30, 50, 235, 3000]

// for(let i = 0; i < arr.length; i++) {
//     switch(String(arr[i])[0]) {
//         case '1':
//         case '2':
//         case '5':
//             console.log(arr[i])
//             break
//     }
// }





// TASK 5

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = '-'
// for(let i = 0; i < arr.length; i++){
//     result += (String(arr[i]) + '-')
// }
// console.log(result)





// TASK 6

// const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

// for(let i = 0; i < arr.length; i++) {
//     switch(i){
//         case 0:
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//             console.log(arr[i])
//             break
//         case 5:
//         case 6:
//             console.log('WEEKEND!!!' + arr[i])
//             break
//     }
// }





// TASK 7

// const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
// let day = 'Среда'

// for(let i = 0; i < arr.length; i++ ) {
//     switch(arr[i]){
//         case (day):
//             console.log('CURRENT DAY - ' + arr[i])
//             break
//         default:
//             console.log(arr[i])
//             break
//     }
// }





// TASK 8

// let n = 1000
// let num = 0

// for(let i = 0; n > 50; i++){
//     num++
//     n /= 2
// }
// console.log(`Итераций - ${num}\nЧисло - ${n}`)










