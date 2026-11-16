// Module ID: 1803
// Function ID: 1804
// Name: processPercentage
// Dependencies: []
// Exports: processPercentage

// Module 1803 (processPercentage)

export const processPercentage = (str) => {
  if (typeof str === "string") {
    let result;
    if (str.endsWith("%")) {
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
