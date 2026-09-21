// Module ID: 873
// Function ID: 874
// Name: encodeUTF8
// Dependencies: [874, 875]
// Exports: encodeUTF8

// Module 873 (encodeUTF8)
import _mod874 from "module_874" /* 874 */;
import globalEncodeFactory from "globalEncodeFactory" /* 875 */;

require = arg1;
const dependencyMap = arg6;

export const encodeUTF8 = function encodeUTF8(json) {
  const sentryCarrier = _mod874.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = globalEncodeFactory.useEncodePolyfill();
    const tmpResult = globalEncodeFactory;
  }
  return sentryCarrier.encodePolyfill(json);
};
