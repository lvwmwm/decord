// Module ID: 5166
// Function ID: 5167
// Dependencies: [19, 5141]
// Exports: default

// Module 5166
import _modDef5141 from "module_5141" /* 5141 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5141);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
