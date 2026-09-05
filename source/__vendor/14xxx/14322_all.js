// Module ID: 14322
// Function ID: 14323
// Name: all
// Dependencies: [14323]

// Module 14322 (all)
import all from "all" /* 14323 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};
