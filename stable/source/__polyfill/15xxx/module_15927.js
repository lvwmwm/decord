// Module ID: 15927
// Function ID: 15928
// Dependencies: [15924]

// Module 15927
import _mod15924 from "module_15924" /* 15924 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15924(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
