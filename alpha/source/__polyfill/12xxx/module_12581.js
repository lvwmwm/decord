// Module ID: 12581
// Function ID: 12582
// Dependencies: [12580]
// Exports: getTraceMetaTags

// Module 12581
import _mod12580 from "module_12580" /* 12580 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12580;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
