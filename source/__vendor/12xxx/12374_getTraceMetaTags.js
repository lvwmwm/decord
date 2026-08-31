// Module ID: 12374
// Function ID: 12375
// Name: getTraceMetaTags
// Dependencies: [12373]

// Module 12374 (getTraceMetaTags)
import getTraceData from "getTraceData" /* 12373 */;

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
