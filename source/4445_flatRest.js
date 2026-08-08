// Module ID: 4445
// Function ID: 4446
// Name: flatRest
// Dependencies: [4446, 4456]

// Module 4445 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4456) /* basePick */(arg0, arg1);
  }
  return obj;
});
