// Module ID: 13456
// Function ID: 13457
// Name: MediaKeyboardAccessoriesContainer
// Dependencies: [19, 17, 10972, 21, 1377, 5243, 1652, 504, 2]
// Exports: default

// Module 13456 (MediaKeyboardAccessoriesContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 10972 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

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
let closure_8 = { code: "(function MediaKeyboardAccessoriesContainerTsx1(){let[animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID]=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};})" };
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx");

export default function MediaKeyboardAccessoriesContainer(arg0) {
  let animateOnMount;
  let animatedIndex;
  let animatedPosition;
  let children;
  let closure_0;
  let initialPosition;
  let items5;
  let open;
  let ref;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp8;
  let tmp9;
  let sharedValue;
  ({ animatedIndex, animatedPosition, animateOnMount, children, initialPosition } = arg0);
  let tmp = closure_7();
  _require = tmp;
  let items = [tmp];
  const memo = react.useMemo(() => {
    const obj = { overflow: "hidden" };
    const tmp2 = closure_6 ? closure_0.androidContainer : closure_0.iosContainer;
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  importDefault = react.useRef(false);
  let obj = require("module_1652");
  sharedValue = obj.useSharedValue(false);
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      const result = sharedValue.set(true);
    }
  }, items1);
  let tmp7 = require("module_1652");
  const items2 = [closure_8, animateOnMount, sharedValue, animatedIndex, initialPosition, animatedPosition, , ];
  const useAnimatedStyle = tmp7.useAnimatedStyle;
  items2[6] = require("module_1652").interpolate;
  items2[7] = closure_6;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  const tmp3 = _require;
  class MediaKeyboardAccessoriesContainerTsx1 {
    constructor() {
      let obj3;
      let value;
      const tmp = !c0 && !_undefined.get();
      let num = 0;
      if (!tmp) {
        const _Math = Math;
        num = Math.min(_undefined2.get(), 0);
      }
      if (tmp) {
        value = c3;
      } else {
        value = _undefined3.get();
      }
      const items = [{ translateY: _undefined4(num, [-1, 0], [100, 0]) }];
      ({ translateY: _undefined4(num, [-1, 0], [100, 0]) });
      const tmp7 = c6;
      if (tmp7) {
        obj3 = { marginTop: value, transform: items };
        const obj2 = { marginTop: value, transform: items };
      } else {
        obj3 = { top: value, transform: items };
      }
      return obj3;
    }
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  MediaKeyboardAccessoriesContainerTsx1.__closure = items3;
  MediaKeyboardAccessoriesContainerTsx1.__workletHash = 1441834817653;
  MediaKeyboardAccessoriesContainerTsx1.__initData = tmp8;
  const animatedStyle = useAnimatedStyle(MediaKeyboardAccessoriesContainerTsx1);
  const items4 = [NativeMenuStore];
  const tmp3Result = tmp3(sharedValue[7]);
  const stateFromStores = tmp3Result.useStateFromStores(items4, () => open.isOpen());
  let str;
  const View = require("module_1652").View;
  const tmp18 = jsx;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  let obj2 = { importantForAccessibility: str, style: items5, onLayout: callback, pointerEvents: "box-none", children };
  items5 = [memo, animatedStyle];
  return tmp18(View, obj2);
};
