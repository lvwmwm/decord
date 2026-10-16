// Module ID: 15046
// Function ID: 15047
// Dependencies: [15043]

// Module 15046
import _mod15043 from "module_15043" /* 15043 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15043(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
