// Module ID: 4743
// Function ID: 4744
// Dependencies: [19, 4740]
// Exports: usePortalState

// Module 4743
import _mod19 from "module_19" /* 19 */;
import _mod4740 from "module_4740" /* 4740 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4740.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
