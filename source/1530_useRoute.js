// Module ID: 1530
// Function ID: 17500
// Name: useRoute
// Dependencies: []
// Exports: default

// Module 1530 (useRoute)
let closure_2 = importAll(dependencyMap[0]);

export default function useRoute() {
  const context = React.useContext(importDefault(dependencyMap[1]));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};
