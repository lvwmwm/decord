// Module ID: 11809
// Function ID: 91629
// Name: items
// Dependencies: [31, 27, 4122, 4155, 33, 4130, 566, 3991, 4131, 1273, 1212, 4543, 2]
// Exports: default

// Module 11809 (items)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EMBEDDED_ACTIVITIES_BLOG_POST_URL as closure_5 } from "items3";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = { duration: 500 };
_createForOfIteratorHelperLoose = { marginLeft: 200, top: 9, position: "relative", borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 16, borderLeftWidth: 16 };
let items = [{ rotateZ: "225deg" }];
_createForOfIteratorHelperLoose.transform = items;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ arrow: _createForOfIteratorHelperLoose, tooltip: { padding: 16 }, tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 }, tooltipText: { textAlign: "center", fontSize: 14 }, closeButtonWrapper: { marginTop: 14 } });
let closure_9 = { code: "function ActivitiesPrivateChannelCallTooltipTsx1(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  let num;
  const tmp = callback();
  let obj = num(566);
  let items = [_isNativeReflectConstruct];
  num = 4;
  if (obj.useStateFromStores(items, () => outer1_4.useReducedMotion)) {
    num = 0;
  }
  let obj1 = num(3991);
  class T {
    constructor() {
      obj = {};
      obj = {};
      obj3 = c0(outer1_2[7]);
      obj4 = c0(outer1_2[7]);
      obj5 = c0(outer1_2[8]);
      withTimingResult = obj5.withTiming(40, { duration: 0 });
      obj6 = c0(outer1_2[8]);
      withTimingResult1 = obj6.withTiming(40 + c0, outer1_7);
      obj7 = c0(outer1_2[8]);
      obj.translateY = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, obj7.withTiming(40, outer1_7)), 10);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { withRepeat: num(3991).withRepeat, withSequence: num(3991).withSequence, withTiming: num(4131).withTiming, OFFSET: 40, translateBounceOffset: num, TIMING_CONFIG: closure_7 };
  T.__closure = obj;
  T.__workletHash = 4621705591670;
  T.__initData = closure_9;
  const animatedStyle = obj1.useAnimatedStyle(T);
  obj = { style: items1 };
  items1 = [tmp.tooltipContainer, animatedStyle];
  obj1 = { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: items2 };
  items2 = [tmp.arrow];
  const intl = num(1212).intl;
  obj1.label = intl.format(num(1212).t.xAW71b, { helpdeskUrl: closure_5 });
  const intl2 = num(1212).intl;
  obj1.title = intl2.string(num(1212).t.HOPqzR);
  let obj3 = { style: tmp.closeButtonWrapper };
  let obj4 = { text: null, onPress: null, variant: "secondary", size: "sm", grow: true };
  const intl3 = num(1212).intl;
  obj4.text = intl3.string(num(1212).t["NX+WJN"]);
  obj4.onPress = onClosePress.onClosePress;
  obj3.children = jsx(num(4543).Button, { text: null, onPress: null, variant: "secondary", size: "sm", grow: true });
  obj1.children = <View style={tmp.closeButtonWrapper} />;
  obj.children = jsx(num(1273).Tooltip, { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: items2 });
  return jsx(importDefault(3991).View, { style: items1 });
};
