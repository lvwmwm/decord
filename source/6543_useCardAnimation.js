// Module ID: 6543
// Function ID: 6544
// Name: useCardAnimation
// Dependencies: [19, 6537]
// Exports: useCardAnimation

// Module 6543 (useCardAnimation)
import noop from "noop";

const require = arg1;

export const useCardAnimation = function useCardAnimation() {
  const context = React.useContext(require(6537) /* CardAnimationContext */.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
