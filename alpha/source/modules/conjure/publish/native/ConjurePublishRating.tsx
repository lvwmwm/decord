// Module ID: 12735
// Function ID: 12736
// Name: ConjurePublishRating
// Dependencies: [32, 19, 17, 5010, 21, 5009, 575, 5090, 5249, 5632, 5633, 10042, 10040, 6974, 12736, 504, 12066, 5619, 5253, 12737, 1995, 12737, 1114, 3865, 2]
// Exports: default

// Module 12735 (ConjurePublishRating)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import spring from "spring" /* 5632 */;
import springPresets from "springPresets" /* 5633 */;
import ConjureRatingFeedbackSheet from "ConjureRatingFeedbackSheet" /* 12737 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
  let obj = rating(5090);
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
  let obj2 = rating(5090);
  const fn = function x() {
    let items;
    const obj = { transform: items };
    items = [{ scale: sharedValue.get() }];
    ({ scale: sharedValue.get() });
    return obj;
  };
  fn.__closure = { scale: sharedValue };
  fn.__workletHash = 8453054615454;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (tmp2) {
    StarOutlineIcon = tmp3(10042).StarIcon;
  } else {
    StarOutlineIcon = tmp3(10040).StarOutlineIcon;
  }
  const obj3 = { style: tmp.star, accessibilityRole: "button", accessibilityLabel: tmp3Result.conjurePublishRatingOptionLabel(rating), disabled: null != picked, hitSlop: reducedMotion(575).space.PX_8, onPress, children: closure_7(View, obj4) };
  const PressableOpacity = tmp3(6974).PressableOpacity;
  tmp3Result = rating(12736);
  obj4 = { style: animatedStyle, children: closure_7(StarOutlineIcon, obj5) };
  View = reducedMotion(5090).View;
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
const __initData = { code: "function ConjurePublishRatingTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
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
  let obj = rating(stateFromStores[14]);
  const conjurePublishRating = obj.useConjurePublishRating({ projectId, turnId, cta, status });
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
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: tmp2Result.conjurePublishRatingThanks(rating) };
      const Text2 = tmp2(tmp3[17]).Text;
      tmp2Result = tmp2(tmp3[14]);
      items2[1] = closure_7(Text2, obj5);
      obj6 = obj3;
    }
    return tmp9(View, obj6);
  }
  obj6 = { style: tmp.row, children: items3 };
  const obj7 = { variant: "text-xs/medium", color: "text-muted", children: intl.string(rate(tmp3[23]).mTV326) };
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
            const tmp7 = asyncRequire(12737, dependencyMap.paths);
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
