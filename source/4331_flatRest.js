// Module ID: 4331
// Function ID: 4332
// Name: flatRest
// Dependencies: [4332, 4342]

// Module 4331 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4342) /* basePick */(arg0, arg1);
  }
  return obj;
});
