// Module ID: 4710
// Function ID: 4711
// Dependencies: [19, 4707]
// Exports: usePortalState

// Module 4710
import _mod19 from "module_19" /* 19 */;
import _mod4707 from "module_4707" /* 4707 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4707.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
