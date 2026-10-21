// Module ID: 15248
// Function ID: 15249
// Dependencies: [15245]

// Module 15248
import _mod15245 from "module_15245" /* 15245 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15245(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
