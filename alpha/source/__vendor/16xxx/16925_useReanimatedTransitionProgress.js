// Module ID: 16925
// Function ID: 16926
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 16923]
// Exports: default

// Module 16925 (useReanimatedTransitionProgress)
import reactDefault from "react" /* 16923 */;
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
