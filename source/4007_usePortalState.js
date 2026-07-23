// Module ID: 4007
// Function ID: 33270
// Name: usePortalState
// Dependencies: [31, 4004]
// Exports: usePortalState

// Module 4007 (usePortalState)
import { useContext } from "result";


export const usePortalState = function usePortalState(name) {
  const tmp = useContext(require(4004) /* createContext */.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};
