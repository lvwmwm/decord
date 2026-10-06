// Module ID: 5262
// Function ID: 5263
// Name: useTransitionProgress
// Dependencies: [19, 5237]
// Exports: default

// Module 5262 (useTransitionProgress)
import reactDefault from "react" /* 5237 */;
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
