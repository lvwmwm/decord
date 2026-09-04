// Module ID: 4628
// Function ID: 4629
// Name: flatRest
// Dependencies: [4629, 4639]

// Module 4628 (flatRest)
import flatRest from "flatRest" /* 4629 */;
import basePick from "basePick" /* 4639 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
