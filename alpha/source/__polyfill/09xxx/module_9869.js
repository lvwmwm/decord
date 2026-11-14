// Module ID: 9869
// Function ID: 9870
// Dependencies: [9868]
// Exports: getTraceMetaTags

// Module 9869
import _mod9868 from "module_9868" /* 9868 */;


export function getTraceMetaTags() {
  const obj = _mod9868;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
