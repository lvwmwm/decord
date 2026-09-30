// Module ID: 14329
// Function ID: 14330
// Dependencies: [19, 14327]
// Exports: default

// Module 14329
import _modDef14327 from "module_14327" /* 14327 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14327);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
