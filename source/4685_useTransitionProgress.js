// Module ID: 4685
// Function ID: 4686
// Name: useTransitionProgress
// Dependencies: [19, 4664]
// Exports: default

// Module 4685 (useTransitionProgress)
import noop from "noop";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4664));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
