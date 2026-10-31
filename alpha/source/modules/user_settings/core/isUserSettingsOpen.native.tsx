// Module ID: 15648
// Function ID: 15649
// Name: isUserSettingsOpen
// Dependencies: [32, 19, 5199, 2]
// Exports: useIsUserSettingsOpen

// Module 15648 (isUserSettingsOpen)
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const f108750 = (name) => {
  let tmp = "settings" === name.name;
  if (!tmp) {
    const state = name.state;
    let routes1;
    if (state != null) {
      routes1 = state.routes;
    }
    let someResult = null != routes1;
    if (someResult) {
      const routes = state.routes;
      someResult = routes.some(f108750);
    }
    tmp = someResult;
  }
  return tmp;
};
function isUserSettingsOpen() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp2 = !(null == rootNavigationRef || !rootNavigationRef.isReady());
  null == rootNavigationRef || !rootNavigationRef.isReady();
  if (tmp2) {
    const rootState = rootNavigationRef.getRootState();
    let routes1;
    if (rootState != null) {
      routes1 = rootState.routes;
    }
    let someResult = null != routes1;
    if (someResult) {
      const routes = rootState.routes;
      someResult = routes.some(f108750);
    }
    tmp2 = someResult;
  }
  return tmp2;
}
const result = size.fileFinishedImporting("modules/user_settings/core/isUserSettingsOpen.native.tsx");

export { isUserSettingsOpen };
export function useIsUserSettingsOpen() {
  let tmp2;
  let tmp = _slicedToArray(react.useState(isUserSettingsOpen), 2);
  [tmp2, require] = tmp;
  const effect = react.useEffect(() => {
    function handleStateChange() {
      const obj = rootNavigationRef;
      if (null != rootNavigationRef) {
        const rootState = obj.getRootState();
        let routes1;
        if (rootState != null) {
          routes1 = rootState.routes;
        }
        let someResult = null != routes1;
        if (someResult) {
          let routes = rootState.routes;
          someResult = routes.some(f108750);
        }
        require(someResult);
      }
    }
    let obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
  }, []);
  return tmp2;
}
