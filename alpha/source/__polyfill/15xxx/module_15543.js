// Module ID: 15543
// Function ID: 15544
// Dependencies: [15540]

// Module 15543
import _mod15540 from "module_15540" /* 15540 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15540(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
