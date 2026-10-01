// Module ID: 12385
// Function ID: 12386
// Dependencies: [12384]
// Exports: getTraceMetaTags

// Module 12385
import _mod12384 from "module_12384" /* 12384 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12384;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
