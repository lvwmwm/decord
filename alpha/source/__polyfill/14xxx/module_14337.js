// Module ID: 14337
// Function ID: 14338
// Dependencies: [19, 14335]
// Exports: default

// Module 14337
import _modDef14335 from "module_14335" /* 14335 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14335);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
