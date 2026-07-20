// Module ID: 15314
// Function ID: 116547
// Name: MediaKeyboardAccessoriesContainer
// Dependencies: []
// Exports: default

// Module 15314 (MediaKeyboardAccessoriesContainer)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
let closure_6 = obj.isAndroid();
obj = { androidContainer: { flex: 1 } };
obj = {};
const merged = Object.assign(arg1(dependencyMap[1]).StyleSheet.absoluteFillObject);
obj.iosContainer = obj;
let closure_7 = arg1(dependencyMap[5]).createStyles(obj);
let closure_8 = { code: "function MediaKeyboardAccessoriesContainerTsx1(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}" };
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx");

export default function MediaKeyboardAccessoriesContainer(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  const arg1 = animatedIndex;
  const animatedPosition = animatedIndex.animatedPosition;
  const importDefault = animatedPosition;
  const animateOnMount = animatedIndex.animateOnMount;
  const dependencyMap = animateOnMount;
  const initialPosition = animatedIndex.initialPosition;
  const React = initialPosition;
  const tmp = callback();
  let closure_4 = tmp;
  const items = [tmp];
  const memo = React.useMemo(() => {
    const obj = {};
    const merged = Object.assign(sharedValue ? tmp.androidContainer : tmp.iosContainer);
    obj["overflow"] = "hidden";
    return obj;
  }, items);
  let closure_5 = React.useRef(false);
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(false);
  let closure_6 = sharedValue;
  const items1 = [sharedValue];
  const callback = React.useCallback(() => {
    if (!ref.current) {
      ref.current = true;
      const result = sharedValue.set(true);
    }
  }, items1);
  const fn = function _() {
    let tmp = !animateOnMount;
    if (tmp) {
      tmp = !sharedValue.get();
    }
    let num = 0;
    if (!tmp) {
      const _Math = Math;
      num = Math.min(animatedIndex.get(), 0);
    }
    if (tmp) {
      let value = initialPosition;
    } else {
      value = animatedPosition.get();
    }
    let obj = {};
    const items = [-1, 0];
    obj.translateY = animatedIndex(animateOnMount[6]).interpolate(num, items, [994770946, 919863298]);
    const items1 = [obj];
    obj = {};
    if (sharedValue) {
      obj.marginTop = value;
      obj.transform = items1;
      let tmp7 = obj;
    } else {
      obj.top = value;
      obj.transform = items1;
      tmp7 = obj;
    }
    return tmp7;
  };
  obj = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: arg1(dependencyMap[6]).interpolate, IS_ANDROID: closure_6 };
  fn.__closure = obj;
  fn.__workletHash = 10575537164844;
  fn.__initData = closure_8;
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(fn);
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [closure_4];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items2, () => tmp.isOpen());
  obj = {};
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  obj.importantForAccessibility = str;
  const items3 = [memo, animatedStyle];
  obj.style = items3;
  obj.onLayout = callback;
  obj.pointerEvents = "box-none";
  obj.children = animatedIndex.children;
  return closure_5(importDefault(dependencyMap[6]).View, obj);
};
