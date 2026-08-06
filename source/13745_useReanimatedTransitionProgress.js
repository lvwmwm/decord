// Module ID: 13745
// Function ID: 13746
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13743]
// Exports: default

// Module 13745 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13743));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
