// Module ID: 13262
// Function ID: 13263
// Dependencies: [13261]
// Exports: getTraceMetaTags

// Module 13262
import _mod13261 from "module_13261" /* 13261 */;


export function getTraceMetaTags() {
  const obj = _mod13261;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
