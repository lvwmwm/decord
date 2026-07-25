// Module ID: 13553
// Function ID: 104287
// Name: useReanimatedTransitionProgress
// Dependencies: [31, 13551]
// Exports: default

// Module 13553 (useReanimatedTransitionProgress)
import result from "result";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(importDefault(13551));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
