// Module ID: 13097
// Function ID: 101032
// Name: MenuPopout
// Dependencies: [57, 31, 33, 9341, 3991, 9703, 13094, 13095, 13096, 2]
// Exports: MenuPopout

// Module 13097 (MenuPopout)
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/components/Menu/native/MenuPopout.tsx");

export const MenuPopout = function MenuPopout(onRequestOpen) {
  let key;
  let menuItems;
  ({ key, menuItems } = onRequestOpen);
  if (menuItems === undefined) {
    menuItems = [];
  }
  onRequestOpen = onRequestOpen.onRequestOpen;
  const onRequestClose = onRequestOpen.onRequestClose;
  const position = onRequestOpen.position;
  const align = onRequestOpen.align;
  const offset = onRequestOpen.offset;
  const offsetAnimated = onRequestOpen.offsetAnimated;
  let uID;
  let animatedRef;
  let first;
  let closure_10;
  let callback;
  let memo;
  let callback1;
  let obj = menuItems(onRequestClose[3]);
  uID = obj.useUID();
  if (null != key) {
    uID = key;
  }
  animatedRef = menuItems(onRequestClose[4]).useAnimatedRef();
  const tmp3 = position(align.useState(false), 2);
  first = tmp3[0];
  closure_10 = tmp3[1];
  const items = [uID, onRequestClose];
  const mapped = menuItems.map((label) => ({ name: label.label, label: label.label }));
  callback = align.useCallback(() => {
    callback(false);
    if (null != onRequestClose) {
      onRequestClose();
    }
    onRequestOpen(onRequestClose[5]).hideNativeMenu(uID);
  }, items);
  const items1 = [animatedRef, callback, menuItems, position, align, offset, offsetAnimated];
  memo = align.useMemo(() => {
    let obj = {
      toggleButtonRef: animatedRef,
      onClose: callback,
      position,
      align,
      offset,
      offsetAnimated,
      children: menuItems.map((arg0, arg1) => {
        let obj = {};
        obj = { showIconFirst: true };
        const merged = Object.assign(arg0);
        obj.children = offset(menuItems(onRequestClose[8]).MenuItem, obj);
        return offset(menuItems(onRequestClose[7]).MenuGroup, obj, "chat-context-menu-group-" + arg1);
      })
    };
    return offset(menuItems(onRequestClose[6]).Menu, obj);
  }, items1);
  const items2 = [memo, uID, onRequestOpen];
  callback1 = align.useCallback(() => {
    callback(true);
    if (null != onRequestOpen) {
      onRequestOpen();
    }
    onRequestOpen(onRequestClose[5]).showNativeMenu(uID, memo);
  }, items2);
  const items3 = [first, callback, callback1];
  obj = {};
  obj = {
    ref: animatedRef,
    onPress: align.useCallback(() => {
      if (first) {
        callback();
      } else {
        callback1();
      }
    }, items3),
    accessibilityState: { expanded: first },
    accessibilityActions: mapped,
    onAccessibilityAction(arg0) {
      const menuItems = arg0;
      const found = menuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
      if (!tmp) {
        found.action();
      }
    }
  };
  obj.children = onRequestOpen.children(obj, { isShown: first });
  return offset(offsetAnimated, obj);
};
