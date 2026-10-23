// Module ID: 12579
// Function ID: 12580
// Dependencies: [12567, 12539]
// Exports: parseSampleRate

// Module 12579
import _mod12567 from "module_12567" /* 12567 */;


export const parseSampleRate = function parseSampleRate(flag) {
  if (typeof flag === "boolean") {
    const _Number = Number;
    return Number(flag);
  } else {
    let parsed = flag;
    if (typeof flag === "string") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(flag);
    }
    if (typeof parsed === "number") {
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          if (parsed <= 1) {
            return parsed;
          }
        }
      }
    }
    const tmp = require;
    if (_mod12567.DEBUG_BUILD) {
      const logger = tmp(12539).logger;
      const _JSON = JSON;
      const warn = logger.warn;
      const json = JSON.stringify(flag);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof flag) + ".");
    }
  }
};
