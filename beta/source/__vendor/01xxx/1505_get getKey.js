// Module ID: 1505
// Function ID: 1506
// Name: get getKey
// Dependencies: [19]

// Module 1505 (get getKey)
import noop from "module_19" /* 19 */;

let c0 = "Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.";
const obj = { isDefault: true };
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

export const NavigationStateContext = noop.createContext(obj);
