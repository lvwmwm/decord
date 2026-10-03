// Module ID: 4992
// Function ID: 4993
// Name: flatRest
// Dependencies: [4993, 5003]

// Module 4992 (flatRest)
import flatRest from "flatRest" /* 4993 */;
import basePick from "basePick" /* 5003 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
