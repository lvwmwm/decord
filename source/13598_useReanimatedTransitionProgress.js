// Module ID: 13598
// Function ID: 104465
// Name: useReanimatedTransitionProgress
// Dependencies: [31, 13596]
// Exports: default

// Module 13598 (useReanimatedTransitionProgress)
import result from "result";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13596));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
