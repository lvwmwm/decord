// Module ID: 881
// Function ID: 9762
// Name: getTraceMetaTags
// Dependencies: [57, 880]
// Exports: getTraceMetaTags

// Module 881 (getTraceMetaTags)
import _slicedToArray from "_slicedToArray";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  if (!arg0) {
    traceData = require(880) /* getTraceData */.getTraceData();
    const obj = require(880) /* getTraceData */;
  }
  const entries = Object.entries(traceData);
  const mapped = entries.map((arg0) => {
    const tmp = outer1_2(arg0, 2);
    return "<meta name=\"" + tmp[0] + "\" content=\"" + tmp[1] + "\"/>";
  });
  return mapped.join("\n");
};
