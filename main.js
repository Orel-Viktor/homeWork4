// let a = prompt('Введите трехзначное число');
// if (a.length !==3){
//   alert('Сказали же трехзначное!!');
// } else{
//     if (a[0] == a[1] && a[0] == a[2]) {
//     alert('Все числа равны ');
//     } else if (a[0] == a[1] || a[0] == a[2] || a[1] == a[2]){
//     alert ('есть совпадение)');
//     } else{
//       alert( 'Упс ни однго совпадения =(' );
//     }
// }

let b = prompt('Введите трехзначное число число')
switch (+b) {
  
  case b[0] === b[1] || b[0] === b[2] ||  b[1] === b[2]:
    alert('круто')
    break;

  default:
    alert( 'Упс ни однго совпадения =(' );
}

// let c = prompt('введите число');
// switch(+c){
//   case 4:
//     alert('заебись')
//      break;

   
// }

// const value = prompt('Введите число'); 
// switch (+value) {

//     case 1: {
//         console.log('a');
//         break;
//     }

// }