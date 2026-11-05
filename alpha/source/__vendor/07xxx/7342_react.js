// Module ID: 7342
// Function ID: 7343
// Name: react
// Dependencies: [19, 7336]
// Exports: useCardAnimation

// Module 7342 (react)
import react2 from "react" /* 7336 */;
import react from "react" /* 19 */;


export function useCardAnimation() {
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
}
