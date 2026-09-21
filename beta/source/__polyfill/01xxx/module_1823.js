// Module ID: 1823
// Function ID: 1824
// Dependencies: [1740]
// Exports: createAnimatedPropAdapter

// Module 1823
import configureProps from "configureProps" /* 1740 */;

require = arg1;
const dependencyMap = arg6;

export const createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((item) => {
      obj[item] = true;
    });
  }
  const result = configureProps.addWhitelistedNativeProps(obj);
  return arg0;
};
