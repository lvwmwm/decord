// Module ID: 6387
// Function ID: 57189
// Name: parseSampleRate
// Dependencies: [6375, 6347]

// Module 6387 (parseSampleRate)
const require = arg1;
const dependencyMap = arg6;
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
    if ("number" === typeof parsed) {
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          if (parsed <= 1) {
            return parsed;
          }
        }
      }
    }
    if (require(6375).DEBUG_BUILD) {
      const logger = require(6347) /* consoleSandbox */.logger;
      const _JSON = JSON;
      const json = JSON.stringify(arg0);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(tmp) + ".");
    }
  }
};
