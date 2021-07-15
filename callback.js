const add = (firstNum, secondNum, callback) => {
  setTimeout(() => {
    callback(firstNum + secondNum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
