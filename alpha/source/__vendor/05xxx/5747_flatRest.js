// Module ID: 5747
// Function ID: 5748
// Name: flatRest
// Dependencies: [5748, 5758]

// Module 5747 (flatRest)
import flatRest from "flatRest" /* 5748 */;
import basePick from "basePick" /* 5758 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
