// Module ID: 11239
// Function ID: 11240
// Dependencies: [11238]
// Exports: getTraceMetaTags

// Module 11239
import _mod11238 from "module_11238" /* 11238 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod11238;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
