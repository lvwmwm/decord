// Module ID: 12958
// Function ID: 98605
// Name: getItemKey
// Dependencies: []
// Exports: ContextMenuContainer

// Module 12958 (getItemKey)
let StyleSheet;
function getItemKey(key) {
  return key.key;
}
let closure_3 = importAll(dependencyMap[0]);
({ StyleSheet, View: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["zIndex"] = 99999;
obj.overlayView = obj;
obj.wrapperView = StyleSheet.absoluteFillObject;
let closure_6 = obj.createStyles(obj);
let closure_7 = [];
function EMPTY_CALLBACK() {

}
function renderItem(arg0, menu, transitionState, cleanUp) {
  return jsx(menu(dependencyMap[4]).ContextMenuPopout, { menu, transitionState, cleanUp }, arg0);
}
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

export const ContextMenuContainer = function ContextMenuContainer() {
  const tmp = callback();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[5]);
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
  const importDefault = requestClose;
  const effect = React.useEffect(() => {
    const KeyboardEvents = tmp(callback[6]).KeyboardEvents;
    const tmp = KeyboardEvents.addListener("keyboardDidHide", tmp(callback[5]).hideContextMenu);
    return () => {
      closure_0.remove();
    };
  }, []);
  const items1 = [requestClose];
  const callback = React.useCallback(() => {
    requestClose(true);
  }, items1);
  const dependencyMap = callback;
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
    obj.style = callback.wrapperView;
    obj = { onDismiss: callback, children };
    obj.children = callback(callback(callback[8]).Dialog, obj);
    obj.children = callback(closure_4, obj);
    return callback(requestClose(callback[7]), obj);
  }, items2);
  obj = { wrapChildren: callback1, items: tmp3, renderItem, getItemKey };
  return jsx(arg1(dependencyMap[9]).TransitionGroup, obj);
};
