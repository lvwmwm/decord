// Module ID: 1507
// Function ID: 1508
// Name: react
// Dependencies: [19]

// Module 1507 (react)
import react from "react" /* 19 */;

let c0 = "Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.";
const obj = { isDefault: true };
const createContext = react.createContext;
Object.defineProperty(obj, "getKey", {
  get: () => {
    const error = new Error(c0);
    throw error;
  },
  set: undefined
});
Object.defineProperty(obj, "setKey", {
  get: () => {
    const error = new Error(c0);
    throw error;
  },
  set: undefined
});
Object.defineProperty(obj, "getState", {
  get: () => {
    const error = new Error(c0);
    throw error;
  },
  set: undefined
});
Object.defineProperty(obj, "setState", {
  get: () => {
    const error = new Error(c0);
    throw error;
  },
  set: undefined
});
Object.defineProperty(obj, "getIsInitial", {
  get: () => {
    const error = new Error(c0);
    throw error;
  },
  set: undefined
});

export const NavigationStateContext = createContext(obj);
