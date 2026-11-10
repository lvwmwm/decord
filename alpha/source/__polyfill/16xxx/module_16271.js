// Module ID: 16271
// Function ID: 16272
// Dependencies: [16268]

// Module 16271
import _mod16268 from "module_16268" /* 16268 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16268(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
