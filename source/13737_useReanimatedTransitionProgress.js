// Module ID: 13737
// Function ID: 13738
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13735]
// Exports: default

// Module 13737 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13735));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
