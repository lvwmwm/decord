// Module ID: 13891
// Function ID: 13892
// Name: all
// Dependencies: [13892]

// Module 13891 (all)
import all from "all" /* 13892 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};
