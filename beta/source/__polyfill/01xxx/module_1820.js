// Module ID: 1820
// Function ID: 1821
// Dependencies: [1737]
// Exports: createAnimatedPropAdapter

// Module 1820
import configureProps from "configureProps" /* 1737 */;


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
