// Module ID: 5789
// Function ID: 5790
// Name: flatRest
// Dependencies: [5790, 5800]

// Module 5789 (flatRest)
import flatRest from "flatRest" /* 5790 */;
import basePick from "basePick" /* 5800 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
