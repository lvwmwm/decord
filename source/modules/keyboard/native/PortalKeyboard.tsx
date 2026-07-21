// Module ID: 3998
// Function ID: 33234
// Name: PortalKeyboardState
// Dependencies: []
// Exports: PortalKeyboard, PortalKeyboardHost

// Module 3998 (PortalKeyboardState)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/keyboard/native/PortalKeyboard.tsx");

export const PortalKeyboardState = { EMPTY: "empty", REQUEST_OPEN: "request_open", OPENING: "opening", OPEN: "open", REQUEST_CLOSE: "request_close", CLOSING: "closing", CLOSED: "closed" };
export const PORTAL_HOST_NAME_DEFAULT = "default";
export const PORTAL_HOST_NAME_MODAL = "modal";
export const PortalKeyboard = function PortalKeyboard(children) {
  let obj = arg1(dependencyMap[2]);
  let str = "default";
  if (obj.useIsModalOpen()) {
    str = "default";
    if (obj2.isIOS()) {
      str = "modal";
    }
    const obj2 = arg1(dependencyMap[3]);
  }
  obj = { hostName: str, children: children.children };
  return jsx(arg1(dependencyMap[4]).Portal, obj);
};
export const PortalKeyboardHost = function PortalKeyboardHost(name) {
  let str = name.name;
  if (str === undefined) {
    str = "default";
  }
  const obj = { name: str };
  return jsx(arg1(dependencyMap[4]).PortalHost, obj);
};
