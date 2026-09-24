// Module ID: 13157
// Function ID: 13158
// Dependencies: [13156]
// Exports: getTraceMetaTags

// Module 13157
import _mod13156 from "module_13156" /* 13156 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod13156.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
