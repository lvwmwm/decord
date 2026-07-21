// Module ID: 12922
// Function ID: 98498
// Name: MenuPopout
// Dependencies: []
// Exports: MenuPopout

// Module 12922 (MenuPopout)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ jsx: closure_5, Fragment: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/Menu/native/MenuPopout.tsx");

export const MenuPopout = function MenuPopout(onRequestOpen) {
  let key;
  let menuItems;
  ({ key, menuItems } = onRequestOpen);
  if (menuItems === undefined) {
    menuItems = [];
  }
  const arg1 = menuItems;
  onRequestOpen = onRequestOpen.onRequestOpen;
  const importDefault = onRequestOpen;
  const onRequestClose = onRequestOpen.onRequestClose;
  const dependencyMap = onRequestClose;
  const position = onRequestOpen.position;
  let callback = position;
  const align = onRequestOpen.align;
  const React = align;
  const offset = onRequestOpen.offset;
  const offsetAnimated = onRequestOpen.offsetAnimated;
  let uID;
  let animatedRef;
  let first;
  let closure_10;
  callback = undefined;
  let memo;
  let callback1;
  let obj = arg1(dependencyMap[3]);
  uID = obj.useUID();
  if (null != key) {
    uID = key;
  }
  animatedRef = arg1(dependencyMap[4]).useAnimatedRef();
  const tmp3 = callback(React.useState(false), 2);
  first = tmp3[0];
  closure_10 = tmp3[1];
  const items = [uID, onRequestClose];
  const mapped = menuItems.map((label) => ({ name: label.label, label: label.label }));
  callback = React.useCallback(() => {
    callback(false);
    if (null != onRequestClose) {
      onRequestClose();
    }
    onRequestOpen(onRequestClose[5]).hideNativeMenu(uID);
  }, items);
  const items1 = [animatedRef, callback, menuItems, position, align, offset, offsetAnimated];
  memo = React.useMemo(() => {
    const obj = {
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
        obj.children = callback2(callback(closure_2[8]).MenuItem, obj);
        return callback2(callback(closure_2[7]).MenuGroup, obj, "chat-context-menu-group-" + arg1);
      })
    };
    return offset(menuItems(onRequestClose[6]).Menu, obj);
  }, items1);
  const items2 = [memo, uID, onRequestOpen];
  callback1 = React.useCallback(() => {
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
    onPress: React.useCallback(() => {
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
      const found = menuItems.find((label) => label.label === label.nativeEvent.actionName);
      if (!tmp) {
        found.action();
      }
    }
  };
  obj.children = onRequestOpen.children(obj, { isShown: first });
  return offset(offsetAnimated, obj);
};
