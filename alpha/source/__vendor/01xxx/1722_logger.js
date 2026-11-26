// Module ID: 1722
// Function ID: 1723
// Name: logger
// Dependencies: []

// Module 1722 (logger)
const obj = {
  warn(arg0) {
    console.warn("[Worklets] " + arg0);
  },
  error(arg0) {
    console.error("[Worklets] " + arg0);
  }
};

export const logger = obj;
