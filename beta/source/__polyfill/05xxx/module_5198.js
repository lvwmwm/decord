// Module ID: 5198
// Function ID: 5199
// Dependencies: [19, 5173]
// Exports: default

// Module 5198
import _modDef5173 from "module_5173" /* 5173 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5173);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
