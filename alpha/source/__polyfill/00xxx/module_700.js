// Module ID: 700
// Function ID: 701
// Dependencies: []
// Exports: parseSampleRate

// Module 700
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function parseSampleRate(replaysOnErrorSampleRate) {
  if (typeof replaysOnErrorSampleRate === "boolean") {
    const _Number = Number;
    return Number(replaysOnErrorSampleRate);
  } else {
    let parsed = replaysOnErrorSampleRate;
    if (typeof replaysOnErrorSampleRate === "string") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(replaysOnErrorSampleRate);
    }
    let tmp;
    if (typeof parsed === "number") {
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          if (parsed <= 1) {
            tmp = parsed;
          }
        }
      }
    }
    return tmp;
  }
}
