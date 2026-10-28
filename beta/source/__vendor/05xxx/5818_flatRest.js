// Module ID: 5818
// Function ID: 5819
// Name: flatRest
// Dependencies: [5819, 5829]

// Module 5818 (flatRest)
import flatRest from "flatRest" /* 5819 */;
import basePick from "basePick" /* 5829 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
