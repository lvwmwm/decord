// Module ID: 12631
// Function ID: 12632
// Name: getTraceMetaTags
// Dependencies: [12630]

// Module 12631 (getTraceMetaTags)
import getTraceData from "getTraceData" /* 12630 */;

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
