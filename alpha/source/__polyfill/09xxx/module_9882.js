// Module ID: 9882
// Function ID: 9883
// Dependencies: [9881]
// Exports: getTraceMetaTags

// Module 9882
import _mod9881 from "module_9881" /* 9881 */;


export function getTraceMetaTags() {
  const obj = _mod9881;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
