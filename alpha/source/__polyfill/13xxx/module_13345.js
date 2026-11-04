// Module ID: 13345
// Function ID: 13346
// Dependencies: [13344]
// Exports: getTraceMetaTags

// Module 13345
import _mod13344 from "module_13344" /* 13344 */;


export function getTraceMetaTags() {
  const obj = _mod13344;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
