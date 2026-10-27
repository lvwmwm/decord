// Module ID: 12653
// Function ID: 12654
// Dependencies: [12652]
// Exports: getTraceMetaTags

// Module 12653
import _mod12652 from "module_12652" /* 12652 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12652;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
