// Module ID: 13382
// Function ID: 13383
// Dependencies: [13381]
// Exports: getTraceMetaTags

// Module 13382
import _mod13381 from "module_13381" /* 13381 */;


export function getTraceMetaTags() {
  const obj = _mod13381;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
