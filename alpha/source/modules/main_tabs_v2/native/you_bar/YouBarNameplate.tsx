// Module ID: 16626
// Function ID: 16627
// Name: YouBarNameplate
// Dependencies: [19, 5079, 15177, 21, 558, 576, 4778, 587, 15263, 504, 4810, 5374, 8991, 2]

// Module 16626 (YouBarNameplate)
import Fragment from "Fragment" /* 21 */;
import spring from "spring" /* 5374 */;
import YouBarConstants from "YouBarConstants" /* 15177 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const jsx = Fragment.jsx;
const __initData = { code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}" };
const __initData2 = { code: "function YouBarNameplateTsx2(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouBarNameplate(arg0) {
  let avatarSize;
  let barWidth;
  let closure_2;
  let isQuestRendered;
  let nameplate;
  let tmp7;
  let tmp8;
  let token;
  const tmp = isQuestRendered;
  let obj = isQuestRendered(576);
  const cResult = obj.c(16);
  ({ nameplate, isQuestRendered } = arg0);
  ({ avatarSize, barWidth } = arg0);
  const obj2 = isQuestRendered(4778);
  token = obj2.useToken(token(587).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp6 = token(15263)(token);
  dependencyMap = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function _() {
      return AccessibilityStore.animateYouBarNameplate;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const tmpResult2 = tmp(4810);
  class N {
    constructor() {
      let value;
      const withSpring = spring.withSpring;
      spring;
      if (isQuestRendered) {
        value = closure_2.get();
      } else {
        value = token;
      }
      const obj = { borderTopRightRadius: withSpring(value, YOU_BAR_SPRING_CONFIG) };
      return obj;
    }
  }
  N.__closure = { withSpring: tmp(5374).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp6, borderRadius: token, YOU_BAR_SPRING_CONFIG };
  N.__workletHash = 17156260157738;
  N.__initData = __initData;
  ({ withSpring: tmp(5374).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp6, borderRadius: token, YOU_BAR_SPRING_CONFIG });
  const animatedStyle = tmpResult2.useAnimatedStyle(N);
  let num3 = 0;
  if (!isQuestRendered) {
    num3 = token;
  }
  const diff = barWidth - avatarSize;
  if (cResult[2] === avatarSize) {
    if (cResult[3] === token) {
      if (cResult[4] === num3) {
        let tmp13;
        if (cResult[5] === diff) {
          tmp13 = cResult[6];
        }
        if (cResult[7] === animatedStyle) {
          let tmp14;
          if (cResult[8] === tmp13) {
            tmp14 = cResult[9];
          }
          if (cResult[10] === nameplate) {
            let tmp16;
            if (cResult[11] === (stateFromStores && "always")) {
              tmp16 = cResult[12];
            }
            if (cResult[13] === tmp14) {
              let tmp19;
              if (cResult[14] === tmp16) {
                tmp19 = cResult[15];
              }
              return tmp19;
            }
            const tmp21 = jsx(token(4810).View, { style: tmp14, pointerEvents: "none", children: tmp16 });
            cResult[13] = tmp14;
            cResult[14] = tmp16;
            cResult[15] = tmp21;
            tmp19 = tmp21;
          }
          const tmp18 = jsx(token(8991), { nameplate, isFocused: true, animate: stateFromStores && "always" });
          cResult[10] = nameplate;
          cResult[11] = stateFromStores && "always";
          cResult[12] = tmp18;
          tmp16 = tmp18;
        }
        const items1 = [tmp13, animatedStyle];
        cResult[7] = animatedStyle;
        cResult[8] = tmp13;
        cResult[9] = items1;
        tmp14 = items1;
      }
    }
  }
  const rect = { position: "absolute", top: 0, left: avatarSize, right: -1, bottom: 0, borderTopRightRadius: num3, borderTopLeftRadius: 0, borderBottomRightRadius: token, borderBottomLeftRadius: 0, overflow: "hidden", width: diff };
  cResult[2] = avatarSize;
  cResult[3] = token;
  cResult[4] = num3;
  cResult[5] = diff;
  cResult[6] = rect;
  tmp13 = rect;
}) : (function YouBarNameplate(isQuestRendered) {
  let barWidth;
  let closure_2;
  let nameplate;
  let num;
  isQuestRendered = isQuestRendered.isQuestRendered;
  const avatarSize = isQuestRendered.avatarSize;
  let token;
  dependencyMap = undefined;
  ({ nameplate, barWidth } = isQuestRendered);
  let obj = isQuestRendered(4778);
  const tmp2 = token;
  token = obj.useToken(token(587).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp4 = token(15263)(token);
  dependencyMap = tmp4;
  const items = [AccessibilityStore];
  const obj2 = isQuestRendered(504);
  const stateFromStores = obj2.useStateFromStores(items, () => AccessibilityStore.animateYouBarNameplate);
  const fn = function p() {
    let value;
    const withSpring = spring.withSpring;
    spring;
    if (isQuestRendered) {
      value = closure_2.get();
    } else {
      value = token;
    }
    const obj = { borderTopRightRadius: withSpring(value, YOU_BAR_SPRING_CONFIG) };
    return obj;
  };
  const obj3 = isQuestRendered(4810);
  fn.__closure = { withSpring: isQuestRendered(5374).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp4, borderRadius: token, YOU_BAR_SPRING_CONFIG };
  fn.__workletHash = 11731298516553;
  fn.__initData = __initData2;
  ({ withSpring: isQuestRendered(5374).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp4, borderRadius: token, YOU_BAR_SPRING_CONFIG });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const rect = { position: "absolute", top: 0, left: avatarSize, right: -1, bottom: 0, borderTopRightRadius: num, borderTopLeftRadius: 0, borderBottomRightRadius: token, borderBottomLeftRadius: 0, overflow: "hidden", width: barWidth - avatarSize };
  num = 0;
  const View = token(4810).View;
  if (!isQuestRendered) {
    num = token;
  }
  const items1 = [rect, animatedStyle];
  let str = stateFromStores;
  tmp2(8991);
  if (str) {
    str = "always";
  }
  return <View style={items1} pointerEvents="none">{null}</View>;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default memoResult;
