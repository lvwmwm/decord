// Module ID: 7582
// Function ID: 7583
// Name: react
// Dependencies: [19, 7576]
// Exports: useCardAnimation

// Module 7582 (react)
import react2 from "react" /* 7576 */;
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
