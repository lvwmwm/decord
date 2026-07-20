// Module ID: 5575
// Function ID: 47313
// Name: useCardAnimation
// Dependencies: []
// Exports: default

// Module 5575 (useCardAnimation)
let closure_2 = importAll(dependencyMap[0]);

export default function useCardAnimation() {
  const context = React.useContext(importDefault(dependencyMap[1]));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
