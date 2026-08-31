// Module ID: 4593
// Function ID: 4594
// Name: flatRest
// Dependencies: [4594, 4604]

// Module 4593 (flatRest)
import flatRest from "flatRest" /* 4594 */;
import basePick from "basePick" /* 4604 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
