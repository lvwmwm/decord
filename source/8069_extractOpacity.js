// Module ID: 8069
// Function ID: 63895
// Name: extractOpacity
// Dependencies: []

// Module 8069 (extractOpacity)
arg5.default = function extractOpacity(str) {
  if ("string" === typeof str) {
    const trimmed = str.trim();
    if (trimmed.endsWith("%")) {
      let result = +str.slice(0, -1) / 100;
    }
    const _isNaN = isNaN;
    let num5 = 1;
    if (!isNaN(result)) {
      num5 = 1;
      if (result <= 1) {
        const _Math = Math;
        num5 = Math.max(result, 0);
      }
    }
    return num5;
  }
  result = +str;
};
