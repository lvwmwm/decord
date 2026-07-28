// Module ID: 5612
// Function ID: 47524
// Name: useCardAnimation
// Dependencies: [31, 5602]
// Exports: default

// Module 5612 (useCardAnimation)
import result from "result";


export default function useCardAnimation() {
  const context = React.useContext(importDefault(5602));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
