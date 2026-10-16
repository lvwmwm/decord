// Module ID: 12376
// Function ID: 12377
// Dependencies: [12375]
// Exports: getTraceMetaTags

// Module 12376
import _mod12375 from "module_12375" /* 12375 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12375;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
