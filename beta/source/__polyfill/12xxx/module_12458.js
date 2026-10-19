// Module ID: 12458
// Function ID: 12459
// Dependencies: [12457]
// Exports: getTraceMetaTags

// Module 12458
import _mod12457 from "module_12457" /* 12457 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12457;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
