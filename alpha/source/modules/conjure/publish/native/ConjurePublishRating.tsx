// Module ID: 12530
// Function ID: 12531
// Name: ConjurePublishRating
// Dependencies: [32, 19, 17, 5005, 21, 5004, 587, 558, 576, 5085, 5242, 5283, 5284, 9983, 9981, 12531, 6944, 504, 11832, 5270, 5246, 12532, 1999, 12532, 1125, 3863, 2]
// Exports: default

// Module 12530 (ConjurePublishRating)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5085 */;
import timing from "timing" /* 5242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import spring from "spring" /* 5283 */;
import springPresets from "springPresets" /* 5284 */;
import ConjureRatingFeedbackSheet from "ConjureRatingFeedbackSheet" /* 12532 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let react = react_mod;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, stars: { flexDirection: "row" }, star: obj3, thanks: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
const __initData = { code: "function ConjurePublishRatingTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
const __initData2 = { code: "function ConjurePublishRatingTsx2(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function Star(rating) {
  let closure_2;
  let picked;
  let reducedMotion;
  let tmp = rating;
  let obj = rating(576);
  const cResult = obj.c(20);
  rating = rating.rating;
  ({ picked, reducedMotion } = rating);
  const onPress = rating.onPress;
  const tmp4 = closure_9();
  dependencyMap = tmp5;
  const tmpResult = tmp(5085);
  const sharedValue = tmpResult.useSharedValue(1);
  if (cResult[0] === (null != picked && rating <= picked)) {
    if (cResult[1] === rating) {
      if (cResult[2] === reducedMotion) {
        let tmp7;
        let tmp8;
        let StarOutlineIcon;
        let tmp13;
        let ICON_MUTED;
        let tmp17;
        if (cResult[3] === sharedValue) {
          tmp7 = cResult[4];
          tmp8 = cResult[5];
        }
        const effect = react.useEffect(tmp7, tmp8);
        const tmpResult3 = tmp(5085);
        class I {
          constructor() {
            let items;
            const obj = { transform: items };
            items = [{ scale: sharedValue.get() }];
            ({ scale: sharedValue.get() });
            return obj;
          }
        }
        let obj2 = { scale: sharedValue };
        I.__closure = obj2;
        I.__workletHash = 8453054615454;
        I.__initData = __initData;
        const animatedStyle = tmpResult3.useAnimatedStyle(I);
        if (null != picked && rating <= picked) {
          StarOutlineIcon = tmp(9983).StarIcon;
        } else {
          StarOutlineIcon = tmp(9981).StarOutlineIcon;
        }
        const star = tmp4.star;
        if (cResult[6] !== rating) {
          const tmpResult4 = tmp(12531);
          let result = tmpResult4.conjurePublishRatingOptionLabel(rating);
          cResult[6] = rating;
          class I {
            constructor() {
              let items;
              const obj = { transform: items };
              items = [{ scale: sharedValue.get() }];
              ({ scale: sharedValue.get() });
              return obj;
            }
          }
          cResult[7] = result;
          tmp13 = result;
        } else {
          tmp13 = cResult[7];
        }
        const colors = reducedMotion(587).colors;
        if (null != picked && rating <= picked) {
          ICON_MUTED = colors.ICON_BRAND;
          tmp17 = tmp16;
        } else {
          ICON_MUTED = colors.ICON_MUTED;
          tmp17 = tmp16;
        }
        if (cResult[8] === StarOutlineIcon) {
          let tmp18;
          if (cResult[9] === ICON_MUTED) {
            tmp18 = cResult[10];
          }
          if (cResult[11] === animatedStyle) {
            let tmp21;
            if (cResult[12] === tmp18) {
              tmp21 = cResult[13];
            }
            if (cResult[14] === onPress) {
              if (cResult[15] === tmp4.star) {
                if (cResult[16] === tmp13) {
                  if (cResult[17] === null != picked) {
                    let tmp24;
                    if (cResult[18] === tmp21) {
                      tmp24 = cResult[19];
                    }
                    return tmp24;
                  }
                }
              }
            }
            const obj3 = { style: null, accessibilityRole: "button", accessibilityLabel: tmp13, disabled: null != picked, hitSlop: tmp17(587).space.PX_8, onPress, children: tmp21 };
            class I {
              constructor() {
                let items;
                const obj = { transform: items };
                items = [{ scale: sharedValue.get() }];
                ({ scale: sharedValue.get() });
                return obj;
              }
            }
            const PressableOpacity = tmp(6944).PressableOpacity;
            const tmp26 = closure_7(PressableOpacity, obj3);
            cResult[14] = onPress;
            cResult[15] = tmp4.star;
            cResult[16] = tmp13;
            cResult[17] = null != picked;
            cResult[18] = tmp21;
            cResult[19] = tmp26;
            tmp24 = tmp26;
          }
          const obj4 = { style: null, children: tmp18 };
          class I {
            constructor() {
              let items;
              const obj = { transform: items };
              items = [{ scale: sharedValue.get() }];
              ({ scale: sharedValue.get() });
              return obj;
            }
          }
          const tmp23 = closure_7(tmp17(5085).View, obj4);
          cResult[11] = animatedStyle;
          cResult[12] = tmp18;
          cResult[13] = tmp23;
          tmp21 = tmp23;
        }
        const obj5 = { size: "sm", color: ICON_MUTED };
        const tmp20 = closure_7(StarOutlineIcon, obj5);
        cResult[8] = StarOutlineIcon;
        cResult[9] = ICON_MUTED;
        cResult[10] = tmp20;
        tmp18 = tmp20;
      }
    }
  }
  const fn = function n() {
    const tmp = closure_2 && !reducedMotion;
    if (tmp) {
      set = sharedValue.set;
      const withDelay = ReanimatedRexport.withDelay;
      const result = 30 * rating;
      ReanimatedRexport;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj = timing;
      const withTimingResult = obj.withTiming(1.35, { duration: 140 });
      const obj2 = spring;
      const result1 = set(withDelay(result, withSequence(withTimingResult, obj2.withSpring(1, springPresets.springUnclampedBounce))));
    }
  };
  let items = [tmp5, rating, reducedMotion, sharedValue];
  cResult[0] = null != picked && rating <= picked;
  cResult[1] = rating;
  cResult[2] = reducedMotion;
  cResult[3] = sharedValue;
  cResult[4] = fn;
  cResult[5] = items;
  tmp8 = items;
  tmp7 = fn;
}) : (function Star(rating) {
  let StarOutlineIcon;
  let closure_2;
  let obj4;
  let obj5;
  let picked;
  let reducedMotion;
  let tmp3Result;
  rating = rating.rating;
  ({ picked, reducedMotion } = rating);
  dependencyMap = undefined;
  let sharedValue;
  const onPress = rating.onPress;
  let tmp2 = null != picked;
  let tmp = closure_9();
  if (tmp2) {
    tmp2 = rating <= picked;
  }
  dependencyMap = tmp2;
  let obj = rating(5085);
  sharedValue = obj.useSharedValue(1);
  let items = [tmp2, rating, reducedMotion, sharedValue];
  const effect = react.useEffect(() => {
    const tmp = closure_2 && !reducedMotion;
    if (tmp) {
      set = sharedValue.set;
      const withDelay = ReanimatedRexport.withDelay;
      const result = 30 * rating;
      ReanimatedRexport;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj = timing;
      const withTimingResult = obj.withTiming(1.35, { duration: 140 });
      const obj2 = spring;
      const result1 = set(withDelay(result, withSequence(withTimingResult, obj2.withSpring(1, springPresets.springUnclampedBounce))));
    }
  }, items);
  let obj2 = rating(5085);
  const fn = function f() {
    let items;
    const obj = { transform: items };
    items = [{ scale: sharedValue.get() }];
    ({ scale: sharedValue.get() });
    return obj;
  };
  fn.__closure = { scale: sharedValue };
  fn.__workletHash = 10098165815389;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (tmp2) {
    StarOutlineIcon = tmp3(9983).StarIcon;
  } else {
    StarOutlineIcon = tmp3(9981).StarOutlineIcon;
  }
  const obj3 = { style: tmp.star, accessibilityRole: "button", accessibilityLabel: tmp3Result.conjurePublishRatingOptionLabel(rating), disabled: null != picked, hitSlop: reducedMotion(587).space.PX_8, onPress, children: closure_7(View, obj4) };
  const PressableOpacity = tmp3(6944).PressableOpacity;
  tmp3Result = rating(12531);
  obj4 = { style: animatedStyle, children: closure_7(StarOutlineIcon, obj5) };
  View = reducedMotion(5085).View;
  const colors = reducedMotion(587).colors;
  obj5 = { size: "sm", color: tmp2 ? colors.ICON_BRAND : colors.ICON_MUTED };
  return closure_7(PressableOpacity, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishRating.tsx");

export default function ConjurePublishRating(arg0) {
  let closure_4;
  let cta;
  let intl;
  let items2;
  let items3;
  let projectId;
  let prop;
  let status;
  let tmp2Result;
  let turnId;
  let useReducedMotion;
  let rating;
  let stateFromStores;
  let first;
  react = undefined;
  ({ projectId, turnId, cta, status } = arg0);
  let tmp = closure_9();
  let tmp2 = rating;
  let tmp3 = stateFromStores;
  let obj = rating(stateFromStores[15]);
  const conjurePublishRating = obj.useConjurePublishRating({ projectId, turnId, cta, status });
  rating = conjurePublishRating.rating;
  const rate = conjurePublishRating.rate;
  const items = [AccessibilityStore];
  const obj2 = rating(stateFromStores[17]);
  stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = first(react.useState(null), 2);
  first = tmp6[0];
  react = tmp6[1];
  const items1 = [first, stateFromStores];
  const effect = react.useEffect(() => {
    if (null != first) {
      let num = 420;
      const _setTimeout = setTimeout;
      if (stateFromStores) {
        num = 0;
      }
      let closure_0 = _setTimeout(() => closure_1_4(null), num);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  if (null != rating) {
    let obj6;
    if (null == first) {
      const obj3 = { style: tmp.thanks, accessibilityLiveRegion: "polite", children: items2 };
      const obj4 = { size: "xs", color: rate(tmp3[6]).colors.ICON_BRAND };
      const SparklesIcon = tmp2(tmp3[18]).SparklesIcon;
      items2 = [closure_7(SparklesIcon, obj4), ];
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: tmp2Result.conjurePublishRatingThanks(rating) };
      const Text2 = tmp2(tmp3[19]).Text;
      tmp2Result = tmp2(tmp3[15]);
      items2[1] = closure_7(Text2, obj5);
      obj6 = obj3;
    }
    return tmp9(View, obj6);
  }
  obj6 = { style: tmp.row, children: items3 };
  const obj7 = { variant: "text-xs/medium", color: "text-muted", children: intl.string(rate(tmp3[25]).mTV326) };
  const Text = tmp2(tmp3[19]).Text;
  intl = tmp2(tmp3[24]).intl;
  items3 = [closure_7(Text, obj7), ];
  const obj8 = {
    style: tmp.stars,
    children: prop.map((rating) => {
      let tmp3;
      let closure_0 = rating;
      let obj = {
        rating,
        picked: tmp3,
        reducedMotion: stateFromStores,
        onPress() {
          closure_4(rating);
          const tmp2 = rate(rating);
          if (null != tmp2) {
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            ActionSheetActionCreatorsDefault;
            const obj = { rating: tmp2 };
            const tmp7 = asyncRequire(12532, dependencyMap.paths);
            openLazy(tmp7, ConjureRatingFeedbackSheet.CONJURE_RATING_FEEDBACK_SHEET_KEY, obj);
          }
        }
      };
      tmp3 = first;
      let tmp2 = closure_1_12;
      const tmp = closure_1_7;
      if (first == null) {
        tmp3 = closure_0;
      }
      return tmp(tmp2, obj, rating);
    })
  };
  prop = tmp2(tmp3[15]).CONJURE_PUBLISH_RATINGS;
  items3[1] = closure_7(View, obj8);
};
