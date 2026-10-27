// Module ID: 1837
// Function ID: 1838
// Dependencies: [1754]
// Exports: createAnimatedPropAdapter

// Module 1837
import configureProps from "configureProps" /* 1754 */;


export const createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((item) => {
      obj[item] = true;
    });
  }
  const obj2 = configureProps;
  const result = obj2.addWhitelistedNativeProps(obj);
  return arg0;
};
