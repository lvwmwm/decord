// Module ID: 6536
// Function ID: 6537
// Name: react
// Dependencies: [19, 6530]
// Exports: useCardAnimation

// Module 6536 (react)
import react2 from "react" /* 6530 */;
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
