// Module ID: 13932
// Function ID: 13933
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13930]
// Exports: default

// Module 13932 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13930));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
