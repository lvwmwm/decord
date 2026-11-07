// Module ID: 5965
// Function ID: 5966
// Name: flatRest
// Dependencies: [5966, 5976]

// Module 5965 (flatRest)
import flatRest from "flatRest" /* 5966 */;
import basePick from "basePick" /* 5976 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
