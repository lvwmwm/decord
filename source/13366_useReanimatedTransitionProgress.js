// Module ID: 13366
// Function ID: 101622
// Name: useReanimatedTransitionProgress
// Dependencies: []
// Exports: default

// Module 13366 (useReanimatedTransitionProgress)
let closure_2 = importAll(dependencyMap[0]);

export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(dependencyMap[1]));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
