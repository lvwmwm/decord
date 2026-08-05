// Module ID: 11220
// Function ID: 11221
// Name: Modal
// Dependencies: [19, 21, 1581, 5650, 5220, 2]
// Exports: Modal

// Module 11220 (Modal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(5220) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1581)().top };
  obj.headerStyle = obj;
  return jsx(require(5650) /* NavigationStack */.Navigator, { height: require(5220) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1581)().top });
};
