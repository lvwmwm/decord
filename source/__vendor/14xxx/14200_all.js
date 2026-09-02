// Module ID: 14200
// Function ID: 14201
// Name: all
// Dependencies: [14201]

// Module 14200 (all)
import all from "all" /* 14201 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};
