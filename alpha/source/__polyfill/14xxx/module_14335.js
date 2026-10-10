// Module ID: 14335
// Function ID: 14336
// Dependencies: [14332]

// Module 14335
import _mod14332 from "module_14332" /* 14332 */;

let set;


export default (arg0, arg1) => {
  set = new _mod14332(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
