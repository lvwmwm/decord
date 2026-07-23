// Module ID: 4513
// Function ID: 39731
// Name: useTransitionProgress
// Dependencies: [31, 4492]
// Exports: default

// Module 4513 (useTransitionProgress)
import result from "result";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4492));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
