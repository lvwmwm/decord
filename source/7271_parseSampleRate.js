// Module ID: 7271
// Function ID: 58573
// Name: parseSampleRate
// Dependencies: []

// Module 7271 (parseSampleRate)
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
    if (arg1(arg6[0]).DEBUG_BUILD) {
      const logger = arg1(arg6[1]).logger;
      const _JSON = JSON;
      const json = JSON.stringify(arg0);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(tmp) + ".");
    }
  }
};
