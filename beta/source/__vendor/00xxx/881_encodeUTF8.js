// Module ID: 881
// Function ID: 882
// Name: encodeUTF8
// Dependencies: [882, 883]
// Exports: encodeUTF8

// Module 881 (encodeUTF8)
import _mod882 from "module_882" /* 882 */;

let tmp;
const _mod883 = tmp(883);

export const encodeUTF8 = function encodeUTF8(json) {
  const obj = _mod882;
  const sentryCarrier = obj.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const tmpResult = _mod883;
    const encodePolyfill = tmpResult.useEncodePolyfill();
  }
  return sentryCarrier.encodePolyfill(json);
};
