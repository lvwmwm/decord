// Module ID: 5183
// Function ID: 5184
// Name: flatRest
// Dependencies: [5184, 5194]

// Module 5183 (flatRest)
import flatRest from "flatRest" /* 5184 */;
import basePick from "basePick" /* 5194 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
