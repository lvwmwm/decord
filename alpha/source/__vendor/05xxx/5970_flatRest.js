// Module ID: 5970
// Function ID: 5971
// Name: flatRest
// Dependencies: [5971, 5981]

// Module 5970 (flatRest)
import flatRest from "flatRest" /* 5971 */;
import basePick from "basePick" /* 5981 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
