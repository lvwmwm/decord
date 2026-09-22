// Module ID: 5167
// Function ID: 5168
// Dependencies: [19, 5142]
// Exports: default

// Module 5167
import _modDef5142 from "module_5142" /* 5142 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5142);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
