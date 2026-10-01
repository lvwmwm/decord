// Module ID: 16297
// Function ID: 16298
// Name: MediaKeyboardAccessoriesContainer
// Dependencies: [19, 17, 8966, 21, 1364, 4836, 4566, 504, 2]
// Exports: default

// Module 16297 (MediaKeyboardAccessoriesContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 8966 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_6 = PlatformUtils.isAndroid();
let createStyles = createStyles_mod;
let obj = { androidContainer: { flex: 1 }, iosContainer: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const __initData = { code: "function MediaKeyboardAccessoriesContainerTsx1(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}" };
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx");

export default function MediaKeyboardAccessoriesContainer(animatedIndex) {
  let items3;
  animatedIndex = animatedIndex.animatedIndex;
  const animatedPosition = animatedIndex.animatedPosition;
  const animateOnMount = animatedIndex.animateOnMount;
  const initialPosition = animatedIndex.initialPosition;
  const children = animatedIndex.children;
  let tmp = closure_7();
  const open = tmp;
  let items = [tmp];
  const memo = initialPosition.useMemo(() => {
    const obj = { overflow: "hidden" };
    const tmp2 = closure_6 ? open.androidContainer : open.iosContainer;
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  const ref = initialPosition.useRef(false);
  let obj = animatedIndex(animateOnMount[6]);
  const sharedValue = obj.useSharedValue(false);
  const items1 = [sharedValue];
  const callback = initialPosition.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      const result = sharedValue.set(true);
    }
  }, items1);
  let obj2 = animatedIndex(animateOnMount[6]);
  const fn = function _() {
    let obj2;
    let obj4;
    let value;
    const tmp = !animateOnMount && !sharedValue.get();
    let num = 0;
    if (!tmp) {
      const _Math = Math;
      num = Math.min(animatedIndex.get(), 0);
    }
    if (tmp) {
      value = initialPosition;
    } else {
      value = animatedPosition.get();
    }
    const obj = { translateY: obj2.interpolate(num, [-1, 0], [100, 0]) };
    const items = [obj];
    obj2 = ReanimatedRexport;
    const tmp7 = closure_6;
    if (tmp7) {
      obj4 = { marginTop: value, transform: items };
      const obj3 = { marginTop: value, transform: items };
    } else {
      obj4 = { top: value, transform: items };
    }
    return obj4;
  };
  let obj3 = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: animatedIndex(animateOnMount[6]).interpolate, IS_ANDROID: sharedValue };
  fn.__closure = obj3;
  fn.__workletHash = 10575537164844;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = animatedIndex(animateOnMount[7]);
  const items2 = [open];
  const stateFromStores = obj4.useStateFromStores(items2, () => open.isOpen());
  let tmp7 = ref;
  let str;
  const View = animatedPosition(animateOnMount[6]).View;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  const obj5 = { importantForAccessibility: str, style: items3, onLayout: callback, pointerEvents: "box-none", children };
  items3 = [memo, animatedStyle];
  return tmp7(View, obj5);
};
