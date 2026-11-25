// Module ID: 7918
// Function ID: 7919
// Name: extractOpacity
// Dependencies: []
// Exports: default

// Module 7918 (extractOpacity)

export default function extractOpacity(str) {
  if (typeof str === "string") {
    let result;
    const trimmed = str.trim();
    if (trimmed.endsWith("%")) {
      result = +str.slice(0, -1) / 100;
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
