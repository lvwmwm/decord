// Module ID: 1470
// Function ID: 17103
// Name: get getKey
// Dependencies: []

// Module 1470 (get getKey)
const obj = { isDefault: true };
Object.defineProperty(obj, "getKey", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});
Object.defineProperty(obj, "setKey", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});
Object.defineProperty(obj, "getState", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});
Object.defineProperty(obj, "setState", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});
Object.defineProperty(obj, "getIsInitial", {
  get: () => {
    const error = new Error("Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.");
    throw error;
  },
  set: undefined
});

export default importAll(dependencyMap[0]).createContext(obj);
