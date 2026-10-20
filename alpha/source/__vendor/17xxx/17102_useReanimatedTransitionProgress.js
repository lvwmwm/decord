// Module ID: 17102
// Function ID: 17103
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 17100]
// Exports: default

// Module 17102 (useReanimatedTransitionProgress)
import reactDefault from "react" /* 17100 */;
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
