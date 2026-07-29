// Module ID: 4571
// Function ID: 4572
// Name: useTransitionProgress
// Dependencies: [19, 4550]
// Exports: default

// Module 4571 (useTransitionProgress)
import noop from "noop";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4550));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
