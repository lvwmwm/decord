// Module ID: 9803
// Function ID: 9804
// Dependencies: [9802]
// Exports: getTraceMetaTags

// Module 9803
import _mod9802 from "module_9802" /* 9802 */;


export function getTraceMetaTags() {
  const obj = _mod9802;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
