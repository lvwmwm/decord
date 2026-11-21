// Module ID: 15342
// Function ID: 15343
// Dependencies: [15339]

// Module 15342
import _mod15339 from "module_15339" /* 15339 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15339(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
