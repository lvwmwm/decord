// Module ID: 6440
// Function ID: 6441
// Name: getTraceMetaTags
// Dependencies: [6439]

// Module 6440 (getTraceMetaTags)
const require = arg1;
const dependencyMap = arg6;
arg5.getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(require(6439) /* getTraceData */.getTraceData());
  const mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
