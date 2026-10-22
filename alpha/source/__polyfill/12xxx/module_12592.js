// Module ID: 12592
// Function ID: 12593
// Dependencies: [12591]
// Exports: getTraceMetaTags

// Module 12592
import _mod12591 from "module_12591" /* 12591 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12591;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
