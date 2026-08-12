// Module ID: 13896
// Function ID: 13897
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13894]
// Exports: default

// Module 13896 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13894));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
