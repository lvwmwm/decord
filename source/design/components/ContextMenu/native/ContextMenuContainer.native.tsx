// Module ID: 13131
// Function ID: 101117
// Name: getItemKey
// Dependencies: [31, 27, 33, 4130, 13132, 9339, 1571, 4477, 4524, 4476, 2]
// Exports: ContextMenuContainer

// Module 13131 (getItemKey)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_4;
let require = arg1;
function getItemKey(key) {
  return key.key;
}
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["zIndex"] = 99999;
_createForOfIteratorHelperLoose.overlayView = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.wrapperView = StyleSheet.absoluteFillObject;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_7 = [];
function EMPTY_CALLBACK() {

}
function renderItem(arg0, menu, transitionState, cleanUp) {
  return jsx(require(13132) /* ContextMenuDivider */.ContextMenuPopout, { menu, transitionState, cleanUp }, arg0);
}
const result = require("jsxProd").fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

export const ContextMenuContainer = function ContextMenuContainer() {
  let tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(callback[5]);
  const activeContextMenu = obj.useActiveContextMenu();
  if (null != activeContextMenu) {
    const items = [activeContextMenu];
    let tmp3 = items;
  } else {
    tmp3 = closure_7;
  }
  let requestClose;
  if (null != activeContextMenu) {
    requestClose = activeContextMenu.requestClose;
  }
  if (null == requestClose) {
    requestClose = EMPTY_CALLBACK;
  }
  const effect = React.useEffect(() => {
    const KeyboardEvents = tmp(callback[6]).KeyboardEvents;
    tmp = KeyboardEvents.addListener("keyboardDidHide", tmp(callback[5]).hideContextMenu);
    return () => {
      closure_0.remove();
    };
  }, []);
  const items1 = [requestClose];
  callback = React.useCallback(() => {
    requestClose(true);
  }, items1);
  const items2 = [callback, , ];
  ({ overlayView: arr3[1], wrapperView: arr3[2] } = tmp);
  const callback1 = React.useCallback((children) => {
    let obj = { style: tmp.overlayView };
    obj = {};
    let str = "auto";
    if (0 === arg1.length) {
      str = "none";
    }
    obj.pointerEvents = str;
    obj.style = outer1_5.wrapperView;
    obj = { onDismiss: callback, children };
    obj.children = outer1_5(outer1_5(callback[8]).Dialog, obj);
    obj.children = outer1_5(outer1_4, obj);
    return outer1_5(requestClose(callback[7]), obj);
  }, items2);
  obj = { wrapChildren: callback1, items: tmp3, renderItem, getItemKey };
  return jsx(require(callback[9]).TransitionGroup, { wrapChildren: callback1, items: tmp3, renderItem, getItemKey });
};
