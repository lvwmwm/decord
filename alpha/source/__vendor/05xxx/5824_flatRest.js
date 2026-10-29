// Module ID: 5824
// Function ID: 5825
// Name: flatRest
// Dependencies: [5825, 5835]

// Module 5824 (flatRest)
import flatRest from "flatRest" /* 5825 */;
import basePick from "basePick" /* 5835 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
