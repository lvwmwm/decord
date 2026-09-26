// Module ID: 13151
// Function ID: 13152
// Dependencies: [13150]
// Exports: getTraceMetaTags

// Module 13151
import _mod13150 from "module_13150" /* 13150 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod13150.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
