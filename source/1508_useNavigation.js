// Module ID: 1508
// Function ID: 17348
// Name: useNavigation
// Dependencies: []
// Exports: default

// Module 1508 (useNavigation)
let closure_2 = importAll(dependencyMap[0]);

export default function useNavigation() {
  let context = React.useContext(importDefault(dependencyMap[1]));
  const context1 = React.useContext(importDefault(dependencyMap[2]));
  if (undefined === context1) {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (null != context1) {
    context = context1;
  }
  return context;
};
