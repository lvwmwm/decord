// Module ID: 7669
// Function ID: 7670
// Name: getTraceMetaTags
// Dependencies: [7668]

// Module 7669 (getTraceMetaTags)
import getTraceData from "getTraceData" /* 7668 */;

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
