// Module ID: 5836
// Function ID: 5837
// Name: flatRest
// Dependencies: [5837, 5847]

// Module 5836 (flatRest)
import flatRest from "flatRest" /* 5837 */;
import basePick from "basePick" /* 5847 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
