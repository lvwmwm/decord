// Module ID: 13759
// Function ID: 13760
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 13757]
// Exports: default

// Module 13759 (useReanimatedTransitionProgress)
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13757));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
