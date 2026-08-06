// Module ID: 11254
// Function ID: 11255
// Name: Modal
// Dependencies: [19, 21, 1609, 5704, 5250, 2]
// Exports: Modal

// Module 11254 (Modal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(5250) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1609)().top };
  obj.headerStyle = obj;
  return jsx(require(5704) /* NavigationStack */.Navigator, { height: require(5250) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1609)().top });
};
