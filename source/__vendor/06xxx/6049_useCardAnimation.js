// Module ID: 6049
// Function ID: 6050
// Name: useCardAnimation
// Dependencies: [19, 6043]
// Exports: useCardAnimation

// Module 6049 (useCardAnimation)
import CardAnimationContext from "CardAnimationContext" /* 6043 */;
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
