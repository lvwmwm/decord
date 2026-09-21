// Module ID: 4638
// Function ID: 4639
// Dependencies: [19, 4635]
// Exports: usePortalState

// Module 4638
import _mod19 from "module_19" /* 19 */;
import _mod4635 from "module_4635" /* 4635 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4635.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
