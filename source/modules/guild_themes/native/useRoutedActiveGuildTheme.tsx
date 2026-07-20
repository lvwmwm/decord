// Module ID: 3978
// Function ID: 32998
// Name: getGuildIdFromNavigationState
// Dependencies: []
// Exports: default

// Module 3978 (getGuildIdFromNavigationState)
function getGuildIdFromNavigationState(routes) {
  if (null != routes) {
    routes = routes.routes;
    if (null != routes) {
      let guildId;
      if (null != routes[routes.index]) {
        const params = tmp.params;
        if (null != params) {
          guildId = params.guildId;
        }
      }
      if (null == guildId) {
        let state;
        if (null != tmp) {
          state = tmp.state;
        }
        guildId = getGuildIdFromNavigationState(state);
        const tmp3 = getGuildIdFromNavigationState;
      }
      return guildId;
    }
  }
}
function getActiveGuildThemeGuildIdSnapshot() {
  const rootNavigationRef = arg1(dependencyMap[4]).getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const tmp = function getGuildIdFromRootNavigationState(rootState) {
        const tmp = callback2(rootState);
        if (null != tmp) {
          return tmp;
        } else {
          let found;
          if (null != rootState) {
            const routes = rootState.routes;
            if (null != routes) {
              const mapped = routes.map(callback(closure_2[3]).coerceMainRoute);
              found = mapped.find((arg0) => null != arg0);
            }
          }
          let state;
          if (null != found) {
            state = found.state;
          }
          return callback2(state);
        }
      }(rootNavigationRef.getRootState());
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = null;
        if (tmp !== ME) {
          tmp2 = tmp;
        }
      }
      return tmp2;
    }
  }
  return null;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ME = arg1(dependencyMap[2]).ME;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_themes/native/useRoutedActiveGuildTheme.tsx");

export default function useRoutedActiveGuildTheme() {
  const tmp = function useRoutedActiveGuildThemeGuildId() {
    const context = React.useContext(callback(closure_2[5]));
    const tmp2 = callback2(React.useState(closure_7), 2);
    let first = tmp2[0];
    let closure_0 = tmp2[1];
    const effect = React.useEffect(() => {
      function handleStateChange() {
        callback(callback2());
      }
      const rootNavigationRef = callback(closure_2[4]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        handleStateChange();
        return rootNavigationRef.addListener("state", handleStateChange);
      }
      const obj = callback(closure_2[4]);
    }, []);
    if (undefined !== context) {
      let tmp6 = null;
      if (context !== closure_5) {
        tmp6 = context;
      }
      first = tmp6;
    }
    return first;
  }();
  return arg1(dependencyMap[6]).useActiveGuildThemeForGuildId(tmp);
};
