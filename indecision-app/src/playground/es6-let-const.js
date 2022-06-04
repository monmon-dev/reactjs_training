var nameVar = "Mon";
nameVar = "Sy";
console.log("nameVar: ", nameVar);

let nameLet = "Jen";
nameLet = "Julie"; //you can't redefined the nameLet
console.log("nameLet: ", nameLet);

const nameConst = "Hot";
console.log("nameConst: ", nameConst);

function getPetName() {
  const petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping
const fullName = "Reymond Turbanada";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
