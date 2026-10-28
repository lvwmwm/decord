// Module ID: 12708
// Function ID: 12709
// Dependencies: [12707]
// Exports: getTraceMetaTags

// Module 12708
import _mod12707 from "module_12707" /* 12707 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12707;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
