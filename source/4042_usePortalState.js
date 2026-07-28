// Module ID: 4042
// Function ID: 33385
// Name: usePortalState
// Dependencies: [31, 4039]
// Exports: usePortalState

// Module 4042 (usePortalState)
import { useContext } from "result";


export const usePortalState = function usePortalState(name) {
  const tmp = useContext(require(4039) /* createContext */.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};
