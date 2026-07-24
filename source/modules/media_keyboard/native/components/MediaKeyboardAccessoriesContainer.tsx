// Module ID: 15496
// Function ID: 119145
// Name: MediaKeyboardAccessoriesContainer
// Dependencies: [31, 27, 9583, 33, 477, 4130, 3991, 566, 2]
// Exports: default

// Module 15496 (MediaKeyboardAccessoriesContainer)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "_isNativeReflectConstruct";

const require = arg1;
set = set.isAndroid();
set = { androidContainer: { flex: 1 } };
set = {};
let merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
set.iosContainer = set;
set = _createForOfIteratorHelperLoose.createStyles(set);
let closure_8 = { code: "function MediaKeyboardAccessoriesContainerTsx1(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}" };
let result = set.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx");

export default function MediaKeyboardAccessoriesContainer(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  const animatedPosition = animatedIndex.animatedPosition;
  const animateOnMount = animatedIndex.animateOnMount;
  const initialPosition = animatedIndex.initialPosition;
  let tmp = set();
  let _isNativeReflectConstruct = tmp;
  let items = [tmp];
  const memo = initialPosition.useMemo(() => {
    const obj = {};
    const merged = Object.assign(sharedValue ? _isNativeReflectConstruct.androidContainer : _isNativeReflectConstruct.iosContainer);
    obj["overflow"] = "hidden";
    return obj;
  }, items);
  let closure_5 = initialPosition.useRef(false);
  let obj = animatedIndex(animateOnMount[6]);
  const sharedValue = obj.useSharedValue(false);
  let items1 = [sharedValue];
  const callback = initialPosition.useCallback(() => {
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
    obj.translateY = animatedIndex(animateOnMount[6]).interpolate(num, items, [100, 0]);
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
  obj = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: animatedIndex(animateOnMount[6]).interpolate, IS_ANDROID: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 10575537164844;
  fn.__initData = closure_8;
  const animatedStyle = animatedIndex(animateOnMount[6]).useAnimatedStyle(fn);
  const obj2 = animatedIndex(animateOnMount[6]);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores = animatedIndex(animateOnMount[7]).useStateFromStores(items2, () => tmp.isOpen());
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
  return closure_5(animatedPosition(animateOnMount[6]).View, obj);
};
