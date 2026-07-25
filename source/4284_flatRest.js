// Module ID: 4284
// Function ID: 37524
// Name: flatRest
// Dependencies: [4285, 4295]

// Module 4284 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4295) /* basePick */(arg0, arg1);
  }
  return obj;
});
