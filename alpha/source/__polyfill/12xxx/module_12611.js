// Module ID: 12611
// Function ID: 12612
// Dependencies: [12610]
// Exports: getTraceMetaTags

// Module 12611
import _mod12610 from "module_12610" /* 12610 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12610;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
