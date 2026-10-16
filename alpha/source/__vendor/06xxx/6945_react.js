// Module ID: 6945
// Function ID: 6946
// Name: react
// Dependencies: [19, 6939]
// Exports: useCardAnimation

// Module 6945 (react)
import react2 from "react" /* 6939 */;
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
