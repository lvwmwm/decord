// Module ID: 4008
// Function ID: 33282
// Name: usePortalState
// Dependencies: [31, 4005]
// Exports: usePortalState

// Module 4008 (usePortalState)
import { useContext } from "result";


export const usePortalState = function usePortalState(name) {
  const tmp = useContext(require(4005) /* createContext */.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};
