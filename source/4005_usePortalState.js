// Module ID: 4005
// Function ID: 33265
// Name: usePortalState
// Dependencies: [0, 0]
// Exports: usePortalState

// Module 4005 (usePortalState)
import { useContext } from "__exportStarResult1";


export const usePortalState = function usePortalState(name) {
  const tmp = useContext(require(dependencyMap[1]).PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};
