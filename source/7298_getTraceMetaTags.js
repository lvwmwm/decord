// Module ID: 7298
// Function ID: 58896
// Name: getTraceMetaTags
// Dependencies: []
// Exports: getTraceMetaTags

// Module 7298 (getTraceMetaTags)
let closure_2 = require(dependencyMap[0]);

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(require(dependencyMap[1]).getTraceData());
  const mapped = entries.map((arg0) => {
    const tmp = callback(arg0, 2);
    return "<meta name=\"" + tmp[0] + "\" content=\"" + tmp[1] + "\"/>";
  });
  return mapped.join("\n");
};
