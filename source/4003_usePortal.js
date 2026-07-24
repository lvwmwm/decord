// Module ID: 4003
// Function ID: 33258
// Name: usePortal
// Dependencies: [31, 4004, 4005]
// Exports: usePortal

// Module 4003 (usePortal)
import result from "result";

let closure_2;
let closure_3;
({ useCallback: closure_2, useContext: closure_3 } = result);

export const usePortal = function usePortal(hostName) {
  let str = "root";
  if (arguments.length > 0) {
    str = "root";
    if (undefined !== arguments[0]) {
      str = arguments[0];
    }
  }
  let tmp = callback2(str(4004).PortalDispatchContext);
  const dependencyMap = tmp;
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    const tmp3 = callback(() => {
      tmp = tmp({ type: str(tmp[2]).ACTIONS.REGISTER_HOST, hostName: str });
    }, []);
    const tmp5 = callback((portalName, node) => {
      tmp = tmp({ type: str(tmp[2]).ACTIONS.ADD_UPDATE_PORTAL, hostName: str, portalName, node });
    }, []);
    const obj = {
      registerHost: tmp3,
      deregisterHost: callback(() => {
          tmp = tmp({ type: str(tmp[2]).ACTIONS.DEREGISTER_HOST, hostName: str });
        }, []),
      addPortal: tmp5,
      updatePortal: tmp5,
      removePortal: callback((portalName) => {
          tmp = tmp({ type: str(tmp[2]).ACTIONS.REMOVE_PORTAL, hostName: str, portalName });
        }, [])
    };
    return obj;
  }
};
