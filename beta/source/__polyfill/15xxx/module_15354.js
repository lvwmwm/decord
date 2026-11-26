// Module ID: 15354
// Function ID: 15355
// Dependencies: [15351]

// Module 15354
import _mod15351 from "module_15351" /* 15351 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15351(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
