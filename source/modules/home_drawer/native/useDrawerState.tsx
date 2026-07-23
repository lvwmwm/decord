// Module ID: 14806
// Function ID: 112948
// Name: useDrawerOpen
// Dependencies: [57, 31, 1457, 3981, 2]
// Exports: useDrawerOpen

// Module 14806 (useDrawerOpen)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("Link").fileFinishedImporting("modules/home_drawer/native/useDrawerState.tsx");

export const useDrawerOpen = function useDrawerOpen(enableHome) {
  let flag = enableHome;
  if (enableHome === undefined) {
    flag = true;
  }
  let navigation;
  let callback;
  navigation = flag(navigation[2]).useNavigation();
  const tmp2 = callback(React.useState(() => {
    if (flag) {
      const state = navigation.getState();
      let tmp6;
      if (null != state) {
        const routes = state.routes;
        if (null != routes) {
          let index;
          if (null != state) {
            index = state.index;
          }
          let num2 = 0;
          if (null != index) {
            num2 = index;
          }
          tmp6 = routes[num2];
        }
      }
      const coerceGuildsRouteResult = flag(navigation[3]).coerceGuildsRoute(tmp6);
      let drawerOpen;
      if (null != coerceGuildsRouteResult) {
        const params = coerceGuildsRouteResult.params;
        if (null != params) {
          drawerOpen = params.drawerOpen;
        }
      }
      return true === drawerOpen;
    } else {
      return false;
    }
  }), 2);
  callback = tmp2[1];
  const items = [navigation, flag];
  const effect = React.useEffect(() => {
    function handleStateChange(data) {
      const state = data.data.state;
      let tmp;
      if (null != state) {
        const routes = state.routes;
        if (null != routes) {
          let index;
          if (null != state) {
            index = state.index;
          }
          let num = 0;
          if (null != index) {
            num = index;
          }
          tmp = routes[num];
        }
      }
      const coerceGuildsRouteResult = flag(navigation[3]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        const params = coerceGuildsRouteResult.params;
        let drawerOpen;
        if (null != params) {
          drawerOpen = params.drawerOpen;
        }
        outer1_2(true === drawerOpen);
      }
    }
    if (handleStateChange) {
      navigation.addListener("state", handleStateChange);
      return () => {
        outer1_1.removeListener("state", handleStateChange);
      };
    }
  }, items);
  return tmp2[0];
};
