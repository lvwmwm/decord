// Module ID: 14197
// Function ID: 14198
// Name: ContextMenuContainer
// Dependencies: [19, 17, 21, 5091, 14198, 558, 576, 9336, 1645, 5305, 5357, 4788, 2]

// Module 14197 (ContextMenuContainer)
import Fragment from "Fragment" /* 21 */;
import OverlayViewDefault from "OverlayView" /* 5305 */;
import ContextMenuPopout from "ContextMenuPopout" /* 14198 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContextMenuContainer() {
  let onDismiss;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp6;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(13);
  let tmp4 = closure_6();
  _require = tmp4;
  const obj2 = require("ContextMenuState");
  const activeContextMenu = obj2.useActiveContextMenu();
  if (cResult[0] !== activeContextMenu) {
    let tmp8;
    if (null != activeContextMenu) {
      const items = [activeContextMenu];
      tmp8 = items;
    } else {
      tmp8 = closure_7;
    }
    cResult[0] = activeContextMenu;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  let requestClose;
  if (activeContextMenu != null) {
    requestClose = activeContextMenu.requestClose;
  }
  if (requestClose == null) {
    requestClose = EMPTY_CALLBACK;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      const KeyboardEvents = closure_0(onDismiss[8]).KeyboardEvents;
      closure_0 = KeyboardEvents.addListener("keyboardDidHide", () => {
        const ContextMenuStore = closure_0(onDismiss[7]).ContextMenuStore;
        const menu = ContextMenuStore.getState().menu;
        let ignoreKeyboardHide;
        const tmp = closure_0;
        const tmp2 = onDismiss;
        if (menu != null) {
          ignoreKeyboardHide = menu.ignoreKeyboardHide;
        }
        if (true !== ignoreKeyboardHide) {
          const tmpResult = tmp(tmp2[7]);
          tmpResult.hideContextMenu();
        }
      });
      return () => {
        closure_0.remove();
      };
    };
    const items1 = [];
    cResult[2] = fn;
    cResult[3] = items1;
    tmp11 = items1;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const effect = react.useEffect(tmp10, tmp11);
  if (cResult[4] !== requestClose) {
    const fn2 = function w() {
      requestClose(true);
    };
    cResult[4] = requestClose;
    cResult[5] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  dependencyMap = tmp13;
  if (cResult[6] === tmp13) {
    if (cResult[7] === tmp4.overlayView) {
      let tmp14;
      if (cResult[8] === tmp4.wrapperView) {
        tmp14 = cResult[9];
      }
      if (cResult[10] === tmp6) {
        let tmp15;
        if (cResult[11] === tmp14) {
          tmp15 = cResult[12];
        }
        return tmp15;
      }
      const tmp19 = jsx(tmp(4788).TransitionGroup, { wrapChildren: tmp14, items: tmp6, renderItem, getItemKey });
      cResult[10] = tmp6;
      cResult[11] = tmp14;
      cResult[12] = tmp19;
      tmp15 = tmp19;
    }
  }
  const fn3 = function x(children, arg1) {
    let str = "auto";
    OverlayViewDefault;
    if (0 === arg1.length) {
      str = "none";
    }
    return <tmp3 style={closure_0.overlayView}>{null}</tmp3>;
  };
  cResult[6] = tmp13;
  cResult[7] = tmp4.overlayView;
  cResult[8] = tmp4.wrapperView;
  cResult[9] = fn3;
  tmp14 = fn3;
}) : (function ContextMenuContainer() {
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
    const KeyboardEvents = closure_0(callback[8]).KeyboardEvents;
    closure_0 = KeyboardEvents.addListener("keyboardDidHide", () => {
      const ContextMenuStore = closure_0(onDismiss[7]).ContextMenuStore;
      const menu = ContextMenuStore.getState().menu;
      let ignoreKeyboardHide;
      const tmp = closure_0;
      const tmp2 = onDismiss;
      if (menu != null) {
        ignoreKeyboardHide = menu.ignoreKeyboardHide;
      }
      if (true !== ignoreKeyboardHide) {
        const tmpResult = tmp(tmp2[7]);
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
  return jsx(tmp2(tmp3[11]).TransitionGroup, { wrapChildren: callback1, items: tmp5, renderItem, getItemKey });
});
const result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

export const ContextMenuContainer = tmp5;
