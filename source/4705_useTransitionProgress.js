// Module ID: 4705
// Function ID: 4706
// Name: useTransitionProgress
// Dependencies: [19, 4684]
// Exports: default

// Module 4705 (useTransitionProgress)
import noop from "noop";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4684));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
