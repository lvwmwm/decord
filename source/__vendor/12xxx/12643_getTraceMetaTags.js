// Module ID: 12643
// Function ID: 12644
// Name: getTraceMetaTags
// Dependencies: [12642]

// Module 12643 (getTraceMetaTags)
import getTraceData from "getTraceData" /* 12642 */;

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
