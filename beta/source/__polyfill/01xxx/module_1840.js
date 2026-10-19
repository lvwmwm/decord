// Module ID: 1840
// Function ID: 1841
// Dependencies: [1757]
// Exports: createAnimatedPropAdapter

// Module 1840
import configureProps from "configureProps" /* 1757 */;


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
