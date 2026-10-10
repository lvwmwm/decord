// Module ID: 6720
// Function ID: 6721
// Name: react
// Dependencies: [19, 6714]
// Exports: useCardAnimation

// Module 6720 (react)
import react2 from "react" /* 6714 */;
import react from "react" /* 19 */;


export const useCardAnimation = function useCardAnimation() {
  const context = react.useContext(react2.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
