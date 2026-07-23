// Module ID: 8036
// Function ID: 63807
// Name: extractBrush
// Dependencies: [27, 8037]
// Exports: default

// Module 8036 (extractBrush)
import { processColor } from "get ActivityIndicator";

const re3 = /^url\(#(.+)\)$/;
let closure_4 = { type: 2 };
let closure_5 = { type: 3 };
let closure_6 = { type: 4 };

export default function extractBrush(str) {
  if ("none" === str) {
    return null;
  } else if ("currentColor" === str) {
    return closure_4;
  } else if ("context-fill" === str) {
    return closure_5;
  } else if ("context-stroke" === str) {
    return closure_6;
  } else {
    let match = "string" === typeof str;
    if (match) {
      match = str.match(closure_3);
    }
    if (match) {
      let obj = { type: 1, brushRef: match[1] };
      return obj;
    } else {
      obj = require(8037) /* parsePercentageRGBColor */;
      const tmp6 = processColor(obj.convertPercentageColor(str));
      if ("number" === typeof tmp6) {
        obj = { type: 0, payload: tmp6 };
        let tmp11 = obj;
      } else {
        const _console = console;
        const _String = String;
        const _HermesInternal = HermesInternal;
        console.warn("\"" + String(str) + "\" is not a valid color or brush");
        tmp11 = null;
      }
      return tmp11;
    }
  }
};
