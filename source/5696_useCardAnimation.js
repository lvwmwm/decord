// Module ID: 5696
// Function ID: 5697
// Name: useCardAnimation
// Dependencies: [19, 5686]
// Exports: default

// Module 5696 (useCardAnimation)
import noop from "noop";


export default function useCardAnimation() {
  const context = React.useContext(importDefault(5686));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
