// Module ID: 14805
// Function ID: 14806
// Name: ThemedStatusBar
// Dependencies: [19, 1205, 502, 21, 558, 576, 504, 4976, 4969, 11023, 10360, 2]

// Module 14805 (ThemedStatusBar)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import StatusBarDefault from "StatusBar" /* 10360 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 11023 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedStatusBar() {
  let authenticated;
  let theme;
  let tmp10;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function c() {
      return authenticated.isAuthenticated();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult4 = NavigationRouteUtils;
  const isModalOpen = tmpResult4.useIsModalOpen();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ThemeStore];
    class S {
      constructor() {
        const obj = require("shared");
        return obj.isThemeDark(theme.theme);
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp10 = S;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult5 = get_initialized;
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp9, tmp10);
  const tmpResult6 = useGlobalStatusIndicatorState;
  const globalStatusIndicatorState = tmpResult6.useGlobalStatusIndicatorState();
  let str = "light-content";
  if (stateFromStores) {
    let str2;
    if (isModalOpen) {
      let str3 = "dark-content";
      if (stateFromStores1) {
        str3 = "light-content";
      }
      str2 = str3;
    } else {
      if (!globalStatusIndicatorState.isVisible) {
        str2 = "dark-content";
      }
      str2 = "light-content";
    }
    str = str2;
  }
  if (cResult[4] !== str) {
    class S {
      constructor() {
        const obj = require("shared");
        return obj.isThemeDark(theme.theme);
      }
    }
    const tmp17 = jsx(StatusBarDefault, { barStyle: null });
    cResult[4] = str;
    cResult[5] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[5];
  }
  return tmp14;
}) : (function ThemedStatusBar() {
  let authenticated;
  let theme;
  let obj = get_initialized;
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const obj2 = NavigationRouteUtils;
  const isModalOpen = obj2.useIsModalOpen();
  const items1 = [ThemeStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const obj = require("shared");
    return obj.isThemeDark(theme.theme);
  });
  const obj4 = useGlobalStatusIndicatorState;
  const globalStatusIndicatorState = obj4.useGlobalStatusIndicatorState();
  let barStyle = "light-content";
  if (stateFromStores) {
    let str2;
    if (isModalOpen) {
      let str3 = "dark-content";
      if (stateFromStores1) {
        str3 = "light-content";
      }
      str2 = str3;
    } else {
      if (!globalStatusIndicatorState.isVisible) {
        str2 = "dark-content";
      }
      str2 = "light-content";
    }
    barStyle = str2;
  }
  return jsx(StatusBarDefault, { barStyle });
});
const result = size.fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default tmp3;
