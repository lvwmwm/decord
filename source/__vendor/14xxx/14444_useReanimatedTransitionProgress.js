// Module ID: 14444
// Function ID: 14445
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 14442]
// Exports: default

// Module 14444 (useReanimatedTransitionProgress)
import noopDefault from "noop" /* 14442 */;
import closure_2 from "noop" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(noopDefault);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
