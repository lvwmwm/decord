// Module ID: 5447
// Function ID: 46576
// Name: BottomSheetBackdrop
// Dependencies: [31, 33, 4130, 5189, 5217, 3991, 4531, 2]

// Module 5447 (BottomSheetBackdrop)
import importAllResult from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 } });
let closure_5 = { code: "function BottomSheetBackdropNativeTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}" };
let closure_6 = { code: "function BottomSheetBackdropNativeTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity}=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};}" };
const memoResult = importAllResult.memo((animatedIndex) => {
  animatedIndex = animatedIndex.animatedIndex;
  let num = animatedIndex.opacity;
  if (num === undefined) {
    num = 1;
  }
  let num2 = animatedIndex.appearsOnIndex;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = animatedIndex.disappearsOnIndex;
  if (num3 === undefined) {
    num3 = -1;
  }
  let str = animatedIndex.pressBehavior;
  if (str === undefined) {
    str = "close";
  }
  const onPress = animatedIndex.onPress;
  const style = animatedIndex.style;
  let c7;
  let snapToIndex;
  let close;
  let callback;
  let animatedStyle;
  const tmp = str();
  c7 = tmp;
  let obj = animatedIndex(num[3]);
  const bottomSheet = obj.useBottomSheet();
  snapToIndex = bottomSheet.snapToIndex;
  close = bottomSheet.close;
  let items = [snapToIndex, close, num3, str, onPress];
  callback = num2.useCallback(() => {
    if (null != onPress) {
      onPress();
    }
    if ("close" === str) {
      close();
    } else if ("collapse" === "collapse") {
      snapToIndex(num3);
    } else if ("number" === typeof str) {
      snapToIndex(str);
    }
  }, items);
  const Gesture = animatedIndex(num[4]).Gesture;
  class I {
    constructor() {
      obj = animatedIndex(c1[5]);
      tmp = obj.runOnJS(useCallback)();
      return;
    }
  }
  obj = { runOnJS: animatedIndex(num[5]).runOnJS, handleOnPress: callback };
  I.__closure = obj;
  I.__workletHash = 3995467602852;
  I.__initData = onPress;
  const TapResult = Gesture.Tap();
  const onEndResult = Gesture.Tap().onEnd(I);
  class S {
    constructor() {
      obj = {};
      obj2 = animatedIndex(c1[5]);
      items = [, , ];
      items[0] = -1;
      items[1] = c3;
      items[2] = c2;
      items1 = [0, 0];
      items1[2] = c1;
      obj.opacity = obj2.interpolate(animatedIndex.get(), items, items1);
      return obj;
    }
  }
  obj = { interpolate: animatedIndex(num[5]).interpolate, animatedIndex, disappearsOnIndex: num3, appearsOnIndex: num2, opacity: num };
  S.__closure = obj;
  S.__workletHash = 1140766381376;
  S.__initData = style;
  animatedStyle = animatedIndex(num[5]).useAnimatedStyle(S);
  let items1 = [tmp.container, style, animatedStyle];
  const memo = num2.useMemo(() => {
    const items = [_undefined.container, style, animatedStyle];
    return items;
  }, items1);
  const tmp7 = num3(animatedIndex(num[6]).Backdrop, { blur: "none", style: memo, onDismiss: callback, "aria-hidden": true });
  let tmp8 = tmp7;
  if ("none" !== str) {
    const obj1 = { gesture: onEndResult, children: tmp7 };
    tmp8 = num3(animatedIndex(num[4]).GestureDetector, obj1);
  }
  return tmp8;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Sheet/native/BottomSheetBackdrop.native.tsx");

export const BottomSheetBackdrop = memoResult;
