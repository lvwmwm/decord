// Module ID: 5726
// Function ID: 5727
// Name: flatRest
// Dependencies: [5727, 5737]

// Module 5726 (flatRest)
import flatRest from "flatRest" /* 5727 */;
import basePick from "basePick" /* 5737 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
