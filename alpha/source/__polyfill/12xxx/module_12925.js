// Module ID: 12925
// Function ID: 12926
// Dependencies: [12924]
// Exports: getTraceMetaTags

// Module 12925
import _mod12924 from "module_12924" /* 12924 */;


export function getTraceMetaTags() {
  const obj = _mod12924;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
