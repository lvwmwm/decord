// Module ID: 14184
// Function ID: 14185
// Dependencies: [14181]

// Module 14184
import _mod14181 from "module_14181" /* 14181 */;

let set;


export default (arg0, arg1) => {
  set = new _mod14181(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
