// Module ID: 881
// Function ID: 9760
// Name: getTraceMetaTags
// Dependencies: []
// Exports: getTraceMetaTags

// Module 881 (getTraceMetaTags)
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  if (!arg0) {
    traceData = require(dependencyMap[1]).getTraceData();
    const obj = require(dependencyMap[1]);
  }
  const entries = Object.entries(traceData);
  const mapped = entries.map((arg0) => {
    const tmp = callback(arg0, 2);
    return "<meta name=\"" + tmp[0] + "\" content=\"" + tmp[1] + "\"/>";
  });
  return mapped.join("\n");
};
