// Bai 1:
// function getSquare(num){
//     square = num*num
//     return square   
// }
// console.log(getSquare(2));

// Bai 2:
// function getAcreage(r){
//     S = r*r*3.14
//     return S
// }
// function getPerimeter(r){
//     P = 2*r*3.14
//     return P
// }

// // Bai 3:
// function getFactorial(num){
//     let sum = 1
//     for(i = 1; i <= num; i++){
//         sum = sum * i
//     }
//     return sum
// }

// // Bai 4:
// function checkNumber(){
//     let any = prompt('Nhập ký tự')
//     if (any % 2 == 0 || any % 2 == 1){
//         document.write('true')
//     } else {
//         document.write('false')
//     }
// }

// Bai 5:
// function findMin(a,b,c){
//     if (a > b) {
//         if (b > c) {
//             document.write(c + " là số nhỏ nhất");
//         } else document.write(b + " là số nhỏ nhất");
//     } else if (a < c) {
//         document.write(a + " là số nhỏ nhất");
//     } else document.write(c + " là số nhỏ nhất");
// }
// Bai 6:
// function checkNumber(num){
//     if (num >= 0 && num % 2 == 0 || num % 2 ==1){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// Bai 7:
// function changePosition(num1,num2){
//     let a = num1
//     let num1 = num2
//     let num2 = a
// }
// Bai 8:
// function reverseArray() {
//     let array = new Array();
//     for (i = 0; i < 5; i++) {
//         array[i] = parseInt(prompt("Nhập số nguyên bất kỳ"));
//     }
//     document.write(array + "<br>");
//     array2 = array.reverse();
//     document.write(array2);
// }
// Bai 9:
// function checkCharactors(){
//     let array = ["c", 17, "g", 24, "d", 9, "o", "e", 1, "y", "c", 17, "m"]
//     let char = prompt("Nhập ký tự bất kỳ");
//     let boolean = "";
//     let position = 0;
//     let n = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (char == array[i]) {
//             position = i;
//             boolean = true;
//             n += 1;
//         }
//     }
//     if (boolean == true) {
//         document.write(n);
//     }else {
//         document.write("-1");
//     }
// }