// Module ID: 16269
// Function ID: 16270
// Dependencies: [19, 16267]
// Exports: default

// Module 16269
import _modDef16267 from "module_16267" /* 16267 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef16267);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
