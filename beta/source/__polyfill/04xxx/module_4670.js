// Module ID: 4670
// Function ID: 4671
// Dependencies: [19, 4667]
// Exports: usePortalState

// Module 4670
import _mod19 from "module_19" /* 19 */;
import _mod4667 from "module_4667" /* 4667 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4667.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
