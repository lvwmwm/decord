// Module ID: 4397
// Function ID: 4398
// Name: flatRest
// Dependencies: [4398, 4408]

// Module 4397 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4408) /* basePick */(arg0, arg1);
  }
  return obj;
});
