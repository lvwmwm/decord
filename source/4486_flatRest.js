// Module ID: 4486
// Function ID: 4487
// Name: flatRest
// Dependencies: [4487, 4497]

// Module 4486 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4497) /* basePick */(arg0, arg1);
  }
  return obj;
});
