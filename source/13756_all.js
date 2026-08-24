// Module ID: 13756
// Function ID: 13757
// Name: all
// Dependencies: [13757]

// Module 13756 (all)
import all from "all" /* 13757 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};
