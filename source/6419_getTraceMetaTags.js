// Module ID: 6419
// Function ID: 57535
// Name: getTraceMetaTags
// Dependencies: [57, 6418]
// Exports: getTraceMetaTags

// Module 6419 (getTraceMetaTags)
import _slicedToArray from "_slicedToArray";


export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(require(6418) /* getTraceData */.getTraceData());
  const mapped = entries.map((arg0) => {
    const tmp = outer1_2(arg0, 2);
    return "<meta name=\"" + tmp[0] + "\" content=\"" + tmp[1] + "\"/>";
  });
  return mapped.join("\n");
};
