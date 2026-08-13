// Module ID: 5856
// Function ID: 5857
// Name: useCardAnimation
// Dependencies: [19, 5850]
// Exports: useCardAnimation

// Module 5856 (useCardAnimation)
import noop from "noop";

const require = arg1;

export const useCardAnimation = function useCardAnimation() {
  const context = React.useContext(require(5850) /* CardAnimationContext */.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
