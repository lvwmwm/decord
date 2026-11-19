// Module ID: 5605
// Function ID: 5606
// Name: flatRest
// Dependencies: [5606, 5616]

// Module 5605 (flatRest)
import flatRest from "flatRest" /* 5606 */;
import basePick from "basePick" /* 5616 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
