// Module ID: 11100
// Function ID: 86338
// Name: Modal
// Dependencies: [31, 33, 1557, 5517, 5084, 2]
// Exports: Modal

// Module 11100 (Modal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(5084) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1557)().top };
  obj["headerStyle"] = obj;
  return jsx(require(5517) /* NavigationStack */.Navigator, { height: require(5084) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1557)().top });
};
