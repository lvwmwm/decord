// Module ID: 15326
// Function ID: 15327
// Dependencies: [15323]

// Module 15326
import _mod15323 from "module_15323" /* 15323 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15323(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
