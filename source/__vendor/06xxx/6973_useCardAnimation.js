// Module ID: 6973
// Function ID: 6974
// Name: useCardAnimation
// Dependencies: [19, 6967]
// Exports: useCardAnimation

// Module 6973 (useCardAnimation)
import CardAnimationContext from "CardAnimationContext" /* 6967 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useCardAnimation = function useCardAnimation() {
  const context = React.useContext(CardAnimationContext.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
