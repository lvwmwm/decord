// Module ID: 5497
// Function ID: 5498
// Name: PortalKeyboard
// Dependencies: [19, 21, 5482, 1380, 5498, 2]
// Exports: PortalKeyboard, PortalKeyboardHost

// Module 5497 (PortalKeyboard)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5482 */;
import Portal from "Portal" /* 5498 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let c3 = "default";
const modal = "modal";
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboard.tsx");

export const PortalKeyboardState = { EMPTY: "empty", REQUEST_OPEN: "request_open", OPENING: "opening", OPEN: "open", REQUEST_CLOSE: "request_close", CLOSING: "closing", CLOSED: "closed" };
export const PORTAL_HOST_NAME_DEFAULT = "default";
export const PORTAL_HOST_NAME_MODAL = "modal";
export function PortalKeyboard(children) {
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
}
export function PortalKeyboardHost(name) {
  name = name.name;
  if (name === undefined) {
    name = c3;
  }
  return jsx(Portal.PortalHost, { name });
}
