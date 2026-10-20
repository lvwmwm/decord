// Module ID: 12478
// Function ID: 12479
// Dependencies: [12477]
// Exports: getTraceMetaTags

// Module 12478
import _mod12477 from "module_12477" /* 12477 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12477;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
