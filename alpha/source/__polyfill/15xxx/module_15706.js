// Module ID: 15706
// Function ID: 15707
// Dependencies: [15707]

// Module 15706
import _mod15707 from "module_15707" /* 15707 */;


export default (obj) => {
  let tmp2;
  if (typeof obj === "object") {
    tmp2 = null !== obj;
  } else {
    tmp2 = _mod15707(obj);
  }
  return tmp2;
};
