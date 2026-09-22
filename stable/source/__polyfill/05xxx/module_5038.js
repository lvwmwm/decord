// Module ID: 5038
// Function ID: 5039
// Dependencies: [19, 5013]
// Exports: default

// Module 5038
import _modDef5013 from "module_5013" /* 5013 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5013);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
