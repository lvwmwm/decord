// Module ID: 5261
// Function ID: 5262
// Dependencies: [19, 5236]
// Exports: default

// Module 5261
import _modDef5236 from "module_5236" /* 5236 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5236);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
