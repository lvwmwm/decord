// Module ID: 4000
// Function ID: 33241
// Name: PortalKeyboardState
// Dependencies: [31, 33, 3981, 477, 4001, 2]
// Exports: PortalKeyboard, PortalKeyboardHost

// Module 4000 (PortalKeyboardState)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/keyboard/native/PortalKeyboard.tsx");

export const PortalKeyboardState = { EMPTY: "empty", REQUEST_OPEN: "request_open", OPENING: "opening", OPEN: "open", REQUEST_CLOSE: "request_close", CLOSING: "closing", CLOSED: "closed" };
export const PORTAL_HOST_NAME_DEFAULT = "default";
export const PORTAL_HOST_NAME_MODAL = "modal";
export const PortalKeyboard = function PortalKeyboard(children) {
  let obj = require(3981) /* _createForOfIteratorHelperLoose */;
  let str = "default";
  if (obj.useIsModalOpen()) {
    str = "default";
    if (obj2.isIOS()) {
      str = "modal";
    }
    obj2 = require(477) /* set */;
  }
  obj = { hostName: str, children: children.children };
  return jsx(require(4001) /* Portal */.Portal, { hostName: str, children: children.children });
};
export const PortalKeyboardHost = function PortalKeyboardHost(name) {
  let str = name.name;
  if (str === undefined) {
    str = "default";
  }
  const obj = { name: str };
  return jsx(require(4001) /* Portal */.PortalHost, { name: str });
};
