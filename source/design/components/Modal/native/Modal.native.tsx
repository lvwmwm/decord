// Module ID: 11248
// Function ID: 11249
// Name: Modal
// Dependencies: [19, 21, 1581, 5665, 5235, 2]
// Exports: Modal

// Module 11248 (Modal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(5235) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1581)().top };
  obj.headerStyle = obj;
  return jsx(require(5665) /* NavigationStack */.Navigator, { height: require(5235) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1581)().top });
};
