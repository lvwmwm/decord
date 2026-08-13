// Module ID: 4218
// Function ID: 4219
// Name: usePortalState
// Dependencies: [19, 4215]
// Exports: usePortalState

// Module 4218 (usePortalState)
import { useContext } from "noop";


export const usePortalState = (arg0) => {
  const tmp = useContext(require(4215) /* createContext */.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
