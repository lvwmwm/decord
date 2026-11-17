// Module ID: 6324
// Function ID: 6325
// Name: useTransitionProgress
// Dependencies: [19, 6299]
// Exports: default

// Module 6324 (useTransitionProgress)
import reactDefault from "react" /* 6299 */;
import react from "react" /* 19 */;


export default function useTransitionProgress() {
  const context = react.useContext(reactDefault);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
