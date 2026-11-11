// Module ID: 6080
// Function ID: 6081
// Name: flatRest
// Dependencies: [6081, 6091]

// Module 6080 (flatRest)
import flatRest from "flatRest" /* 6081 */;
import basePick from "basePick" /* 6091 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
