// Module ID: 1833
// Function ID: 1834
// Dependencies: [1750]
// Exports: createAnimatedPropAdapter

// Module 1833
import configureProps from "configureProps" /* 1750 */;


export function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((item) => {
      obj[item] = true;
    });
  }
  const obj2 = configureProps;
  const result = obj2.addWhitelistedNativeProps(obj);
  return arg0;
}
