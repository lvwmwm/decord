// Module ID: 13554
// Function ID: 104292
// Name: useReanimatedTransitionProgress
// Dependencies: [31, 13552]
// Exports: default

// Module 13554 (useReanimatedTransitionProgress)
import result from "result";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13552));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
