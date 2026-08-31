// Module ID: 14188
// Function ID: 14189
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 14186]
// Exports: default

// Module 14188 (useReanimatedTransitionProgress)
import noopDefault from "noop" /* 14186 */;
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
