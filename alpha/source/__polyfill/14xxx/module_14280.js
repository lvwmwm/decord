// Module ID: 14280
// Function ID: 14281
// Dependencies: [14277]

// Module 14280
import _mod14277 from "module_14277" /* 14277 */;

let set;


export default (arg0, arg1) => {
  set = new _mod14277(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
