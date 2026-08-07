// Module ID: 5756
// Function ID: 5757
// Name: useCardAnimation
// Dependencies: [19, 5750]
// Exports: useCardAnimation

// Module 5756 (useCardAnimation)
import noop from "noop";

const require = arg1;

export const useCardAnimation = function useCardAnimation() {
  const context = React.useContext(require(5750) /* CardAnimationContext */.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
