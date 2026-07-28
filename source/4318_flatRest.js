// Module ID: 4318
// Function ID: 37637
// Name: flatRest
// Dependencies: [4319, 4329]

// Module 4318 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4329) /* basePick */(arg0, arg1);
  }
  return obj;
});
