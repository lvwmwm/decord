// Module ID: 15351
// Function ID: 15352
// Dependencies: [15348]

// Module 15351
import _mod15348 from "module_15348" /* 15348 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15348(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
