// Module ID: 3980
// Function ID: 33011
// Name: getGuildIdFromNavigationState
// Dependencies: [57, 31, 653, 3981, 3982, 4011, 4012, 2]
// Exports: default

// Module 3980 (getGuildIdFromNavigationState)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ME } from "ME";

const require = arg1;
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
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      let tmp = (function getGuildIdFromRootNavigationState(rootState) {
        const tmp = outer1_6(rootState);
        if (null != tmp) {
          return tmp;
        } else {
          let found;
          if (null != rootState) {
            const routes = rootState.routes;
            if (null != routes) {
              const mapped = routes.map(outer1_0(outer1_2[3]).coerceMainRoute);
              found = mapped.find((arg0) => null != arg0);
            }
          }
          let state;
          if (null != found) {
            state = found.state;
          }
          return outer1_6(state);
        }
      })(rootNavigationRef.getRootState());
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
const result = require("ME").fileFinishedImporting("modules/guild_themes/native/useRoutedActiveGuildTheme.tsx");

export default function useRoutedActiveGuildTheme() {
  const tmp = (function useRoutedActiveGuildThemeGuildId() {
    const context = outer1_4.useContext(outer1_1(outer1_2[5]));
    const tmp2 = outer1_3(outer1_4.useState(outer1_7), 2);
    let first = tmp2[0];
    let closure_0 = tmp2[1];
    const effect = outer1_4.useEffect(() => {
      function handleStateChange() {
        outer1_0(outer3_7());
      }
      const rootNavigationRef = outer2_0(outer2_2[4]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        handleStateChange();
        return rootNavigationRef.addListener("state", handleStateChange);
      }
      const obj = outer2_0(outer2_2[4]);
    }, []);
    if (undefined !== context) {
      let tmp6 = null;
      if (context !== outer1_5) {
        tmp6 = context;
      }
      first = tmp6;
    }
    return first;
  })();
  return require(4012) /* resolveRenderableGuildThemeSettings */.useActiveGuildThemeForGuildId(tmp);
};
