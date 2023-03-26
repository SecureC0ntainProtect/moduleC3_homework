function checkPropInObj (str, obj) {
  return (str in obj);
}

console.log(checkPropInObj(`name`, { name: 'Вася', surname: 'Пупкин', age: 25 }));