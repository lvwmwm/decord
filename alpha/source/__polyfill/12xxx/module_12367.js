// Module ID: 12367
// Function ID: 12368
// Dependencies: [12366]
// Exports: getTraceMetaTags

// Module 12367
import _mod12366 from "module_12366" /* 12366 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod12366.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
