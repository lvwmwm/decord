// Module ID: 8030
// Function ID: 63760
// Name: extractBrush
// Dependencies: []
// Exports: default

// Module 8030 (extractBrush)
const processColor = require(dependencyMap[0]).processColor;
let closure_3 = /^url\(#(.+)\)$/;
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
      obj = require(dependencyMap[1]);
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
