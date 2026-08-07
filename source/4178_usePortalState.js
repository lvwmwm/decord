// Module ID: 4178
// Function ID: 4179
// Name: usePortalState
// Dependencies: [19, 4175]
// Exports: usePortalState

// Module 4178 (usePortalState)
import { useContext } from "noop";


export const usePortalState = (arg0) => {
  const tmp = useContext(require(4175) /* createContext */.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
