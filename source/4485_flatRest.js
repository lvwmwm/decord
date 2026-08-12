// Module ID: 4485
// Function ID: 4486
// Name: flatRest
// Dependencies: [4486, 4496]

// Module 4485 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4496) /* basePick */(arg0, arg1);
  }
  return obj;
});
