// Module ID: 5786
// Function ID: 5787
// Name: flatRest
// Dependencies: [5787, 5797]

// Module 5786 (flatRest)
import flatRest from "flatRest" /* 5787 */;
import basePick from "basePick" /* 5797 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
