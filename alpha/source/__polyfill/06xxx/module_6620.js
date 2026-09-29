// Module ID: 6620
// Function ID: 6621
// Dependencies: [19, 6614]
// Exports: useCardAnimation

// Module 6620
import CardAnimationContext from "CardAnimationContext" /* 6614 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useCardAnimation = function useCardAnimation() {
  const context = noop.useContext(CardAnimationContext.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
