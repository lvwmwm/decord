// Module ID: 13736
// Function ID: 13737
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13734]
// Exports: default

// Module 13736 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13734));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
