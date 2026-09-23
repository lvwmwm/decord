// Module ID: 7364
// Function ID: 7365
// Dependencies: [19, 7358]
// Exports: useCardAnimation

// Module 7364
import CardAnimationContext from "CardAnimationContext" /* 7358 */;
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
