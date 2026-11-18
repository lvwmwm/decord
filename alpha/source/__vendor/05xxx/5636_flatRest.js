// Module ID: 5636
// Function ID: 5637
// Name: flatRest
// Dependencies: [5637, 5647]

// Module 5636 (flatRest)
import flatRest from "flatRest" /* 5637 */;
import basePick from "basePick" /* 5647 */;


export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
