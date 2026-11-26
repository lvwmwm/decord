// Module ID: 1723
// Function ID: 1724
// Name: logger
// Dependencies: []

// Module 1723 (logger)
const obj = {
  warn(arg0) {
    console.warn("[Worklets] " + arg0);
  },
  error(arg0) {
    console.error("[Worklets] " + arg0);
  }
};

export const logger = obj;
