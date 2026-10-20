// Module ID: 1838
// Function ID: 1839
// Dependencies: [1755]
// Exports: createAnimatedPropAdapter

// Module 1838
import configureProps from "configureProps" /* 1755 */;


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
