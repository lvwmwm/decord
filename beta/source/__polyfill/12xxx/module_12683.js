// Module ID: 12683
// Function ID: 12684
// Dependencies: [12682]
// Exports: getTraceMetaTags

// Module 12683
import _mod12682 from "module_12682" /* 12682 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12682;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
