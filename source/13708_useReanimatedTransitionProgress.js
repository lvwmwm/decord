// Module ID: 13708
// Function ID: 13709
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13706]
// Exports: default

// Module 13708 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13706));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
