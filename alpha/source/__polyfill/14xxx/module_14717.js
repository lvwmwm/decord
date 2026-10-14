// Module ID: 14717
// Function ID: 14718
// Dependencies: [14714]

// Module 14717
import _mod14714 from "module_14714" /* 14714 */;

let set;


export default (arg0, arg1) => {
  set = new _mod14714(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
