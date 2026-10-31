// Module ID: 16420
// Function ID: 16421
// Name: ThemedStatusBar
// Dependencies: [19, 1192, 502, 21, 504, 5198, 5021, 11857, 11212, 2]
// Exports: default

// Module 16420 (ThemedStatusBar)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import shared from "shared" /* 5021 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import StatusBarDefault from "StatusBar" /* 11212 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 11857 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
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
    const obj = shared;
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
};
