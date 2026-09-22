// Module ID: 13002
// Function ID: 13003
// Dependencies: [13001]
// Exports: getTraceMetaTags

// Module 13002
import _mod13001 from "module_13001" /* 13001 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod13001.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
