// Module ID: 4443
// Function ID: 4444
// Name: flatRest
// Dependencies: [4444, 4454]

// Module 4443 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4454) /* basePick */(arg0, arg1);
  }
  return obj;
});
