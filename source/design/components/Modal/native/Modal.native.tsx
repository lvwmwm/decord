// Module ID: 11335
// Function ID: 11336
// Name: Modal
// Dependencies: [19, 21, 1609, 5783, 5267, 2]
// Exports: Modal

// Module 11335 (Modal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(5267) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1609)().top };
  obj.headerStyle = obj;
  return jsx(require(5783) /* NavigationStack */.Navigator, { height: require(5267) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1609)().top });
};
