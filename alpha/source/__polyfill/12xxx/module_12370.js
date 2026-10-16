// Module ID: 12370
// Function ID: 12371
// Dependencies: [12369]
// Exports: getTraceMetaTags

// Module 12370
import _mod12369 from "module_12369" /* 12369 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12369;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
