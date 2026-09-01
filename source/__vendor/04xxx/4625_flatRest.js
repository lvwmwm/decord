// Module ID: 4625
// Function ID: 4626
// Name: flatRest
// Dependencies: [4626, 4636]

// Module 4625 (flatRest)
import flatRest from "flatRest" /* 4626 */;
import basePick from "basePick" /* 4636 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
