// Module ID: 13654
// Function ID: 13655
// Name: ConjurePublishRating
// Dependencies: [32, 19, 17, 5244, 21, 5243, 575, 1652, 5485, 5876, 5877, 10115, 10113, 7364, 13655, 504, 13254, 5866, 5489, 13656, 2118, 13656, 1113, 4079, 2]
// Exports: default

// Module 13654 (ConjurePublishRating)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import timing_timing from "timing/timing" /* 5485 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import spring_spring from "spring/spring" /* 5876 */;
import springPresets from "springPresets" /* 5877 */;
import ConjureRatingFeedbackSheet from "ConjureRatingFeedbackSheet" /* 13656 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function Star(rating) {
  let StarOutlineIcon;
  let closure_2;
  let obj4;
  let obj5;
  let picked;
  let reducedMotion;
  let tmp3Result;
  let tmp7;
  let tmp8;
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
  let obj = rating(1652);
  sharedValue = obj.useSharedValue(1);
  let items = [tmp2, rating, reducedMotion, sharedValue];
  const effect = react.useEffect(() => {
    const tmp = closure_2 && !reducedMotion;
    if (tmp) {
      set = sharedValue.set;
      const withDelay = _mod1652.withDelay;
      const result = 30 * rating;
      _mod1652;
      const withSequence = _mod1652.withSequence;
      _mod1652;
      const obj = timing_timing;
      const withTimingResult = obj.withTiming(1.35, { duration: 140 });
      const obj2 = spring_spring;
      const result1 = set(withDelay(result, withSequence(withTimingResult, obj2.withSpring(1, springPresets.springUnclampedBounce))));
    }
  }, items);
  let obj2 = rating(1652);
  const items1 = [closure_10, sharedValue];
  let c0;
  [tmp7, tmp8] = items1;
  class ConjurePublishRatingTsx1 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items2 = [tmp8];
  ConjurePublishRatingTsx1.__closure = items2;
  ConjurePublishRatingTsx1.__workletHash = 4902118440263;
  ConjurePublishRatingTsx1.__initData = tmp7;
  const animatedStyle = obj2.useAnimatedStyle(ConjurePublishRatingTsx1);
  if (tmp2) {
    StarOutlineIcon = tmp3(10115).StarIcon;
  } else {
    StarOutlineIcon = tmp3(10113).StarOutlineIcon;
  }
  const obj3 = { style: tmp.star, accessibilityRole: "button", accessibilityLabel: tmp3Result.conjurePublishRatingOptionLabel(rating), disabled: null != picked, hitSlop: reducedMotion(575).space.PX_8, onPress, children: closure_7(View, obj4) };
  const PressableOpacity = tmp3(7364).PressableOpacity;
  tmp3Result = rating(13655);
  obj4 = { style: animatedStyle, children: closure_7(StarOutlineIcon, obj5) };
  View = reducedMotion(1652).View;
  const colors = reducedMotion(575).colors;
  obj5 = { size: "sm", color: tmp2 ? colors.ICON_BRAND : colors.ICON_MUTED };
  return closure_7(PressableOpacity, obj3);
}
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
let closure_10 = { code: "(function ConjurePublishRatingTsx1(){let[scale]=this.__closure;return{transform:[{scale:scale.get()}]};})" };
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishRating.tsx");

export default function ConjurePublishRating(arg0) {
  let closure_4;
  let cta;
  let intl;
  let items2;
  let items3;
  let placement;
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
  ({ projectId, turnId, cta, status, placement } = arg0);
  let tmp = closure_9();
  let tmp2 = rating;
  let tmp3 = stateFromStores;
  let obj = rating(stateFromStores[14]);
  const conjurePublishRating = obj.useConjurePublishRating({ projectId, turnId, cta, status, placement });
  rating = conjurePublishRating.rating;
  const rate = conjurePublishRating.rate;
  const items = [AccessibilityStore];
  const obj2 = rating(stateFromStores[15]);
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
      const SparklesIcon = tmp2(tmp3[16]).SparklesIcon;
      items2 = [closure_7(SparklesIcon, obj4), ];
      const obj5 = { variant: "body-xs/medium", color: "text-muted", children: tmp2Result.conjurePublishRatingThanks(rating) };
      const Text2 = tmp2(tmp3[17]).Text;
      tmp2Result = tmp2(tmp3[14]);
      items2[1] = closure_7(Text2, obj5);
      obj6 = obj3;
    }
    return tmp9(View, obj6);
  }
  obj6 = { style: tmp.row, children: items3 };
  const obj7 = { variant: "body-xs/medium", color: "text-muted", children: intl.string(rate(tmp3[23]).mTV326) };
  const Text = tmp2(tmp3[17]).Text;
  intl = tmp2(tmp3[22]).intl;
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
            const tmp7 = asyncRequire(13656, dependencyMap.paths);
            openLazy(tmp7, ConjureRatingFeedbackSheet.CONJURE_RATING_FEEDBACK_SHEET_KEY, obj);
          }
        }
      };
      tmp3 = first;
      let tmp2 = Star;
      const tmp = closure_1_7;
      if (first == null) {
        tmp3 = closure_0;
      }
      return tmp(tmp2, obj, rating);
    })
  };
  prop = tmp2(tmp3[14]).CONJURE_PUBLISH_RATINGS;
  items3[1] = closure_7(View, obj8);
};
