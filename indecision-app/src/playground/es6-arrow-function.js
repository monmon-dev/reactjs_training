// function square(x) {
//   return x * x;
// }
// console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

// console.log(square(8));
// console.log(squareArrow(8));

// const getFirstName = (firstName) => {
//   return firstName.split(" ")[0];
// };
const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("Mike Smith"));
