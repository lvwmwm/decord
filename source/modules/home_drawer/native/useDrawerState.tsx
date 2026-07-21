// Module ID: 14683
// Function ID: 110741
// Name: useDrawerOpen
// Dependencies: []
// Exports: useDrawerOpen

// Module 14683 (useDrawerOpen)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/home_drawer/native/useDrawerState.tsx");

export const useDrawerOpen = function useDrawerOpen(enableHome) {
  let flag = enableHome;
  if (enableHome === undefined) {
    flag = true;
  }
  const arg1 = flag;
  let dependencyMap;
  let callback;
  const navigation = arg1(dependencyMap[2]).useNavigation();
  dependencyMap = navigation;
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
      const coerceGuildsRouteResult = handleStateChange(closure_1[3]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        const params = coerceGuildsRouteResult.params;
        let drawerOpen;
        if (null != params) {
          drawerOpen = params.drawerOpen;
        }
        callback(true === drawerOpen);
      }
    }
    if (flag) {
      navigation.addListener("state", handleStateChange);
      return () => {
        closure_1.removeListener("state", handleStateChange);
      };
    }
    const flag = handleStateChange;
  }, items);
  return tmp2[0];
};
