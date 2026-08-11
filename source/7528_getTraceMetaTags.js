// Module ID: 7528
// Function ID: 7529
// Name: getTraceMetaTags
// Dependencies: [7527]

// Module 7528 (getTraceMetaTags)
const require = arg1;
const dependencyMap = arg6;
arg5.getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(require(7527) /* getTraceData */.getTraceData());
  const mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
