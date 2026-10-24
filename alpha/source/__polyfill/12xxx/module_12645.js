// Module ID: 12645
// Function ID: 12646
// Dependencies: [12644]
// Exports: getTraceMetaTags

// Module 12645
import _mod12644 from "module_12644" /* 12644 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12644;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
