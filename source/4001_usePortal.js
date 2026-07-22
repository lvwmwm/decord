// Module ID: 4001
// Function ID: 33252
// Name: usePortal
// Dependencies: []
// Exports: usePortal

// Module 4001 (usePortal)
const _module = require(dependencyMap[0]);
({ useCallback: closure_2, useContext: closure_3 } = _module);

export const usePortal = function usePortal(hostName) {
  let str = "root";
  if (arguments.length > 0) {
    str = "root";
    if (undefined !== arguments[0]) {
      str = arguments[0];
    }
  }
  const require = str;
  const tmp = callback2(require(dependencyMap[1]).PortalDispatchContext);
  const dependencyMap = tmp;
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    const tmp3 = callback(() => {
      const tmp = tmp({ type: str(tmp[2]).ACTIONS.REGISTER_HOST, hostName: str });
    }, []);
    const tmp5 = callback((portalName, node) => {
      const tmp = tmp({ type: str(tmp[2]).ACTIONS.ADD_UPDATE_PORTAL, hostName: str, portalName, node });
    }, []);
    const obj = {
      registerHost: tmp3,
      deregisterHost: callback(() => {
          const tmp = tmp({ type: str(tmp[2]).ACTIONS.DEREGISTER_HOST, hostName: str });
        }, []),
      addPortal: tmp5,
      updatePortal: tmp5,
      removePortal: callback((portalName) => {
          const tmp = tmp({ type: str(tmp[2]).ACTIONS.REMOVE_PORTAL, hostName: str, portalName });
        }, [])
    };
    return obj;
  }
};
