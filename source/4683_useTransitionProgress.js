// Module ID: 4683
// Function ID: 4684
// Name: useTransitionProgress
// Dependencies: [19, 4662]
// Exports: default

// Module 4683 (useTransitionProgress)
import noop from "noop";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4662));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
