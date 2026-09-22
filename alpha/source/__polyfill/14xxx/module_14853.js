// Module ID: 14853
// Function ID: 14854
// Dependencies: [19, 14851]
// Exports: default

// Module 14853
import _modDef14851 from "module_14851" /* 14851 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14851);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
