// Module ID: 5952
// Function ID: 5953
// Name: useTransitionProgress
// Dependencies: [19, 5927]
// Exports: default

// Module 5952 (useTransitionProgress)
import reactDefault from "react" /* 5927 */;
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
