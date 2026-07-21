// Module ID: 9896
// Function ID: 76579
// Name: ModalFloatingAction
// Dependencies: []
// Exports: ModalFloatingAction, ModalFloatingActionSpacer

// Module 9896 (ModalFloatingAction)
let closure_3 = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles({ floating: {}, spacer: { height: 96 } });
let closure_9 = { code: "function ModalFloatingActionNativeTsx1(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export const ModalFloatingAction = function ModalFloatingAction(isVisible) {
  isVisible = isVisible.isVisible;
  const arg1 = isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  const importDefault = floatingBackgroundColor;
  let obj = Object.create(null);
  obj.isVisible = 0;
  obj.floatingBackgroundColor = 0;
  const merged = Object.assign(isVisible, obj);
  let dependencyMap;
  let React;
  obj = arg1(dependencyMap[4]);
  let num = 0;
  if (isVisible) {
    num = 1;
  }
  const sharedValue = obj.useSharedValue(num);
  dependencyMap = sharedValue;
  const enabled = React.useContext(arg1(dependencyMap[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
  React = enabled;
  const items = [isVisible, sharedValue];
  const tmp3 = callback2();
  const effect = React.useEffect(() => {
    let num = 0;
    if (isVisible) {
      num = 1;
    }
    const result = sharedValue.set(isVisible(sharedValue[7]).withSpring(num, isVisible(sharedValue[8]).SUBTLE_SPRING, "animate-always"));
  }, items);
  let obj1 = arg1(dependencyMap[4]);
  const fn = function y() {
    let obj = { opacity: isVisible(sharedValue[4]).interpolate(sharedValue.get(), ["replace", "then"], ["replace", "then"]), borderBottomColor: floatingBackgroundColor, borderBottomWidth: 16 };
    obj = {};
    const obj2 = isVisible(sharedValue[4]);
    let num = 0;
    const value = sharedValue.get();
    if (enabled) {
      num = 0.999999;
    }
    const items = [num, 1];
    obj.translateY = isVisible(sharedValue[4]).interpolate(value, items, []);
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[4]).interpolate, sharedValue, floatingBackgroundColor, useReducedMotion: enabled };
  fn.__closure = obj;
  fn.__workletHash = 1679390676673;
  fn.__initData = closure_9;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj1 = { style: items1 };
  const items1 = [animatedStyle, tmp3.floating, { paddingBottom: importDefault(dependencyMap[6])().bottom }];
  let str = "none";
  if (isVisible) {
    str = "auto";
  }
  obj1.pointerEvents = str;
  const obj2 = {};
  const tmp5 = importDefault(dependencyMap[6])();
  const tmp8 = closure_7;
  const tmp9 = importDefault(dependencyMap[9]);
  const obj6 = importDefault(dependencyMap[10])(floatingBackgroundColor);
  const items2 = [importDefault(dependencyMap[10])(floatingBackgroundColor).alpha(0).hex(), floatingBackgroundColor];
  obj2.colors = items2;
  obj2.locations = [null, null];
  obj2.style = absoluteFill.absoluteFill;
  const items3 = [callback(tmp9, obj2), ];
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3["variant"] = "primary";
  items3[1] = callback(arg1(dependencyMap[11]).ModalActionButton, obj3);
  obj1.children = items3;
  return tmp8(importDefault(dependencyMap[4]).View, obj1);
};
export const ModalFloatingActionSpacer = function ModalFloatingActionSpacer() {
  return callback(closure_5, { style: callback2().spacer });
};
