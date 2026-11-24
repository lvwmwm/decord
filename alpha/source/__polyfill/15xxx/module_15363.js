// Module ID: 15363
// Function ID: 15364
// Dependencies: [15360]

// Module 15363
import _mod15360 from "module_15360" /* 15360 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15360(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
