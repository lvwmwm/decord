// Module ID: 5822
// Function ID: 5823
// Name: flatRest
// Dependencies: [5823, 5833]

// Module 5822 (flatRest)
import flatRest from "flatRest" /* 5823 */;
import basePick from "basePick" /* 5833 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
