// Module ID: 4505
// Function ID: 39635
// Name: useTransitionProgress
// Dependencies: []
// Exports: default

// Module 4505 (useTransitionProgress)
let closure_2 = importAll(dependencyMap[0]);

export default function useTransitionProgress() {
  const context = React.useContext(importDefault(dependencyMap[1]));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
