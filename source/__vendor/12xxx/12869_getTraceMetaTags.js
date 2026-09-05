// Module ID: 12869
// Function ID: 12870
// Name: getTraceMetaTags
// Dependencies: [12868]

// Module 12869 (getTraceMetaTags)
import getTraceData from "getTraceData" /* 12868 */;

require = arg1;
const dependencyMap = arg6;
arg5.getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(getTraceData.getTraceData());
  const mapped = entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
