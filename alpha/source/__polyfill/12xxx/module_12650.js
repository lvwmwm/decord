// Module ID: 12650
// Function ID: 12651
// Dependencies: [12649]
// Exports: getTraceMetaTags

// Module 12650
import _mod12649 from "module_12649" /* 12649 */;


export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12649;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
