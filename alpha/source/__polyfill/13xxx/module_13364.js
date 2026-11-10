// Module ID: 13364
// Function ID: 13365
// Dependencies: [13363]
// Exports: getTraceMetaTags

// Module 13364
import _mod13363 from "module_13363" /* 13363 */;


export function getTraceMetaTags() {
  const obj = _mod13363;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
