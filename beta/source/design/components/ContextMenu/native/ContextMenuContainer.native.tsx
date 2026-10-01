// Module ID: 13984
// Function ID: 13985
// Name: ContextMenuContainer
// Dependencies: [19, 17, 21, 4836, 13985, 7359, 1627, 5210, 5262, 4540, 2]
// Exports: ContextMenuContainer

// Module 13984 (ContextMenuContainer)
import Fragment from "Fragment" /* 21 */;
import OverlayViewDefault from "OverlayView" /* 5210 */;
import ContextMenuPopout from "ContextMenuPopout" /* 13985 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let StyleSheet;
let closure_4;
let obj2;
function getItemKey(key) {
  return key.key;
}
({ StyleSheet, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { overlayView: obj2, wrapperView: StyleSheet.absoluteFillObject };
obj2 = { zIndex: 99999 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_6 = createStyles(obj);
let closure_7 = [];
function EMPTY_CALLBACK() {

}
function renderItem(arg0, menu, transitionState, cleanUp) {
  return jsx(ContextMenuPopout.ContextMenuPopout, { menu, transitionState, cleanUp }, arg0);
}
const result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

export const ContextMenuContainer = function ContextMenuContainer() {
  let onDismiss;
  let tmp5;
  let tmp = closure_6();
  _require = tmp;
  let tmp2 = _require;
  const tmp3 = onDismiss;
  const obj = require("ContextMenuState");
  const activeContextMenu = obj.useActiveContextMenu();
  if (null != activeContextMenu) {
    const items = [activeContextMenu];
    tmp5 = items;
  } else {
    tmp5 = closure_7;
  }
  let requestClose;
  if (activeContextMenu != null) {
    requestClose = activeContextMenu.requestClose;
  }
  if (requestClose == null) {
    requestClose = EMPTY_CALLBACK;
  }
  const effect = react.useEffect(() => {
    const KeyboardEvents = closure_0(callback[6]).KeyboardEvents;
    closure_0 = KeyboardEvents.addListener("keyboardDidHide", () => {
      const ContextMenuStore = closure_0(onDismiss[5]).ContextMenuStore;
      const menu = ContextMenuStore.getState().menu;
      let ignoreKeyboardHide;
      const tmp = closure_0;
      const tmp2 = onDismiss;
      if (menu != null) {
        ignoreKeyboardHide = menu.ignoreKeyboardHide;
      }
      if (true !== ignoreKeyboardHide) {
        const tmpResult = tmp(tmp2[5]);
        tmpResult.hideContextMenu();
      }
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const items1 = [requestClose];
  onDismiss = react.useCallback(() => {
    requestClose(true);
  }, items1);
  const items2 = [onDismiss, , ];
  ({ overlayView: arr3[1], wrapperView: arr3[2] } = tmp);
  const callback1 = react.useCallback((children, arg1) => {
    let str = "auto";
    OverlayViewDefault;
    if (0 === arg1.length) {
      str = "none";
    }
    return <tmp3 style={closure_0.overlayView}>{null}</tmp3>;
  }, items2);
  return jsx(tmp2(tmp3[9]).TransitionGroup, { wrapChildren: callback1, items: tmp5, renderItem, getItemKey });
};
