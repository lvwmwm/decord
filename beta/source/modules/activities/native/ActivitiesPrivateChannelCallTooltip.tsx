// Module ID: 14629
// Function ID: 14630
// Name: ActivitiesPrivateChannelCallTooltip
// Dependencies: [19, 17, 5141, 2142, 21, 5140, 504, 1652, 5370, 1187, 1113, 5758, 2]
// Exports: default

// Module 14629 (ActivitiesPrivateChannelCallTooltip)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import _modDef1652 from "module_1652" /* 1652 */;
import Constants from "Constants" /* 2142 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let items;
let obj2;
let tmp2;
const intl4 = tmp2(1113);
const native = tmp2(1187);
const _mod1652 = tmp2(1652);
const timing_timing = tmp2(5370);
const components_Button_Button = tmp2(5758);
let View = react_native.View;
const helpdeskUrl = Constants.EMBEDDED_ACTIVITIES_BLOG_POST_URL;
const jsx = Fragment.jsx;
let closure_7 = { duration: 500 };
let obj = { arrow: obj2, tooltip: { padding: 16 }, tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 }, tooltipText: { textAlign: "center", fontSize: 14 }, closeButtonWrapper: { marginTop: 14 } };
obj2 = { marginLeft: 200, top: 9, position: "relative", borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 16, borderLeftWidth: 16, transform: items };
items = [{ rotateZ: "225deg" }];
let closure_8 = createStyles.createStyles(obj);
let closure_9 = { code: "(function ActivitiesPrivateChannelCallTooltipTsx1(){let[withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG]=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};})" };
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  let intl;
  let intl2;
  let intl3;
  let obj4;
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  onClosePress = onClosePress.onClosePress;
  let tmp = closure_8();
  let tmp2 = require;
  let obj = get_initialized;
  let items = [AccessibilityStore];
  let num = 4;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    num = 0;
  }
  const items1 = [closure_9, , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items1[1] = _mod1652.withRepeat;
  items1[2] = _mod1652.withSequence;
  items1[3] = timing_timing.withTiming;
  items1[4] = 40;
  items1[5] = num;
  items1[6] = closure_7;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items1;
  class ActivitiesPrivateChannelCallTooltipTsx1 {
    constructor() {
      let items;
      let tmp;
      let tmp2;
      const obj = { transform: items };
      const obj2 = { translateY: _undefined(_undefined2(tmp, tmp2, _undefined3(c3, c5)), 10) };
      tmp = _undefined3(c3, { duration: 0 });
      items = [obj2];
      tmp2 = _undefined3(c3 + c4, c5);
      return obj;
    }
  }
  const items2 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  ActivitiesPrivateChannelCallTooltipTsx1.__closure = items2;
  ActivitiesPrivateChannelCallTooltipTsx1.__workletHash = 7430937794191;
  ActivitiesPrivateChannelCallTooltipTsx1.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(ActivitiesPrivateChannelCallTooltipTsx1);
  const items3 = [tmp.tooltipContainer, animatedStyle];
  View = _modDef1652.View;
  ({ containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: tmp.arrow, label: intl.format(intl4.t.xAW71b, obj4), title: intl2.string(intl4.t.HOPqzR), children: null });
  const Tooltip = native.Tooltip;
  intl = intl4.intl;
  obj4 = { helpdeskUrl };
  intl2 = intl4.intl;
  ({ text: intl3.string(intl4.t["NX+WJN"]), onPress: onClosePress, variant: "secondary", size: "sm", grow: true });
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  return <View style={items3}>{null}</View>;
};
