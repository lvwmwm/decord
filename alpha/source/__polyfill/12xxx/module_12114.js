// Module ID: 12114
// Function ID: 12115
// Dependencies: [12113]
// Exports: getTraceMetaTags

// Module 12114
import _mod12113 from "module_12113" /* 12113 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12113;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
