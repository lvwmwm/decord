// Module ID: 14878
// Function ID: 14879
// Dependencies: [19, 14876]
// Exports: default

// Module 14878
import _modDef14876 from "module_14876" /* 14876 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14876);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
