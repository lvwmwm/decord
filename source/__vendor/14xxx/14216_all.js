// Module ID: 14216
// Function ID: 14217
// Name: all
// Dependencies: [14217]

// Module 14216 (all)
import all from "all" /* 14217 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};
