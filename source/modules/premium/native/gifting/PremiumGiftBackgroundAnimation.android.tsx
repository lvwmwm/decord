// Module ID: 8822
// Function ID: 69604
// Name: PremiumGiftBackgroundAnimation
// Dependencies: [57, 31, 27, 4122, 33, 4130, 566, 7851, 8823, 5453, 2]
// Exports: default

// Module 8822 (PremiumGiftBackgroundAnimation)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "row" }, consistentHeight: { height: 300 }, animation: { maxWidth: 375, width: "100%", height: "auto" }, baseAnimation: { position: "absolute", bottom: 0 }, lottie: { height: 275 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundAnimation.android.tsx");

export default function PremiumGiftBackgroundAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  let consistentHeight = giftStyle.withConsistentHeight;
  const tmp = callback();
  let obj = giftStyle(ref[6]);
  const items = [first1];
  const stateFromStores = obj.useStateFromStores(items, () => first1.useReducedMotion);
  ref = first.useRef(null);
  const ref1 = first.useRef(null);
  const tmp5 = ref1(first.useState(giftStyle(ref[7]).AnimationState.ACTION), 2);
  first = tmp5[0];
  let closure_5 = tmp5[1];
  const tmp7 = ref1(first.useState(undefined), 2);
  first1 = tmp7[0];
  let closure_7 = tmp7[1];
  const tmp9 = ref1(first.useState(undefined), 2);
  const first2 = tmp9[0];
  callback = tmp9[1];
  const tmp11 = ref1(first.useState(false), 2);
  const first3 = tmp11[0];
  let closure_11 = tmp11[1];
  const items1 = [giftStyle];
  const items2 = [giftStyle];
  const memo = first.useMemo(() => giftStyle(ref[8]).getGiftAnimationData(giftStyle, giftStyle(ref[7]).AnimationState.ACTION), items1);
  const memo1 = first.useMemo(() => giftStyle(ref[8]).getGiftAnimationData(giftStyle, giftStyle(ref[7]).AnimationState.LOOP), items2);
  let obj1 = giftStyle(ref[8]);
  const lottieType = obj1.getLottieType(giftStyle);
  const items3 = [first2, first1, giftStyle, first];
  const memo2 = first.useMemo(() => {
    if (first1 !== giftStyle) {
      callback2(giftStyle);
      let tmp8 = first !== giftStyle(ref[7]).AnimationState.LOOP;
      if (tmp8) {
        tmp8 = null != first2;
      }
      closure_11(tmp8);
      callback(giftStyle(ref[7]).AnimationState.ACTION);
      const tmp4 = closure_11;
    }
  }, items3);
  const items4 = [first, first3];
  const items5 = [first];
  callback = first.useCallback((arg0) => {
    if (first3) {
      callback4(false);
    } else {
      if (!tmp4) {
        callback3(giftStyle(ref[7]).AnimationState.ACTION);
        callback(giftStyle(ref[7]).AnimationState.LOOP);
      }
      tmp4 = first === giftStyle(ref[7]).AnimationState.LOOP || arg0;
    }
  }, items4);
  const effect = first.useEffect(() => {
    if (first === giftStyle(ref[7]).AnimationState.LOOP) {
      const current2 = ref.current;
      if (null != current2) {
        current2.reset();
      }
    } else {
      const current = ref1.current;
      if (null != current) {
        current.reset();
      }
    }
  }, items5);
  const items6 = [stateFromStores];
  const effect1 = first.useEffect(() => {
    if (stateFromStores) {
      const current = ref.current;
      if (null != current) {
        current.reset();
      }
    }
  }, items6);
  obj = {};
  const items7 = [tmp.container, ];
  if (consistentHeight) {
    consistentHeight = tmp.consistentHeight;
  }
  items7[1] = consistentHeight;
  obj.style = items7;
  obj = {};
  const items8 = [, , , ];
  ({ baseAnimation: arr9[0], animation: arr9[1] } = tmp);
  const tmp20 = first2;
  const tmp21 = closure_5;
  const tmp22 = closure_7;
  const tmp23 = stateFromStores(ref[9]);
  items8[2] = lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  obj1 = {};
  let num = 0;
  if (first1 === giftStyle) {
    num = 0;
    if (first !== giftStyle(ref[7]).AnimationState.LOOP) {
      num = 1;
    }
  }
  obj1.opacity = num;
  items8[3] = obj1;
  obj.style = items8;
  obj.hardwareAccelerationAndroid = lottieType === giftStyle(ref[8]).LottieType.LOTTIE;
  obj.ref = ref;
  obj.source = memo;
  obj.autoPlay = !stateFromStores;
  obj.onAnimationFinish = callback;
  obj.loop = false;
  const items9 = [tmp22(tmp23, obj), ];
  const obj2 = {};
  const items10 = [tmp.animation, , ];
  const tmp24 = lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  const tmp28 = closure_7;
  const tmp29 = stateFromStores(ref[9]);
  items10[1] = lottieType === giftStyle(ref[8]).LottieType.LOTTIE && tmp.lottie;
  const obj3 = {};
  let num2 = 0;
  if (first1 === giftStyle) {
    num2 = 0;
    if (first === giftStyle(ref[7]).AnimationState.LOOP) {
      num2 = 1;
    }
  }
  obj3.opacity = num2;
  items10[2] = obj3;
  obj2.style = items10;
  obj2.hardwareAccelerationAndroid = lottieType === giftStyle(ref[8]).LottieType.LOTTIE;
  obj2.ref = ref1;
  obj2.source = memo1;
  let tmp33 = !stateFromStores;
  if (tmp33) {
    tmp33 = first === giftStyle(ref[7]).AnimationState.LOOP;
  }
  obj2.autoPlay = tmp33;
  obj2.loop = true;
  items9[1] = tmp28(tmp29, obj2);
  obj.children = items9;
  return tmp20(tmp21, obj);
};
