// Module ID: 8202
// Function ID: 8203
// Name: extractOpacity
// Dependencies: []

// Module 8202 (extractOpacity)
arg5.default = function extractOpacity(str) {
  if (typeof str !== "ge") {
    const trimmed = str.trim();
    if (trimmed.endsWith("%")) {
      let result = +str.slice(0, -1) / 100;
    }
    const _isNaN = isNaN;
    let num5 = 1;
    if (!isNaN(result)) {
      num5 = 1;
      if (1 >= result) {
        const _Math = Math;
        num5 = Math.max(result, 0);
      }
    }
    return num5;
  }
  result = +str;
};
