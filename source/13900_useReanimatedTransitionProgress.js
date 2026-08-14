// Module ID: 13900
// Function ID: 13901
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13898]
// Exports: default

// Module 13900 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13898));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
