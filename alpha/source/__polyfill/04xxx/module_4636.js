// Module ID: 4636
// Function ID: 4637
// Dependencies: [19, 4633]
// Exports: usePortalState

// Module 4636
import _mod19 from "module_19" /* 19 */;
import _mod4633 from "module_4633" /* 4633 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4633.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
