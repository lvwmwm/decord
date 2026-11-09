// Module ID: 1720
// Function ID: 1721
// Name: logger
// Dependencies: []

// Module 1720 (logger)
const obj = {
  warn(arg0) {
    console.warn("[Worklets] " + arg0);
  },
  error(arg0) {
    console.error("[Worklets] " + arg0);
  }
};

export const logger = obj;
