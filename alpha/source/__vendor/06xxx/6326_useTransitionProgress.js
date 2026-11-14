// Module ID: 6326
// Function ID: 6327
// Name: useTransitionProgress
// Dependencies: [19, 6301]
// Exports: default

// Module 6326 (useTransitionProgress)
import reactDefault from "react" /* 6301 */;
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
