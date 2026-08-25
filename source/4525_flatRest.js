// Module ID: 4525
// Function ID: 4526
// Name: flatRest
// Dependencies: [4526, 4536]

// Module 4525 (flatRest)
import flatRest from "flatRest" /* 4526 */;
import basePick from "basePick" /* 4536 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
