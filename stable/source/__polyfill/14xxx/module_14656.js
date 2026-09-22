// Module ID: 14656
// Function ID: 14657
// Dependencies: [19, 14654]
// Exports: default

// Module 14656
import _modDef14654 from "module_14654" /* 14654 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14654);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
