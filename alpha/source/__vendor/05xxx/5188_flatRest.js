// Module ID: 5188
// Function ID: 5189
// Name: flatRest
// Dependencies: [5189, 5199]

// Module 5188 (flatRest)
import flatRest from "flatRest" /* 5189 */;
import basePick from "basePick" /* 5199 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
