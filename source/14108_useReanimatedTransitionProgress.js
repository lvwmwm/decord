// Module ID: 14108
// Function ID: 14109
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 14106]
// Exports: default

// Module 14108 (useReanimatedTransitionProgress)
import noopDefault from "noop" /* 14106 */;
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
