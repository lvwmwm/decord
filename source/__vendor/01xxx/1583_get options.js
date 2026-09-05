// Module ID: 1583
// Function ID: 1584
// Name: get options
// Dependencies: [19]

// Module 1583 (get options)
import noopAll from "noop" /* 19 */;

const obj = {};
Object.defineProperty(obj, "options", {
  get: () => {
    error = new Error("Couldn't find a LinkingContext context.");
    throw error;
  },
  set: undefined
});
const context = noopAll.createContext(obj);
context.displayName = "LinkingContext";

export const LinkingContext = context;
