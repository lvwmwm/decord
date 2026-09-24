// Module ID: 16279
// Function ID: 16280
// Dependencies: [19, 16277]
// Exports: default

// Module 16279
import _modDef16277 from "module_16277" /* 16277 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef16277);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
