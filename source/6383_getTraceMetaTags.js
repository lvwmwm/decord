// Module ID: 6383
// Function ID: 57445
// Name: getTraceMetaTags
// Dependencies: [57, 6382]
// Exports: getTraceMetaTags

// Module 6383 (getTraceMetaTags)
import _slicedToArray from "_slicedToArray";


export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(require(6382) /* getTraceData */.getTraceData());
  const mapped = entries.map((arg0) => {
    const tmp = outer1_2(arg0, 2);
    return "<meta name=\"" + tmp[0] + "\" content=\"" + tmp[1] + "\"/>";
  });
  return mapped.join("\n");
};
