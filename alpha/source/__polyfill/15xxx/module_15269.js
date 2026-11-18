// Module ID: 15269
// Function ID: 15270
// Dependencies: [15266]

// Module 15269
import _mod15266 from "module_15266" /* 15266 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15266(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
