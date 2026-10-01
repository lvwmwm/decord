// Module ID: 16822
// Function ID: 16823
// Name: useIsOnMainSurface
// Dependencies: [32, 19, 4693, 2]
// Exports: useIsOnMainSurface

// Module 16822 (useIsOnMainSurface)
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function getIsOnMainSurface() {
  let index;
  let index2;
  let routes;
  let routes2;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      let tmp2;
      if (null != rootState) {
        if (0 !== rootState.routes.length) {
          ({ index, routes } = rootState);
          if (index == null) {
            index = rootState.routes.length - 1;
          }
          tmp2 = routes[index];
        }
      }
      let name;
      if (tmp2 != null) {
        name = tmp2.name;
      }
      if ("main" !== name) {
        return false;
      } else {
        const state = tmp2.state;
        let tmp4;
        if (null != state) {
          if (0 !== state.routes.length) {
            ({ index: index2, routes: routes2 } = state);
            if (index2 == null) {
              index2 = state.routes.length - 1;
            }
            tmp4 = routes2[index2];
          }
        }
        const hasItem = null != tmp4 && set.has(tmp4.name);
        return hasItem;
      }
    }
  }
  return false;
}
const set = new Set(["tabs", "channel"]);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsOnMainSurface.native.tsx");

export const useIsOnMainSurface = function useIsOnMainSurface() {
  let tmp2;
  [tmp2, require] = _slicedToArray(react.useState(getIsOnMainSurface), 2);
  const tmp = _slicedToArray(react.useState(getIsOnMainSurface), 2);
  const effect = react.useEffect(() => {
    function handleNavigationChange() {
      return rootNavigationRef(getIsOnMainSurface());
    }
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef(getIsOnMainSurface());
      rootNavigationRef.addListener("state", handleNavigationChange);
      return () => {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      };
    }
  }, []);
  return tmp2;
};
