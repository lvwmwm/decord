// Module ID: 5283
// Function ID: 5284
// Name: flatRest
// Dependencies: [5284, 5294]

// Module 5283 (flatRest)
import flatRest from "flatRest" /* 5284 */;
import basePick from "basePick" /* 5294 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
