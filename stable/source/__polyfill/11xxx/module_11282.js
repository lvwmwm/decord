// Module ID: 11282
// Function ID: 11283
// Dependencies: [11281]
// Exports: getTraceMetaTags

// Module 11282
import _mod11281 from "module_11281" /* 11281 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod11281;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
