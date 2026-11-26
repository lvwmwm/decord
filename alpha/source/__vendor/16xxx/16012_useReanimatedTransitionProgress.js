// Module ID: 16012
// Function ID: 16013
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 16010]
// Exports: default

// Module 16012 (useReanimatedTransitionProgress)
import reactDefault from "react" /* 16010 */;
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
