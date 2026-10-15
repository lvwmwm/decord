// Module ID: 12347
// Function ID: 12348
// Dependencies: [12346]
// Exports: getTraceMetaTags

// Module 12347
import _mod12346 from "module_12346" /* 12346 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12346;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
