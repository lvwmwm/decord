// Module ID: 13888
// Function ID: 13889
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13886]
// Exports: default

// Module 13888 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13886));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
