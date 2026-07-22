// Module ID: 8776
// Function ID: 69348
// Name: PremiumGiftBackgroundAnimation
// Dependencies: []
// Exports: default

// Module 8776 (PremiumGiftBackgroundAnimation)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: {}, consistentHeight: { height: 300 }, animation: { isNewBackTitleImplementation: false, usesHeaderFlexboxImplementation: null, usesNewAndroidHeaderHeightImplementation: 0 }, baseAnimation: { <string:765737181>: 40, <string:1382441379>: 40 }, lottie: { height: 275 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundAnimation.android.tsx");

export default function PremiumGiftBackgroundAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  const arg1 = giftStyle;
  let consistentHeight = giftStyle.withConsistentHeight;
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => first1.useReducedMotion);
  const importDefault = stateFromStores;
  const ref = React.useRef(null);
  const dependencyMap = ref;
  const ref1 = React.useRef(null);
  let callback = ref1;
  const tmp5 = callback(React.useState(arg1(dependencyMap[7]).AnimationState.ACTION), 2);
  const first = tmp5[0];
  const React = first;
  let closure_5 = tmp5[1];
  const tmp7 = callback(React.useState(undefined), 2);
  const first1 = tmp7[0];
  closure_6 = first1;
  let closure_7 = tmp7[1];
  const tmp9 = callback(React.useState(undefined), 2);
  const first2 = tmp9[0];
  const callback2 = tmp9[1];
  const tmp11 = callback(React.useState(false), 2);
  const first3 = tmp11[0];
  let closure_11 = tmp11[1];
  const items1 = [giftStyle];
  const items2 = [giftStyle];
  const memo = React.useMemo(() => giftStyle(ref[8]).getGiftAnimationData(giftStyle, giftStyle(ref[7]).AnimationState.ACTION), items1);
  const memo1 = React.useMemo(() => giftStyle(ref[8]).getGiftAnimationData(giftStyle, giftStyle(ref[7]).AnimationState.LOOP), items2);
  let obj1 = arg1(dependencyMap[8]);
  const lottieType = obj1.getLottieType(giftStyle);
  const items3 = [first2, first1, giftStyle, first];
  const memo2 = React.useMemo(() => {
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
  callback = React.useCallback((arg0) => {
    if (first3) {
      callback4(false);
    } else {
      if (!tmp4) {
        callback3(giftStyle(ref[7]).AnimationState.ACTION);
        callback(giftStyle(ref[7]).AnimationState.LOOP);
      }
      const tmp4 = first === giftStyle(ref[7]).AnimationState.LOOP || arg0;
    }
  }, items4);
  const effect = React.useEffect(() => {
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
  const effect1 = React.useEffect(() => {
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
  const tmp23 = importDefault(dependencyMap[9]);
  items8[2] = lottieType === arg1(dependencyMap[8]).LottieType.LOTTIE && tmp.lottie;
  obj1 = {};
  let num = 0;
  if (first1 === giftStyle) {
    num = 0;
    if (first !== arg1(dependencyMap[7]).AnimationState.LOOP) {
      num = 1;
    }
  }
  obj1.opacity = num;
  items8[3] = obj1;
  obj.style = items8;
  obj.hardwareAccelerationAndroid = lottieType === arg1(dependencyMap[8]).LottieType.LOTTIE;
  obj.ref = ref;
  obj.source = memo;
  obj.autoPlay = !stateFromStores;
  obj.onAnimationFinish = callback;
  obj.loop = false;
  const items9 = [tmp22(tmp23, obj), ];
  const obj2 = {};
  const items10 = [tmp.animation, , ];
  const tmp24 = lottieType === arg1(dependencyMap[8]).LottieType.LOTTIE && tmp.lottie;
  const tmp28 = closure_7;
  const tmp29 = importDefault(dependencyMap[9]);
  items10[1] = lottieType === arg1(dependencyMap[8]).LottieType.LOTTIE && tmp.lottie;
  const obj3 = {};
  let num2 = 0;
  if (first1 === giftStyle) {
    num2 = 0;
    if (first === arg1(dependencyMap[7]).AnimationState.LOOP) {
      num2 = 1;
    }
  }
  obj3.opacity = num2;
  items10[2] = obj3;
  obj2.style = items10;
  obj2.hardwareAccelerationAndroid = lottieType === arg1(dependencyMap[8]).LottieType.LOTTIE;
  obj2.ref = ref1;
  obj2.source = memo1;
  let tmp33 = !stateFromStores;
  if (tmp33) {
    tmp33 = first === arg1(dependencyMap[7]).AnimationState.LOOP;
  }
  obj2.autoPlay = tmp33;
  obj2.loop = true;
  items9[1] = tmp28(tmp29, obj2);
  obj.children = items9;
  return tmp20(tmp21, obj);
};
