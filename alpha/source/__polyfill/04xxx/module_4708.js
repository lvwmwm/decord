// Module ID: 4708
// Function ID: 4709
// Dependencies: [19, 4705]
// Exports: usePortalState

// Module 4708
import _mod19 from "module_19" /* 19 */;
import _mod4705 from "module_4705" /* 4705 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4705.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
