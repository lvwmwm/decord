// Module ID: 4851
// Function ID: 4852
// Name: useTransitionProgress
// Dependencies: [19, 4830]
// Exports: default

// Module 4851 (useTransitionProgress)
import noopDefault from "noop" /* 4830 */;
import closure_2 from "noop" /* 19 */;


export default function useTransitionProgress() {
  const context = React.useContext(noopDefault);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
