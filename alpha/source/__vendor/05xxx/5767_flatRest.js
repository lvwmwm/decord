// Module ID: 5767
// Function ID: 5768
// Name: flatRest
// Dependencies: [5768, 5778]

// Module 5767 (flatRest)
import flatRest from "flatRest" /* 5768 */;
import basePick from "basePick" /* 5778 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
