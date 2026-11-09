// Module ID: 5725
// Function ID: 5726
// Name: Sheet/BottomSheetBackdrop
// Dependencies: [19, 21, 5140, 5392, 5420, 1705, 1652, 5726, 2]

// Module 5725 (Sheet/BottomSheetBackdrop)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import BottomSheetModal from "BottomSheetModal" /* 5392 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5420 */;
import Backdrop from "Backdrop" /* 5726 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flex: 1 } });
let closure_5 = { code: "(function BottomSheetBackdropNativeTsx1(){let[scheduleOnRN,handleOnPress]=this.__closure;scheduleOnRN(handleOnPress);})" };
let closure_6 = { code: "(function BottomSheetBackdropNativeTsx2(){let[interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity]=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};})" };
const memoResult = react.memo(function BottomSheetBackdropComponent(opacity) {
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp7;
  let tmp8;
  let tmp9;
  let num = opacity.opacity;
  const animatedIndex = opacity.animatedIndex;
  if (num === undefined) {
    num = 1;
  }
  let num2 = opacity.appearsOnIndex;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = opacity.disappearsOnIndex;
  if (num3 === undefined) {
    num3 = -1;
  }
  let str = opacity.pressBehavior;
  if (str === undefined) {
    str = "close";
  }
  const onPress = opacity.onPress;
  const style = opacity.style;
  closure_4 = undefined;
  let animatedStyle;
  const tmp = closure_4();
  closure_4 = tmp;
  let obj = BottomSheetModal;
  const bottomSheet = obj.useBottomSheet();
  const snapToIndex = bottomSheet.snapToIndex;
  const close = bottomSheet.close;
  let items = [snapToIndex, close, num3, str, onPress];
  const callback = react.useCallback(() => {
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
  const Gesture = LegacyBaseButton.Gesture;
  let items1 = [closure_5, , ];
  const onEnd = Gesture.Tap().onEnd;
  Gesture.Tap();
  items1[1] = _mod1705.scheduleOnRN;
  items1[2] = callback;
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items1;
  const obj2 = react;
  class BottomSheetBackdropNativeTsx1 {
    constructor() {
      _undefined(c1);
    }
  }
  const items2 = [tmp8, tmp9];
  BottomSheetBackdropNativeTsx1.__closure = items2;
  BottomSheetBackdropNativeTsx1.__workletHash = 13019722920668;
  BottomSheetBackdropNativeTsx1.__initData = tmp7;
  const items3 = [closure_6, , , , , ];
  const onEndResult = onEnd(BottomSheetBackdropNativeTsx1);
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items3[1] = _mod1652.interpolate;
  items3[2] = animatedIndex;
  items3[3] = num3;
  items3[4] = num2;
  items3[5] = num;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items3;
  class BottomSheetBackdropNativeTsx2 {
    constructor() {
      let items;
      let items1;
      const obj = { opacity: _undefined(_undefined2.get(), items, items1) };
      items = [-1, c2, c3];
      items1 = [0, 0, c4];
      return obj;
    }
  }
  const items4 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  BottomSheetBackdropNativeTsx2.__closure = items4;
  BottomSheetBackdropNativeTsx2.__workletHash = 16206177452089;
  BottomSheetBackdropNativeTsx2.__initData = tmp12;
  animatedStyle = useAnimatedStyle(BottomSheetBackdropNativeTsx2);
  const items5 = [tmp.container, style, animatedStyle];
  const memo = obj2.useMemo(() => {
    const items = [container.container, style, animatedStyle];
    return items;
  }, items5);
  const tmp21 = jsx(Backdrop.Backdrop, { blur: "none", style: memo, onDismiss: callback, "aria-hidden": true });
  let tmp20Result = tmp21;
  const tmp20 = jsx;
  if ("none" !== str) {
    const obj3 = { gesture: onEndResult, children: tmp21 };
    tmp20Result = tmp20(tmp2(5420).GestureDetector, obj3);
  }
  return tmp20Result;
});
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetBackdrop.native.tsx");

export const BottomSheetBackdrop = memoResult;
