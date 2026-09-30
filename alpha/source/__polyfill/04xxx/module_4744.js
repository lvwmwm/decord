// Module ID: 4744
// Function ID: 4745
// Dependencies: [19, 4741]
// Exports: usePortalState

// Module 4744
import _mod19 from "module_19" /* 19 */;
import _mod4741 from "module_4741" /* 4741 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4741.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
