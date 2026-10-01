// Module ID: 12296
// Function ID: 12297
// Name: ActivitiesPrivateChannelCallTooltip
// Dependencies: [19, 17, 4825, 2005, 21, 4836, 504, 4566, 4837, 1177, 1115, 5281, 2]
// Exports: default

// Module 12296 (ActivitiesPrivateChannelCallTooltip)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 2005 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let items;
let obj2;
let View = react_native.View;
const helpdeskUrl = Constants.EMBEDDED_ACTIVITIES_BLOG_POST_URL;
const jsx = Fragment.jsx;
const TIMING_CONFIG = { duration: 500 };
let obj = { arrow: obj2, tooltip: { padding: 16 }, tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 }, tooltipText: { textAlign: "center", fontSize: 14 }, closeButtonWrapper: { marginTop: 14 } };
obj2 = { marginLeft: 200, top: 9, position: "relative", borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 16, borderLeftWidth: 16, transform: items };
items = [{ rotateZ: "225deg" }];
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function ActivitiesPrivateChannelCallTooltipTsx1(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj5;
  let useReducedMotion;
  let num;
  onClosePress = onClosePress.onClosePress;
  const tmp = closure_8();
  const tmp2 = num;
  let obj = num(504);
  let items = [AccessibilityStore];
  num = 4;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    num = 0;
  }
  const tmp2Result = tmp2(4566);
  class T {
    constructor() {
      let items;
      let obj5;
      let withRepeat;
      let withSequence;
      let withTimingResult;
      let withTimingResult1;
      const obj = { transform: items };
      const obj2 = { translateY: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(40, TIMING_CONFIG)), 10) };
      withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj3 = timing;
      withTimingResult = obj3.withTiming(40, { duration: 0 });
      const obj4 = timing;
      withTimingResult1 = obj4.withTiming(40 + num, TIMING_CONFIG);
      items = [obj2];
      obj5 = timing;
      return obj;
    }
  }
  let obj2 = { withRepeat: tmp2(4566).withRepeat, withSequence: tmp2(4566).withSequence, withTiming: tmp2(4837).withTiming, OFFSET: 40, translateBounceOffset: num, TIMING_CONFIG };
  T.__closure = obj2;
  T.__workletHash = 4621705591670;
  T.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(T);
  const items1 = [tmp.tooltipContainer, animatedStyle];
  View = ReanimatedRexportDefault.View;
  let obj4 = { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: items2, label: intl.format(tmp2(1115).t.xAW71b, obj5), title: intl2.string(tmp2(1115).t.HOPqzR), children: null };
  items2 = [tmp.arrow];
  const Tooltip = tmp2(1177).Tooltip;
  intl = tmp2(1115).intl;
  obj5 = { helpdeskUrl };
  intl2 = tmp2(1115).intl;
  ({ text: intl3.string(tmp2(1115).t["NX+WJN"]), onPress: onClosePress, variant: "secondary", size: "sm", grow: true });
  const Button = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  return <View style={items1}>{null}</View>;
};
