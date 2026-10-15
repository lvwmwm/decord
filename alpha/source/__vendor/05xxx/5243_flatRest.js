// Module ID: 5243
// Function ID: 5244
// Name: flatRest
// Dependencies: [5244, 5254]

// Module 5243 (flatRest)
import flatRest from "flatRest" /* 5244 */;
import basePick from "basePick" /* 5254 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
