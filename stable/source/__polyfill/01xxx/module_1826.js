// Module ID: 1826
// Function ID: 1827
// Dependencies: [1743]
// Exports: createAnimatedPropAdapter

// Module 1826
import configureProps from "configureProps" /* 1743 */;


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
