// Module ID: 13381
// Function ID: 13382
// Dependencies: [13380]
// Exports: getTraceMetaTags

// Module 13381
import _mod13380 from "module_13380" /* 13380 */;


export function getTraceMetaTags() {
  const obj = _mod13380;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
