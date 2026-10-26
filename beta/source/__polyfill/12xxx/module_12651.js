// Module ID: 12651
// Function ID: 12652
// Dependencies: [12650]
// Exports: getTraceMetaTags

// Module 12651
import _mod12650 from "module_12650" /* 12650 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12650;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
