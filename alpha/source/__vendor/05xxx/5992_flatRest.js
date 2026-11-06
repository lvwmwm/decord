// Module ID: 5992
// Function ID: 5993
// Name: flatRest
// Dependencies: [5993, 6003]

// Module 5992 (flatRest)
import flatRest from "flatRest" /* 5993 */;
import basePick from "basePick" /* 6003 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
