// Module ID: 15848
// Function ID: 15849
// Dependencies: [15845]

// Module 15848
import _mod15845 from "module_15845" /* 15845 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15845(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
