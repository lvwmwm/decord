// Module ID: 17050
// Function ID: 17051
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 17048]
// Exports: default

// Module 17050 (useReanimatedTransitionProgress)
import reactDefault from "react" /* 17048 */;
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
