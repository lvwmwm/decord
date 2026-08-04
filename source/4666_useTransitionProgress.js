// Module ID: 4666
// Function ID: 4667
// Name: useTransitionProgress
// Dependencies: [19, 4645]
// Exports: default

// Module 4666 (useTransitionProgress)
import noop from "noop";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4645));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
