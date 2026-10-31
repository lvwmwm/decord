// Module ID: 6016
// Function ID: 6017
// Name: useTransitionProgress
// Dependencies: [19, 5991]
// Exports: default

// Module 6016 (useTransitionProgress)
import reactDefault from "react" /* 5991 */;
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
