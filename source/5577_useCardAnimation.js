// Module ID: 5577
// Function ID: 47391
// Name: useCardAnimation
// Dependencies: [31, 5567]
// Exports: default

// Module 5577 (useCardAnimation)
import result from "result";


export default function useCardAnimation() {
  const context = React.useContext(importDefault(5567));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
