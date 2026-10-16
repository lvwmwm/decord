// Module ID: 5246
// Function ID: 5247
// Name: flatRest
// Dependencies: [5247, 5257]

// Module 5246 (flatRest)
import flatRest from "flatRest" /* 5247 */;
import basePick from "basePick" /* 5257 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
