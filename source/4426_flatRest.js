// Module ID: 4426
// Function ID: 4427
// Name: flatRest
// Dependencies: [4427, 4437]

// Module 4426 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4437) /* basePick */(arg0, arg1);
  }
  return obj;
});
