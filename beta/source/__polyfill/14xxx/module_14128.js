// Module ID: 14128
// Function ID: 14129
// Dependencies: [19, 14126]
// Exports: default

// Module 14128
import _modDef14126 from "module_14126" /* 14126 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14126);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
