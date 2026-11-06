// Module ID: 13327
// Function ID: 13328
// Dependencies: [13326]
// Exports: getTraceMetaTags

// Module 13327
import _mod13326 from "module_13326" /* 13326 */;


export function getTraceMetaTags() {
  const obj = _mod13326;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
