// Module ID: 16270
// Function ID: 16271
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 16268]
// Exports: default

// Module 16270 (useReanimatedTransitionProgress)
import reactDefault from "react" /* 16268 */;
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
