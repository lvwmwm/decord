// Module ID: 16550
// Function ID: 16551
// Dependencies: [16547]

// Module 16550
import _mod16547 from "module_16547" /* 16547 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16547(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
