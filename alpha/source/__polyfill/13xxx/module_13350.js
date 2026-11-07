// Module ID: 13350
// Function ID: 13351
// Dependencies: [13349]
// Exports: getTraceMetaTags

// Module 13350
import _mod13349 from "module_13349" /* 13349 */;


export function getTraceMetaTags() {
  const obj = _mod13349;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
