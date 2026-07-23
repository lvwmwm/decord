// Module ID: 13499
// Function ID: 103898
// Name: ThemedStatusBar
// Dependencies: [31, 1278, 1194, 33, 566, 3981, 3976, 10631, 9757, 2]
// Exports: default

// Module 13499 (ThemedStatusBar)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  let obj = require(566) /* initialize */;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.isAuthenticated());
  const isModalOpen = require(3981) /* _createForOfIteratorHelperLoose */.useIsModalOpen();
  const obj2 = require(3981) /* _createForOfIteratorHelperLoose */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_0(outer1_2[6]).isThemeDark(outer1_3.theme));
  const obj3 = require(566) /* initialize */;
  const globalStatusIndicatorState = require(10631) /* useGlobalStatusIndicatorState */.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    obj = { barStyle: "light-content" };
    return jsx(importDefault(9757), { barStyle: "light-content" });
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
