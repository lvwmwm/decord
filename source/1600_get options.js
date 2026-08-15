// Module ID: 1600
// Function ID: 1601
// Name: get options
// Dependencies: [19]

// Module 1600 (get options)
const obj = {};
Object.defineProperty(obj, "options", {
  get: () => {
    const error = new Error("Couldn't find a LinkingContext context.");
    throw error;
  },
  set: undefined
});
const context = require("noop").createContext(obj);
context.displayName = "LinkingContext";

export const LinkingContext = context;
