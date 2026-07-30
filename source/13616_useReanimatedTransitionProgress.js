// Module ID: 13616
// Function ID: 13617
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13614]
// Exports: default

// Module 13616 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13614));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
