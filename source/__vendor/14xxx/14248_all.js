// Module ID: 14248
// Function ID: 14249
// Name: all
// Dependencies: [14249]

// Module 14248 (all)
import all from "all" /* 14249 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};
