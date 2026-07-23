// Module ID: 813
// Function ID: 9113
// Name: parseSampleRate
// Dependencies: []

// Module 813 (parseSampleRate)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.parseSampleRate = function parseSampleRate(arg0) {
  if ("boolean" === typeof arg0) {
    const _Number = Number;
    return Number(arg0);
  } else {
    let parsed = arg0;
    if ("string" === tmp) {
      const _parseFloat = parseFloat;
      parsed = parseFloat(arg0);
    }
    let tmp4;
    if ("number" === typeof parsed) {
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          if (parsed <= 1) {
            tmp4 = parsed;
          }
        }
      }
    }
    return tmp4;
  }
};
