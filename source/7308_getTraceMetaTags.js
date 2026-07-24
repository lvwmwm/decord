// Module ID: 7308
// Function ID: 58993
// Name: getTraceMetaTags
// Dependencies: [57, 7307]
// Exports: getTraceMetaTags

// Module 7308 (getTraceMetaTags)
import _slicedToArray from "_slicedToArray";


export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(require(7307) /* getTraceData */.getTraceData());
  const mapped = entries.map((arg0) => {
    const tmp = outer1_2(arg0, 2);
    return "<meta name=\"" + tmp[0] + "\" content=\"" + tmp[1] + "\"/>";
  });
  return mapped.join("\n");
};
