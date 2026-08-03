// Module ID: 13711
// Function ID: 13712
// Name: ThemedStatusBar
// Dependencies: [19, 1302, 1218, 21, 589, 4106, 4101, 10809, 7657, 2]
// Exports: default

// Module 13711 (ThemedStatusBar)
import "noop";
import handleThemeChange from "handleThemeChange";
import fetchFingerprint from "fetchFingerprint";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("fetchFingerprint").fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  let obj = require(589) /* initialize */;
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = require(4106) /* navigationToRootTabHelper */.useIsModalOpen();
  const obj2 = require(4106) /* navigationToRootTabHelper */;
  const items1 = [handleThemeChange];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => callback(table[6]).isThemeDark(theme.theme));
  const obj3 = require(589) /* initialize */;
  const globalStatusIndicatorState = require(10809) /* useGlobalStatusIndicatorState */.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    obj = { barStyle: null };
    obj[0] = "light-content";
    return jsx(importDefault(7657), { barStyle: null });
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
