// Module ID: 869
// Function ID: 870
// Name: encodeUTF8
// Dependencies: [870, 871]
// Exports: encodeUTF8

// Module 869 (encodeUTF8)
import _mod870 from "module_870" /* 870 */;

let tmp;
const _mod871 = tmp(871);

export const encodeUTF8 = function encodeUTF8(json) {
  const obj = _mod870;
  const sentryCarrier = obj.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const tmpResult = _mod871;
    const encodePolyfill = tmpResult.useEncodePolyfill();
  }
  return sentryCarrier.encodePolyfill(json);
};
