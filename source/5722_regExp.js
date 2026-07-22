// Module ID: 5722
// Function ID: 49207
// Name: regExp
// Dependencies: []

// Module 5722 (regExp)
const obj = {};
const keys = Object.keys(obj);
const joined = keys.join("|");
const regExp = new RegExp(joined, "g");
const regExp1 = new RegExp(joined, "");
function removeAccents(str) {
  return str.replace(regExp, (arg0) => closure_0[arg0]);
}
module.exports.has = function hasAccents(str) {
  return str.match(regExp1);
};
module.exports.remove = removeAccents;

export default removeAccents;
