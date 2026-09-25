// Module ID: 5254
// Function ID: 5255
// Dependencies: [19, 5229]
// Exports: default

// Module 5254
import _modDef5229 from "module_5229" /* 5229 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5229);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
