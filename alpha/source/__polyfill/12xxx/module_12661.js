// Module ID: 12661
// Function ID: 12662
// Dependencies: [12660]
// Exports: getTraceMetaTags

// Module 12661
import _mod12660 from "module_12660" /* 12660 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12660;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
