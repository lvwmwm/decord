// Module ID: 13829
// Function ID: 13830
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13827]
// Exports: default

// Module 13829 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13827));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
