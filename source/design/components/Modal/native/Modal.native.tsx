// Module ID: 11403
// Function ID: 11404
// Name: Modal
// Dependencies: [19, 21, 1628, 5844, 5328, 2]
// Exports: Modal

// Module 11403 (Modal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(5328) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1628)().top };
  obj.headerStyle = obj;
  return jsx(require(5844) /* NavigationStack */.Navigator, { height: require(5328) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1628)().top });
};
