// Module ID: 5884
// Function ID: 5885
// Name: flatRest
// Dependencies: [5885, 5895]

// Module 5884 (flatRest)
import flatRest from "flatRest" /* 5885 */;
import basePick from "basePick" /* 5895 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
