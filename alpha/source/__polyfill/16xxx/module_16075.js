// Module ID: 16075
// Function ID: 16076
// Dependencies: [16072]

// Module 16075
import _mod16072 from "module_16072" /* 16072 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16072(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
