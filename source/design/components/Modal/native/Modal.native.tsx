// Module ID: 11860
// Function ID: 11861
// Name: Modal
// Dependencies: [19, 21, 1627, 6940, 5637, 2]
// Exports: Modal

// Module 11860 (Modal)
import noopAll from "noop" /* 19 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT" /* 5637 */;
import NavigationStack from "NavigationStack" /* 6940 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: NAV_BAR_HEIGHT.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top };
  obj.headerStyle = obj;
  return jsx(NavigationStack.Navigator, { height: NAV_BAR_HEIGHT.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top });
};
