// Module ID: 12453
// Function ID: 12454
// Dependencies: [12452]
// Exports: getTraceMetaTags

// Module 12453
import _mod12452 from "module_12452" /* 12452 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12452;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
