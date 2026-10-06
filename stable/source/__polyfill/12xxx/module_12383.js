// Module ID: 12383
// Function ID: 12384
// Dependencies: [12382]
// Exports: getTraceMetaTags

// Module 12383
import _mod12382 from "module_12382" /* 12382 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12382;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
