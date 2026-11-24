// Module ID: 700
// Function ID: 701
// Dependencies: []
// Exports: parseSampleRate

// Module 700
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function parseSampleRate(sampleRate) {
  if (typeof sampleRate === "boolean") {
    const _Number = Number;
    return Number(sampleRate);
  } else {
    let parsed = sampleRate;
    if (typeof sampleRate === "string") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(sampleRate);
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
