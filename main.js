let a = prompt('Введите трехзначное число IF ELSE');
if (a.length !== 3) {
  alert('Сказали же трехзначное!!');

} else {
  if (a[0] == a[1] && a[0] == a[2]) {
    alert('Все числа равны ');
  } else if (a[0] == a[1] || a[0] == a[2] || a[1] == a[2]) {
    alert('Есть совпадение)');
  } else {
    alert('Упс ни однго совпадения =(');
  }
}


let b = prompt('Введите трехзначное число число SWITCH')
switch (true) {

  case b.length !== 3:
    alert('Сказали же трехзначное!!')
    break;

  case b[0] === b[1] && b[0] === b[2]:
    alert('Все числа равны');
    break;

  case b[0] === b[1] || b[0] === b[2] || b[1] === b[2]:
    alert('Есть совпадения')
    break;

  default:
    alert('Упс ни однго совпадения =(');
}




