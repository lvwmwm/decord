// Module ID: 10976
// Function ID: 10977
// Name: Modal
// Dependencies: [19, 21, 1613, 6607, 6180, 2]
// Exports: Modal

// Module 10976 (Modal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import NavigatorConstants from "NavigatorConstants" /* 6180 */;
import Navigator from "Navigator" /* 6607 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const tmp = useSafeAreaInsetsDefault();
  obj.headerStyle = { height: NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top };
  return jsx(Navigator.Navigator, {});
};
