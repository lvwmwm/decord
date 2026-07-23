// Module ID: 13489
// Function ID: 103833
// Name: useReanimatedTransitionProgress
// Dependencies: [31, 13487]
// Exports: default

// Module 13489 (useReanimatedTransitionProgress)
import result from "result";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13487));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
