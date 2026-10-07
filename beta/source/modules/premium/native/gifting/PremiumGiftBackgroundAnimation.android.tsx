// Module ID: 10562
// Function ID: 10563
// Name: PremiumGiftBackgroundAnimation
// Dependencies: [32, 19, 17, 4879, 21, 4890, 504, 7751, 10563, 5920, 2]
// Exports: default

// Module 10562 (PremiumGiftBackgroundAnimation)
import react_native from "react-native" /* 17 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7751 */;
import GiftAnimationData from "GiftAnimationData" /* 10563 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "row" }, consistentHeight: { height: 300 }, animation: { maxWidth: 375, width: "100%", height: "auto" }, baseAnimation: { position: "absolute", bottom: 0 }, lottie: { height: 275 } });
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundAnimation.android.tsx");

export default function PremiumGiftBackgroundAnimation(giftStyle) {
  let items9;
  giftStyle = giftStyle.giftStyle;
  let consistentHeight = giftStyle.withConsistentHeight;
  let ref;
  let first;
  let first1;
  closure_9 = undefined;
  let tmp = closure_9();
  let obj = giftStyle(ref[6]);
  const items = [first1];
  const stateFromStores = obj.useStateFromStores(items, () => first1.useReducedMotion);
  ref = first.useRef(null);
  const ref1 = first.useRef(null);
  const tmp7 = ref1(first.useState(giftStyle(ref[7]).AnimationState.ACTION), 2);
  first = tmp7[0];
  let closure_5 = tmp7[1];
  const tmp9 = ref1(first.useState(undefined), 2);
  first1 = tmp9[0];
  let closure_7 = tmp9[1];
  const tmp11 = ref1(first.useState(undefined), 2);
  const first2 = tmp11[0];
  closure_9 = tmp11[1];
  const tmp13 = ref1(first.useState(false), 2);
  const first3 = tmp13[0];
  let closure_11 = tmp13[1];
  const items1 = [giftStyle];
  const items2 = [giftStyle];
  const memo = first.useMemo(() => {
    const obj = GiftAnimationData;
    return obj.getGiftAnimationData(giftStyle, PremiumGiftingUtils.AnimationState.ACTION);
  }, items1);
  const memo1 = first.useMemo(() => {
    const obj = GiftAnimationData;
    return obj.getGiftAnimationData(giftStyle, PremiumGiftingUtils.AnimationState.LOOP);
  }, items2);
  const obj2 = giftStyle(ref[8]);
  const lottieType = obj2.getLottieType(giftStyle);
  const items3 = [first2, first1, giftStyle, first];
  const memo2 = first.useMemo(() => {
    if (first1 !== giftStyle) {
      closure_7(tmp);
      let tmp8 = first !== PremiumGiftingUtils.AnimationState.LOOP;
      const tmp4 = closure_11;
      const tmp6 = require;
      if (tmp8) {
        tmp8 = null != first2;
      }
      tmp4(tmp8);
      closure_5(tmp6(7751).AnimationState.ACTION);
    }
  }, items3);
  const items4 = [first, first3];
  const items5 = [first];
  const callback = first.useCallback((arg0) => {
    const tmp = first3;
    if (tmp) {
      closure_11(false);
    } else {
      const tmp5 = first === PremiumGiftingUtils.AnimationState.LOOP || arg0;
      if (!tmp5) {
        closure_9(PremiumGiftingUtils.AnimationState.ACTION);
        closure_5(PremiumGiftingUtils.AnimationState.LOOP);
      }
    }
  }, items4);
  const effect = first.useEffect(() => {
    if (first === PremiumGiftingUtils.AnimationState.LOOP) {
      const current2 = ref.current;
      if (current2 != null) {
        current2.reset();
      }
    } else {
      const current = ref1.current;
      if (current != null) {
        current.reset();
      }
    }
  }, items5);
  const items6 = [stateFromStores];
  const effect1 = first.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.reset();
      }
    }
  }, items6);
  const items7 = [tmp.container, ];
  const tmp22 = first2;
  const tmp23 = closure_5;
  if (consistentHeight) {
    consistentHeight = tmp.consistentHeight;
  }
  const obj3 = { style: items7, children: items9 };
  items7[1] = consistentHeight;
  const items8 = [, , , ];
  ({ baseAnimation: arr9[0], animation: arr9[1] } = tmp);
  const tmp26 = stateFromStores(ref[9]);
  items8[2] = lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  let num = 0;
  lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  const tmp25 = stateFromStores;
  if (first1 === giftStyle) {
    num = 0;
    if (first !== giftStyle(ref[7]).AnimationState.LOOP) {
      num = 1;
    }
  }
  items8[3] = { opacity: num };
  items9 = [, ];
  const obj4 = { style: items8, hardwareAccelerationAndroid: lottieType === giftStyle(ref[8]).LottieType.LOTTIE, ref, source: memo, autoPlay: !stateFromStores, onAnimationFinish: callback, loop: false };
  items9[0] = closure_7(tmp26, obj4);
  const items10 = [tmp.animation, , ];
  const tmp25Result = tmp25(ref[9]);
  items10[1] = lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  let num2 = 0;
  lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  if (first1 === giftStyle) {
    num2 = 0;
    if (first === giftStyle(ref[7]).AnimationState.LOOP) {
      num2 = 1;
    }
  }
  items10[2] = { opacity: num2 };
  const obj5 = { style: items10, hardwareAccelerationAndroid: lottieType === giftStyle(ref[8]).LottieType.LOTTIE, ref: ref1, source: memo1, autoPlay: !stateFromStores && first === giftStyle(ref[7]).AnimationState.LOOP, loop: true };
  !stateFromStores && first === giftStyle(ref[7]).AnimationState.LOOP;
  items9[1] = closure_7(tmp25Result, obj5);
  return tmp22(tmp23, obj3);
};
