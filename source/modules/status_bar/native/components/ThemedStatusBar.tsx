// Module ID: 14502
// Function ID: 14503
// Name: ThemedStatusBar
// Dependencies: [19, 1301, 1215, 21, 586, 4335, 1362, 9608, 9410, 2]
// Exports: default

// Module 14502 (ThemedStatusBar)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import coerceMainRoute from "coerceMainRoute" /* 4335 */;
import componentDidMountDefault from "componentDidMount" /* 9410 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 9608 */;
import closure_3 from "handleThemeChange" /* 1301 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = coerceMainRoute.useIsModalOpen();
  const obj2 = coerceMainRoute;
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => callback(table[6]).isThemeDark(theme.theme));
  const obj3 = initialize;
  const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    obj = { barStyle: null };
    obj[0] = "light-content";
    return jsx(componentDidMountDefault, { barStyle: null });
  } else if (isModalOpen) {
    let str2 = "dark-content";
    if (stateFromStores1) {
      str2 = "light-content";
    }
    let str = str2;
  } else {
    if (!globalStatusIndicatorState.isVisible) {
      str = "dark-content";
    }
    str = "light-content";
  }
};
