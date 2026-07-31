// Module ID: 5634
// Function ID: 5635
// Name: useCardAnimation
// Dependencies: [19, 5624]
// Exports: default

// Module 5634 (useCardAnimation)
import noop from "noop";


export default function useCardAnimation() {
  const context = React.useContext(importDefault(5624));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
