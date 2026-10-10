// Module ID: 12560
// Function ID: 12561
// Name: ActivitiesPrivateChannelCallTooltip
// Dependencies: [19, 17, 5081, 2024, 21, 5092, 558, 576, 504, 4850, 5093, 1126, 5379, 1200, 2]

// Module 12560 (ActivitiesPrivateChannelCallTooltip)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 2024 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let items;
let obj2;
let View = react_native.View;
const helpdeskUrl = Constants.EMBEDDED_ACTIVITIES_BLOG_POST_URL;
const jsx = Fragment.jsx;
let c7 = 40;
const TIMING_CONFIG = { duration: 500 };
let obj = { arrow: obj2, tooltip: { padding: 16 }, tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 }, tooltipText: { textAlign: "center", fontSize: 14 }, closeButtonWrapper: { marginTop: 14 } };
obj2 = { marginLeft: 200, top: 9, position: "relative", borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 16, borderLeftWidth: 16, transform: items };
items = [{ rotateZ: "225deg" }];
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function ActivitiesPrivateChannelCallTooltipTsx1(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const __initData2 = { code: "function ActivitiesPrivateChannelCallTooltipTsx2(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  let arrow;
  let num3;
  let tmp5;
  let tmp6;
  let tooltip;
  let tooltipText;
  let useReducedMotion;
  const tmp = num3;
  let obj = num3(576);
  const cResult = obj.c(21);
  onClosePress = onClosePress.onClosePress;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function w() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  num3 = 4;
  const tmpResult = tmp(504);
  if (tmpResult.useStateFromStores(tmp5, tmp6)) {
    num3 = 0;
  }
  const tmpResult2 = tmp(4850);
  class F {
    constructor() {
      let items;
      let obj5;
      let withRepeat;
      let withSequence;
      let withTimingResult;
      let withTimingResult1;
      const obj = { transform: items };
      const obj2 = { translateY: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(c7, TIMING_CONFIG)), 10) };
      withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj3 = timing;
      withTimingResult = obj3.withTiming(c7, { duration: 0 });
      const obj4 = timing;
      withTimingResult1 = obj4.withTiming(c7 + num3, TIMING_CONFIG);
      items = [obj2];
      obj5 = timing;
      return obj;
    }
  }
  let obj2 = { withRepeat: tmp(4850).withRepeat, withSequence: tmp(4850).withSequence, withTiming: tmp(5093).withTiming, OFFSET, translateBounceOffset: num3, TIMING_CONFIG };
  F.__closure = obj2;
  F.__workletHash = 4621705591670;
  F.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(F);
  if (cResult[2] === animatedStyle) {
    let tmp9;
    let tmp11;
    let tmp10;
    let tmp15;
    let tmp17;
    if (cResult[3] === tmp4.tooltipContainer) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    ({ tooltip, tooltipText, arrow } = tmp4);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      let obj3 = { helpdeskUrl };
      const formatResult = intl.format(tmp(1126).t.xAW71b, obj3);
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t.HOPqzR);
      cResult[5] = formatResult;
      cResult[6] = stringResult;
      tmp11 = stringResult;
      tmp10 = formatResult;
    } else {
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    const _Symbol2 = Symbol;
    const closeButtonWrapper = tmp4.closeButtonWrapper;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t["NX+WJN"]);
      cResult[7] = stringResult1;
      tmp15 = stringResult1;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== onClosePress) {
      const tmp19 = jsx(tmp(5379).Button, { text: tmp15, onPress: onClosePress, variant: "secondary", size: "sm", grow: true });
      cResult[8] = onClosePress;
      cResult[9] = tmp19;
      tmp17 = tmp19;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === tmp4.closeButtonWrapper) {
      let tmp20;
      if (cResult[11] === tmp17) {
        tmp20 = cResult[12];
      }
      if (cResult[13] === tmp4.arrow) {
        if (cResult[14] === tmp4.tooltip) {
          if (cResult[15] === tmp4.tooltipText) {
            if (cResult[18] === tmp24) {
              let tmp27;
              if (cResult[19] === tmp9) {
                tmp27 = cResult[20];
              }
              return tmp27;
            }
            const tmp30 = jsx(ReanimatedRexportDefault.View, { style: tmp9, children: tmp24 });
            cResult[18] = tmp24;
            cResult[19] = tmp9;
            cResult[20] = tmp30;
            tmp27 = tmp30;
          }
        }
      }
      cResult[13] = tmp4.arrow;
      cResult[14] = tmp4.tooltip;
      cResult[15] = tmp4.tooltipText;
      cResult[16] = tmp20;
      cResult[17] = jsx(tmp(1200).Tooltip, { containerStyle: tooltip, labelStyle: tooltipText, arrowStyle: arrow, label: tmp10, title: tmp11, children: tmp20 });
      jsx(tmp(1200).Tooltip, { containerStyle: tooltip, labelStyle: tooltipText, arrowStyle: arrow, label: tmp10, title: tmp11, children: tmp20 });
      class F {
        constructor() {
          let items;
          let obj5;
          let withRepeat;
          let withSequence;
          let withTimingResult;
          let withTimingResult1;
          const obj = { transform: items };
          const obj2 = { translateY: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(c7, TIMING_CONFIG)), 10) };
          withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          withSequence = ReanimatedRexport.withSequence;
          ReanimatedRexport;
          const obj3 = timing;
          withTimingResult = obj3.withTiming(c7, { duration: 0 });
          const obj4 = timing;
          withTimingResult1 = obj4.withTiming(c7 + num3, TIMING_CONFIG);
          items = [obj2];
          obj5 = timing;
          return obj;
        }
      }
    }
    const tmp23 = <View style={closeButtonWrapper}>{tmp17}</View>;
    cResult[10] = tmp4.closeButtonWrapper;
    class F {
      constructor() {
        let items;
        let obj5;
        let withRepeat;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        const obj = { transform: items };
        const obj2 = { translateY: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(c7, TIMING_CONFIG)), 10) };
        withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const obj3 = timing;
        withTimingResult = obj3.withTiming(c7, { duration: 0 });
        const obj4 = timing;
        withTimingResult1 = obj4.withTiming(c7 + num3, TIMING_CONFIG);
        items = [obj2];
        obj5 = timing;
        return obj;
      }
    }
    cResult[11] = tmp17;
    cResult[12] = tmp23;
    tmp20 = tmp23;
  }
  const items1 = [tmp4.tooltipContainer, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.tooltipContainer;
  cResult[4] = items1;
  tmp9 = items1;
}) : (function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  let intl;
  let intl2;
  let intl3;
  let obj5;
  let useReducedMotion;
  let num;
  onClosePress = onClosePress.onClosePress;
  const tmp = closure_9();
  const tmp2 = num;
  let obj = num(504);
  let items = [AccessibilityStore];
  num = 4;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    num = 0;
  }
  const fn = function p() {
    let items;
    let obj5;
    let withRepeat;
    let withSequence;
    let withTimingResult;
    let withTimingResult1;
    const obj = { transform: items };
    const obj2 = { translateY: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(c7, TIMING_CONFIG)), 10) };
    withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    withSequence = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj3 = timing;
    withTimingResult = obj3.withTiming(c7, { duration: 0 });
    const obj4 = timing;
    withTimingResult1 = obj4.withTiming(c7 + num, TIMING_CONFIG);
    items = [obj2];
    obj5 = timing;
    return obj;
  };
  const tmp2Result = tmp2(4850);
  let obj2 = { withRepeat: tmp2(4850).withRepeat, withSequence: tmp2(4850).withSequence, withTiming: tmp2(5093).withTiming, OFFSET, translateBounceOffset: num, TIMING_CONFIG };
  fn.__closure = obj2;
  fn.__workletHash = 10615395921877;
  fn.__initData = __initData2;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const items1 = [tmp.tooltipContainer, animatedStyle];
  View = ReanimatedRexportDefault.View;
  let obj4 = { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: tmp.arrow, label: intl.format(tmp2(1126).t.xAW71b, obj5), title: intl2.string(tmp2(1126).t.HOPqzR), children: null };
  const Tooltip = tmp2(1200).Tooltip;
  intl = tmp2(1126).intl;
  obj5 = { helpdeskUrl };
  intl2 = tmp2(1126).intl;
  ({ text: intl3.string(tmp2(1126).t["NX+WJN"]), onPress: onClosePress, variant: "secondary", size: "sm", grow: true });
  const Button = tmp2(5379).Button;
  intl3 = tmp2(1126).intl;
  return <View style={items1}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default tmp3;
