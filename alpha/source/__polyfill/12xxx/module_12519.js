// Module ID: 12519
// Function ID: 12520
// Dependencies: [12507, 12479]
// Exports: parseSampleRate

// Module 12519
import _mod12507 from "module_12507" /* 12507 */;


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
    if (_mod12507.DEBUG_BUILD) {
      const logger = tmp(12479).logger;
      const _JSON = JSON;
      const warn = logger.warn;
      const json = JSON.stringify(flag);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof flag) + ".");
    }
  }
};
