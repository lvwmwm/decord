// Module ID: 14129
// Function ID: 14130
// Dependencies: [19, 14127]
// Exports: default

// Module 14129
import _modDef14127 from "module_14127" /* 14127 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14127);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
