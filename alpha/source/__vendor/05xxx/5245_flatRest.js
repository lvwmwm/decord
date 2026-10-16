// Module ID: 5245
// Function ID: 5246
// Name: flatRest
// Dependencies: [5246, 5256]

// Module 5245 (flatRest)
import flatRest from "flatRest" /* 5246 */;
import basePick from "basePick" /* 5256 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
