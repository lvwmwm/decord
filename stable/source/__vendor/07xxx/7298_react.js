// Module ID: 7298
// Function ID: 7299
// Name: react
// Dependencies: [19, 7292]
// Exports: useCardAnimation

// Module 7298 (react)
import react2 from "react" /* 7292 */;
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
