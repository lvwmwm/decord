// Module ID: 13353
// Function ID: 13354
// Dependencies: [13352]
// Exports: getTraceMetaTags

// Module 13353
import _mod13352 from "module_13352" /* 13352 */;


export function getTraceMetaTags() {
  const obj = _mod13352;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
