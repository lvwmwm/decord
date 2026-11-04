// Module ID: 13346
// Function ID: 13347
// Dependencies: [13345]
// Exports: getTraceMetaTags

// Module 13346
import _mod13345 from "module_13345" /* 13345 */;


export function getTraceMetaTags() {
  const obj = _mod13345;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
