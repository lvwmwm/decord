// Module ID: 14679
// Function ID: 14680
// Dependencies: [14676]

// Module 14679
import _mod14676 from "module_14676" /* 14676 */;

let set;


export default (arg0, arg1) => {
  set = new _mod14676(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
