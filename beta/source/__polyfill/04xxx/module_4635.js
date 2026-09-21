// Module ID: 4635
// Function ID: 4636
// Dependencies: [19, 4632]
// Exports: usePortalState

// Module 4635
import _mod19 from "module_19" /* 19 */;
import _mod4632 from "module_4632" /* 4632 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4632.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
