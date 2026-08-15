// Module ID: 11115
// Function ID: 11116
// Name: Modal
// Dependencies: [19, 21, 1629, 6312, 6370, 2]
// Exports: Modal

// Module 11115 (Modal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(6370) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1629)().top };
  obj.headerStyle = obj;
  return jsx(require(6312) /* NavigationStack */.Navigator, { height: require(6370) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1629)().top });
};
