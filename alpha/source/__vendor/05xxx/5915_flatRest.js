// Module ID: 5915
// Function ID: 5916
// Name: flatRest
// Dependencies: [5916, 5926]

// Module 5915 (flatRest)
import flatRest from "flatRest" /* 5916 */;
import basePick from "basePick" /* 5926 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
