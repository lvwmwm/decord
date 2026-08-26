// Module ID: 4589
// Function ID: 4590
// Name: flatRest
// Dependencies: [4590, 4600]

// Module 4589 (flatRest)
import flatRest from "flatRest" /* 4590 */;
import basePick from "basePick" /* 4600 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
