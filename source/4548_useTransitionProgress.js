// Module ID: 4548
// Function ID: 39858
// Name: useTransitionProgress
// Dependencies: [31, 4527]
// Exports: default

// Module 4548 (useTransitionProgress)
import result from "result";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4527));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
