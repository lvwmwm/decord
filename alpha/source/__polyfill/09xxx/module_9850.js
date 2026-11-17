// Module ID: 9850
// Function ID: 9851
// Dependencies: [9838, 9810]
// Exports: parseSampleRate

// Module 9850
import _mod9838 from "module_9838" /* 9838 */;


export function parseSampleRate(flag) {
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
    if (_mod9838.DEBUG_BUILD) {
      const logger = tmp(9810).logger;
      const _JSON = JSON;
      const warn = logger.warn;
      const json = JSON.stringify(flag);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof flag) + ".");
    }
  }
}
