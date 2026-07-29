// Module ID: 5630
// Function ID: 5631
// Name: useCardAnimation
// Dependencies: [19, 5620]
// Exports: default

// Module 5630 (useCardAnimation)
import noop from "noop";


export default function useCardAnimation() {
  const context = React.useContext(importDefault(5620));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
