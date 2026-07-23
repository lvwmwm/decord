// Module ID: 12685
// Function ID: 98884
// Name: isSettingsRoutePresent
// Dependencies: [57, 31, 3982, 2]
// Exports: useIsUserSettingsOpen

// Module 12685 (isSettingsRoutePresent)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
function isSettingsRoutePresent(rootState) {
  let routes;
  if (null != rootState) {
    routes = rootState.routes;
  }
  let someResult = null != routes;
  if (someResult) {
    routes = rootState.routes;
    someResult = routes.some((name) => {
      let tmp = "settings" === name.name;
      if (!tmp) {
        tmp = outer1_4(name.state);
      }
      return tmp;
    });
  }
  return someResult;
}
function isUserSettingsOpen() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = isSettingsRoutePresent(rootNavigationRef.getRootState());
  }
  return tmp2;
}
const result = require("getRootNavigationRef").fileFinishedImporting("modules/user_settings/core/isUserSettingsOpen.native.tsx");

export { isUserSettingsOpen };
export const useIsUserSettingsOpen = function useIsUserSettingsOpen() {
  let require;
  let tmp2;
  [tmp2, require] = callback(React.useState(isUserSettingsOpen), 2);
  const effect = React.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        rootNavigationRef(outer2_4(rootNavigationRef.getRootState()));
      }
    }
    const rootNavigationRef = outer1_0(outer1_1[2]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = outer1_0(outer1_1[2]);
  }, []);
  return tmp2;
};
