// Module ID: 15385
// Function ID: 15386
// Dependencies: [15382]

// Module 15385
import _mod15382 from "module_15382" /* 15382 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15382(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
