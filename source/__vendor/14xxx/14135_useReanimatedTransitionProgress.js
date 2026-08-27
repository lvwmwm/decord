// Module ID: 14135
// Function ID: 14136
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 14133]
// Exports: default

// Module 14135 (useReanimatedTransitionProgress)
import noopDefault from "noop" /* 14133 */;
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
