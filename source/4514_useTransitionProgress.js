// Module ID: 4514
// Function ID: 39743
// Name: useTransitionProgress
// Dependencies: [31, 4493]
// Exports: default

// Module 4514 (useTransitionProgress)
import result from "result";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4493));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
