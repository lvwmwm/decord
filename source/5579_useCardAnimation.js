// Module ID: 5579
// Function ID: 47394
// Name: useCardAnimation
// Dependencies: [31, 5569]
// Exports: default

// Module 5579 (useCardAnimation)
import result from "result";


export default function useCardAnimation() {
  const context = React.useContext(importDefault(5569));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
