// Module ID: 11387
// Function ID: 11388
// Name: Modal
// Dependencies: [19, 21, 1628, 5823, 5307, 2]
// Exports: Modal

// Module 11387 (Modal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(5307) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1628)().top };
  obj.headerStyle = obj;
  return jsx(require(5823) /* NavigationStack */.Navigator, { height: require(5307) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1628)().top });
};
