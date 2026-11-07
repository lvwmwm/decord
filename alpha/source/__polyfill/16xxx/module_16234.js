// Module ID: 16234
// Function ID: 16235
// Dependencies: [16231]

// Module 16234
import _mod16231 from "module_16231" /* 16231 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16231(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
