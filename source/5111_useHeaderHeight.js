// Module ID: 5111
// Function ID: 44366
// Name: useHeaderHeight
// Dependencies: []
// Exports: default

// Module 5111 (useHeaderHeight)
let closure_2 = importAll(dependencyMap[0]);

export default function useHeaderHeight() {
  const context = React.useContext(importDefault(dependencyMap[1]));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};
