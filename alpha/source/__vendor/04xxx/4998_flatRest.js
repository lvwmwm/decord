// Module ID: 4998
// Function ID: 4999
// Name: flatRest
// Dependencies: [4999, 5009]

// Module 4998 (flatRest)
import flatRest from "flatRest" /* 4999 */;
import basePick from "basePick" /* 5009 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
