// Module ID: 5784
// Function ID: 5785
// Name: flatRest
// Dependencies: [5785, 5795]

// Module 5784 (flatRest)
import flatRest from "flatRest" /* 5785 */;
import basePick from "basePick" /* 5795 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
