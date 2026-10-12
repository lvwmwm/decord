// Module ID: 14358
// Function ID: 14359
// Dependencies: [14355]

// Module 14358
import _mod14355 from "module_14355" /* 14355 */;

let set;


export default (arg0, arg1) => {
  set = new _mod14355(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
