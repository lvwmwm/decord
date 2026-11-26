// Module ID: 1601
// Function ID: 1602
// Name: react
// Dependencies: [19]

// Module 1601 (react)
import react from "react" /* 19 */;

const obj = {};
const createContext = react.createContext;
Object.defineProperty(obj, "options", {
  get: () => {
    const error = new Error("Couldn't find a LinkingContext context.");
    throw error;
  },
  set: undefined
});
const context = createContext(obj);
context.displayName = "LinkingContext";

export const LinkingContext = context;
