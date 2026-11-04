// Module ID: 1832
// Function ID: 1833
// Dependencies: [1749]
// Exports: createAnimatedPropAdapter

// Module 1832
import configureProps from "configureProps" /* 1749 */;


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
