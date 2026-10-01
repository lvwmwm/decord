// Module ID: 4707
// Function ID: 4708
// Name: PortalKeyboard
// Dependencies: [19, 21, 4692, 1364, 4708, 2]
// Exports: PortalKeyboard, PortalKeyboardHost

// Module 4707 (PortalKeyboard)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import Portal from "Portal" /* 4708 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let c3 = "default";
const modal = "modal";
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboard.tsx");

export const PortalKeyboardState = { EMPTY: "empty", REQUEST_OPEN: "request_open", OPENING: "opening", OPEN: "open", REQUEST_CLOSE: "request_close", CLOSING: "closing", CLOSED: "closed" };
export const PORTAL_HOST_NAME_DEFAULT = "default";
export const PORTAL_HOST_NAME_MODAL = "modal";
export const PortalKeyboard = function PortalKeyboard(children) {
  children = children.children;
  const obj = NavigationRouteUtils;
  if (obj.useIsModalOpen()) {
    let tmp3;
    const tmpResult = PlatformUtils;
    if (tmpResult.isIOS()) {
      tmp3 = modal;
    }
    return jsx(Portal.Portal, { hostName: tmp3, children });
  }
  tmp3 = c3;
};
export const PortalKeyboardHost = function PortalKeyboardHost(name) {
  name = name.name;
  if (name === undefined) {
    name = c3;
  }
  return jsx(Portal.PortalHost, { name });
};
