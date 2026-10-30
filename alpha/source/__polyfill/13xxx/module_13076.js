// Module ID: 13076
// Function ID: 13077
// Dependencies: [13075]
// Exports: getTraceMetaTags

// Module 13076
import _mod13075 from "module_13075" /* 13075 */;


export function getTraceMetaTags() {
  const obj = _mod13075;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
