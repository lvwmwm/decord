// Module ID: 13126
// Function ID: 13127
// Dependencies: [13125]
// Exports: getTraceMetaTags

// Module 13126
import _mod13125 from "module_13125" /* 13125 */;


export function getTraceMetaTags() {
  const obj = _mod13125;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}
