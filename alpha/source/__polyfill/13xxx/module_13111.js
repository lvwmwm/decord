// Module ID: 13111
// Function ID: 13112
// Dependencies: [13110]
// Exports: getTraceMetaTags

// Module 13111
import _mod13110 from "module_13110" /* 13110 */;


export function getTraceMetaTags() {
  const obj = _mod13110;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
