// Module ID: 12551
// Function ID: 12552
// Dependencies: [12550]
// Exports: getTraceMetaTags

// Module 12551
import _mod12550 from "module_12550" /* 12550 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12550;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
