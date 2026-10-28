// Module ID: 15613
// Function ID: 15614
// Dependencies: [15610]

// Module 15613
import _mod15610 from "module_15610" /* 15610 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15610(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
