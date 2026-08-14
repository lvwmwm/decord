// Module ID: 4748
// Function ID: 4749
// Name: useTransitionProgress
// Dependencies: [19, 4727]
// Exports: default

// Module 4748 (useTransitionProgress)
import noop from "noop";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4727));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
