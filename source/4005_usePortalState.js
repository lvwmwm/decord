// Module ID: 4005
// Function ID: 33258
// Name: usePortalState
// Dependencies: []
// Exports: usePortalState

// Module 4005 (usePortalState)
const useContext = require(dependencyMap[0]).useContext;

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
