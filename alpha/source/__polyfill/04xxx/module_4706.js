// Module ID: 4706
// Function ID: 4707
// Dependencies: [19, 4703]
// Exports: usePortalState

// Module 4706
import _mod19 from "module_19" /* 19 */;
import _mod4703 from "module_4703" /* 4703 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4703.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
