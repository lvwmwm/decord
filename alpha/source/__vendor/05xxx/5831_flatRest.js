// Module ID: 5831
// Function ID: 5832
// Name: flatRest
// Dependencies: [5832, 5842]

// Module 5831 (flatRest)
import flatRest from "flatRest" /* 5832 */;
import basePick from "basePick" /* 5842 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
