// Module ID: 9802
// Function ID: 9803
// Dependencies: [9801]
// Exports: getTraceMetaTags

// Module 9802
import _mod9801 from "module_9801" /* 9801 */;


export function getTraceMetaTags() {
  const obj = _mod9801;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
