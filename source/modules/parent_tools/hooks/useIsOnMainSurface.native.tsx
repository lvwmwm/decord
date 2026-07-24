// Module ID: 15727
// Function ID: 121231
// Name: getActiveRoute
// Dependencies: [57, 31, 3982, 2]
// Exports: useIsOnMainSurface

// Module 15727 (getActiveRoute)
import _slicedToArray from "_slicedToArray";
import result from "result";
import set from "getRootNavigationRef";

const require = arg1;
function getActiveRoute(routes) {
  let index;
  if (null != routes) {
    if (0 !== routes.routes.length) {
      ({ index, routes } = routes);
      if (null == index) {
        index = routes.routes.length - 1;
      }
      return routes[index];
    }
  }
}
function getIsOnMainSurface() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const tmp2 = getActiveRoute(rootNavigationRef.getRootState());
      let name;
      if (null != tmp2) {
        name = tmp2.name;
      }
      if ("main" !== name) {
        return false;
      } else {
        const tmp5 = getActiveRoute(tmp2.state);
        let hasItem = null != tmp5;
        if (hasItem) {
          hasItem = set.has(tmp5.name);
        }
        return hasItem;
      }
    }
  }
  return false;
}
let set = new Set(["tabs", "channel"]);
let result = set.fileFinishedImporting("modules/parent_tools/hooks/useIsOnMainSurface.native.tsx");

export const useIsOnMainSurface = function useIsOnMainSurface() {
  let require;
  let tmp2;
  [tmp2, require] = callback(React.useState(getIsOnMainSurface), 2);
  const effect = React.useEffect(() => {
    function handleNavigationChange() {
      return rootNavigationRef(outer2_6());
    }
    const rootNavigationRef = outer1_0(outer1_1[2]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      const result = handleNavigationChange();
      rootNavigationRef.addListener("state", handleNavigationChange);
      return () => {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      };
    }
    const obj = outer1_0(outer1_1[2]);
  }, []);
  return tmp2;
};
