// Module ID: 4515
// Function ID: 4516
// Dependencies: [19, 4512]
// Exports: usePortalState

// Module 4515
import _mod19 from "module_19" /* 19 */;
import _mod4512 from "module_4512" /* 4512 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4512.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
