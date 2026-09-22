// Module ID: 14664
// Function ID: 14665
// Name: ThemedStatusBar
// Dependencies: [19, 1181, 502, 21, 504, 4494, 4488, 9809, 9611, 2]
// Exports: default

// Module 14664 (ThemedStatusBar)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 4488 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4494 */;
import StatusBarDefault from "StatusBar" /* 9611 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 9809 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1181 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  const items = [AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  const items1 = [ThemeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => shared.isThemeDark(theme.theme));
  const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    const obj5 = { barStyle: "light-content" };
    return jsx(StatusBarDefault, { barStyle: "light-content" });
  } else if (isModalOpen) {
    let str2 = "dark-content";
    if (stateFromStores1) {
      str2 = "light-content";
    }
  } else {
    if (!globalStatusIndicatorState.isVisible) {
      let str = "dark-content";
    }
    str = "light-content";
  }
};
