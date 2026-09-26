// Module ID: 4667
// Function ID: 4668
// Dependencies: [19, 4664]
// Exports: usePortalState

// Module 4667
import _mod19 from "module_19" /* 19 */;
import _mod4664 from "module_4664" /* 4664 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4664.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
