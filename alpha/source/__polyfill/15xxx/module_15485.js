// Module ID: 15485
// Function ID: 15486
// Dependencies: [15482]

// Module 15485
import _mod15482 from "module_15482" /* 15482 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15482(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
