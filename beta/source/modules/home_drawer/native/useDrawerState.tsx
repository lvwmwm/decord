// Module ID: 15658
// Function ID: 15659
// Name: useDrawerState
// Dependencies: [32, 19, 1486, 4692, 2]
// Exports: useDrawerOpen

// Module 15658 (useDrawerState)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("modules/home_drawer/native/useDrawerState.tsx");

export const useDrawerOpen = function useDrawerOpen(enableHome) {
  let closure_2;
  let first;
  let flag = enableHome;
  if (enableHome === undefined) {
    flag = true;
  }
  navigation = undefined;
  _slicedToArray = undefined;
  const obj = flag(navigation[2]);
  navigation = obj.useNavigation();
  [first, _slicedToArray] = react.useState(() => {
    const tmp = flag;
    if (tmp) {
      const state = navigation.getState();
      let tmp8;
      const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
      NavigationRouteUtils;
      if (state != null) {
        const routes = state.routes;
        if (routes != null) {
          let num;
          if (state != null) {
            num = state.index;
          }
          if (num == null) {
            num = 0;
          }
          tmp8 = routes[num];
        }
      }
      const coerceGuildsRouteResult = coerceGuildsRoute(tmp8);
      let drawerOpen;
      if (coerceGuildsRouteResult != null) {
        const params = coerceGuildsRouteResult.params;
        if (params != null) {
          drawerOpen = params.drawerOpen;
        }
      }
      return true === drawerOpen;
    } else {
      return false;
    }
  });
  const items = [navigation, flag];
  const effect = react.useEffect(() => {
    function handleStateChange(data) {
      const state = data.data.state;
      let tmp2;
      const coerceGuildsRoute = flag(navigation[3]).coerceGuildsRoute;
      flag(navigation[3]);
      if (state != null) {
        const routes = state.routes;
        if (routes != null) {
          let num;
          if (state != null) {
            num = state.index;
          }
          if (num == null) {
            num = 0;
          }
          tmp2 = routes[num];
        }
      }
      const coerceGuildsRouteResult = coerceGuildsRoute(tmp2);
      if (null != coerceGuildsRouteResult) {
        const params = coerceGuildsRouteResult.params;
        let drawerOpen;
        if (params != null) {
          drawerOpen = params.drawerOpen;
        }
        closure_1_2(true === drawerOpen);
      }
    }
    const tmp = handleStateChange;
    if (tmp) {
      let tmp2 = navigation;
      navigation.addListener("state", handleStateChange);
      return () => {
        navigation.removeListener("state", handleStateChange);
      };
    }
  }, items);
  return first;
};
