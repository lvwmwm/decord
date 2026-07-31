// Module ID: 4335
// Function ID: 4336
// Name: flatRest
// Dependencies: [4336, 4346]

// Module 4335 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4346) /* basePick */(arg0, arg1);
  }
  return obj;
});
