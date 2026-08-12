// Module ID: 7567
// Function ID: 7568
// Name: getTraceMetaTags
// Dependencies: [7566]

// Module 7567 (getTraceMetaTags)
const require = arg1;
const dependencyMap = arg6;
arg5.getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(require(7566) /* getTraceData */.getTraceData());
  const mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
