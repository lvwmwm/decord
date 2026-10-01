// Module ID: 6576
// Function ID: 6577
// Name: Sheet/BottomSheetBackdrop
// Dependencies: [19, 21, 4836, 6045, 6073, 4566, 5267, 2]

// Module 6576 (Sheet/BottomSheetBackdrop)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flex: 1 } });
let closure_5 = { code: "function BottomSheetBackdropNativeTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}" };
let closure_6 = { code: "function BottomSheetBackdropNativeTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity}=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};}" };
const memoResult = react.memo((animatedIndex) => {
  let callback;
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
  let animatedStyle;
  const tmp = str();
  const container = tmp;
  let obj = animatedIndex(num[3]);
  const bottomSheet = obj.useBottomSheet();
  const snapToIndex = bottomSheet.snapToIndex;
  const close = bottomSheet.close;
  let items = [snapToIndex, close, num3, str, onPress];
  const onDismiss = num2.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    if ("close" === str) {
      close();
    } else if ("collapse" === str) {
      snapToIndex(num3);
    } else if (typeof str === "number") {
      snapToIndex(str);
    }
  }, items);
  const Gesture = animatedIndex(num[4]).Gesture;
  const TapResult = Gesture.Tap();
  const tmp2 = animatedIndex;
  const tmp3 = num;
  class I {
    constructor() {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)();
    }
  }
  let obj2 = { runOnJS: animatedIndex(num[5]).runOnJS, handleOnPress: onDismiss };
  I.__closure = obj2;
  I.__workletHash = 3995467602852;
  I.__initData = onPress;
  const onEndResult = TapResult.onEnd(I);
  const obj4 = animatedIndex(num[5]);
  class S {
    constructor() {
      let items;
      let items1;
      let obj2;
      const obj = { opacity: obj2.interpolate(animatedIndex.get(), items, items1) };
      items = [-1, num3, num2];
      items1 = [0, 0, num];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  S.__closure = { interpolate: animatedIndex(num[5]).interpolate, animatedIndex, disappearsOnIndex: num3, appearsOnIndex: num2, opacity: num };
  S.__workletHash = 1140766381376;
  S.__initData = style;
  ({ interpolate: animatedIndex(num[5]).interpolate, animatedIndex, disappearsOnIndex: num3, appearsOnIndex: num2, opacity: num });
  animatedStyle = obj4.useAnimatedStyle(S);
  let items1 = [tmp.container, style, animatedStyle];
  const memo = num2.useMemo(() => {
    const items = [container.container, style, animatedStyle];
    return items;
  }, items1);
  const tmp10 = num3(animatedIndex(num[6]).Backdrop, { blur: "none", style: memo, onDismiss, "aria-hidden": true });
  let tmp9Result = tmp10;
  const tmp9 = num3;
  if ("none" !== str) {
    const obj5 = { gesture: onEndResult, children: tmp10 };
    tmp9Result = tmp9(tmp2(tmp3[4]).GestureDetector, obj5);
  }
  return tmp9Result;
});
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetBackdrop.native.tsx");

export const BottomSheetBackdrop = memoResult;
