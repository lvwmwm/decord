// Module ID: 15350
// Function ID: 15351
// Dependencies: [15347]

// Module 15350
import _mod15347 from "module_15347" /* 15347 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15347(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
