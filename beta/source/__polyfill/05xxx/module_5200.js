// Module ID: 5200
// Function ID: 5201
// Dependencies: [19, 5175]
// Exports: default

// Module 5200
import _modDef5175 from "module_5175" /* 5175 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5175);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
