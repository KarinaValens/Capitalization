//Real Capitalization

const str = "PEter";

capitalize(str); // it is necesary to call the function in order the console.log work

function capitalize(str) {
    newStr = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
    console.log(newStr);
}

console.log();

//3caPitalization
const nameSt = "Frederica";

const newName = (nameSt.substring(0, 2).toLowerCase()) + (nameSt.substring(2, 3).toUpperCase()) + (nameSt.substring(3).toLowerCase());
//console.log(newName);