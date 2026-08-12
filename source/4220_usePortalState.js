// Module ID: 4220
// Function ID: 4221
// Name: usePortalState
// Dependencies: [19, 4217]
// Exports: usePortalState

// Module 4220 (usePortalState)
import { useContext } from "noop";


export const usePortalState = (arg0) => {
  const tmp = useContext(require(4217) /* createContext */.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
