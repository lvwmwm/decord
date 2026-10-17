// Module ID: 12441
// Function ID: 12442
// Dependencies: [12440]
// Exports: getTraceMetaTags

// Module 12441
import _mod12440 from "module_12440" /* 12440 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12440;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
