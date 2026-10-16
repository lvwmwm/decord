// Module ID: 6943
// Function ID: 6944
// Name: react
// Dependencies: [19, 6937]
// Exports: useCardAnimation

// Module 6943 (react)
import react2 from "react" /* 6937 */;
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
