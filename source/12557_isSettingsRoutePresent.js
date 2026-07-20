// Module ID: 12557
// Function ID: 96655
// Name: isSettingsRoutePresent
// Dependencies: []
// Exports: useIsUserSettingsOpen

// Module 12557 (isSettingsRoutePresent)
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
        tmp = callback(name.state);
      }
      return tmp;
    });
  }
  return someResult;
}
function isUserSettingsOpen() {
  const rootNavigationRef = arg1(dependencyMap[2]).getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = isSettingsRoutePresent(rootNavigationRef.getRootState());
  }
  return tmp2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_settings/core/isUserSettingsOpen.native.tsx");

export { isUserSettingsOpen };
export const useIsUserSettingsOpen = function useIsUserSettingsOpen() {
  let tmp2;
  [tmp2, closure_0] = callback(React.useState(isUserSettingsOpen), 2);
  const effect = React.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        rootNavigationRef(callback(rootNavigationRef.getRootState()));
      }
    }
    const rootNavigationRef = rootNavigationRef(handleStateChange[2]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = rootNavigationRef(handleStateChange[2]);
  }, []);
  return tmp2;
};
