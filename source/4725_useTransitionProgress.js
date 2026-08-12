// Module ID: 4725
// Function ID: 4726
// Name: useTransitionProgress
// Dependencies: [19, 4704]
// Exports: default

// Module 4725 (useTransitionProgress)
import noop from "noop";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4704));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
