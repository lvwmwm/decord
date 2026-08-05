// Module ID: 4396
// Function ID: 4397
// Name: flatRest
// Dependencies: [4397, 4407]

// Module 4396 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4407) /* basePick */(arg0, arg1);
  }
  return obj;
});
