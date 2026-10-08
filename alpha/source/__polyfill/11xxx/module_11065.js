// Module ID: 11065
// Function ID: 11066
// Dependencies: [11064]
// Exports: getTraceMetaTags

// Module 11065
import _mod11064 from "module_11064" /* 11064 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod11064;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
