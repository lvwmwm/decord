// Module ID: 4179
// Function ID: 4180
// Name: usePortalState
// Dependencies: [19, 4176]
// Exports: usePortalState

// Module 4179 (usePortalState)
import { useContext } from "noop";


export const usePortalState = (arg0) => {
  const tmp = useContext(require(4176) /* createContext */.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
