// Module ID: 16742
// Function ID: 16743
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 16740]
// Exports: default

// Module 16742 (useReanimatedTransitionProgress)
import reactDefault from "react" /* 16740 */;
import react from "react" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = react.useContext(reactDefault);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
