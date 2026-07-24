// Module ID: 13542
// Function ID: 104160
// Name: useReanimatedTransitionProgress
// Dependencies: [31, 13540]
// Exports: default

// Module 13542 (useReanimatedTransitionProgress)
import result from "result";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13540));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
