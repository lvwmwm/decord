// Module ID: 4283
// Function ID: 37512
// Name: flatRest
// Dependencies: [4284, 4294]

// Module 4283 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4294) /* basePick */(arg0, arg1);
  }
  return obj;
});
