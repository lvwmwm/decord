// Module ID: 13121
// Function ID: 13122
// Dependencies: [13120]
// Exports: getTraceMetaTags

// Module 13121
import _mod13120 from "module_13120" /* 13120 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod13120.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
