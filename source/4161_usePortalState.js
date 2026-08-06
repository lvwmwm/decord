// Module ID: 4161
// Function ID: 4162
// Name: usePortalState
// Dependencies: [19, 4158]
// Exports: usePortalState

// Module 4161 (usePortalState)
import { useContext } from "noop";


export const usePortalState = (arg0) => {
  const tmp = useContext(require(4158) /* createContext */.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
