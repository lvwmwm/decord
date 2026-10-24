// Module ID: 15346
// Function ID: 15347
// Dependencies: [15343]

// Module 15346
import _mod15343 from "module_15343" /* 15343 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15343(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
