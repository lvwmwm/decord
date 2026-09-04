// Module ID: 4356
// Function ID: 4357
// Name: usePortalState
// Dependencies: [19, 4353]
// Exports: usePortalState

// Module 4356 (usePortalState)
import noop from "noop" /* 19 */;
import createContext from "createContext" /* 4353 */;

const useContext = noop.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(createContext.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
