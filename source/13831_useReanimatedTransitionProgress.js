// Module ID: 13831
// Function ID: 13832
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13829]
// Exports: default

// Module 13831 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13829));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
