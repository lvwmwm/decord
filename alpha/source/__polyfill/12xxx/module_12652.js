// Module ID: 12652
// Function ID: 12653
// Dependencies: [12651]
// Exports: getTraceMetaTags

// Module 12652
import _mod12651 from "module_12651" /* 12651 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12651;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
