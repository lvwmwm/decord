// Module ID: 11798
// Function ID: 91567
// Name: items
// Dependencies: []
// Exports: default

// Module 11798 (items)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).EMBEDDED_ACTIVITIES_BLOG_POST_URL;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_7 = { duration: 500 };
let obj = arg1(dependencyMap[5]);
obj = { base: "r", min: 435, max: 218, length: null, alphanum: "92f827adadc1f86811fd4e36c86fdf27", token: "nitro_modal_header_background", regex: "png" };
const items = [{ rotateZ: "225deg" }];
obj.transform = items;
let closure_8 = obj.createStyles({ arrow: obj, tooltip: { padding: 16 }, tooltipContainer: {}, tooltipText: { -2041496735: null, 1548968609: null }, closeButtonWrapper: { marginTop: 14 } });
let closure_9 = { code: "function ActivitiesPrivateChannelCallTooltipTsx1(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  let arg1;
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  let num = 4;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    num = 0;
  }
  arg1 = num;
  let obj1 = arg1(dependencyMap[7]);
  class T {
    constructor() {
      obj = {};
      obj = {};
      obj3 = closure_0(closure_2[7]);
      obj4 = closure_0(closure_2[7]);
      obj5 = closure_0(closure_2[8]);
      withTimingResult = obj5.withTiming(40, { duration: 0 });
      obj6 = closure_0(closure_2[8]);
      withTimingResult1 = obj6.withTiming(40 + closure_0, closure_7);
      obj7 = closure_0(closure_2[8]);
      obj.translateY = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, obj7.withTiming(40, closure_7)), 10);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { withRepeat: arg1(dependencyMap[7]).withRepeat, withSequence: arg1(dependencyMap[7]).withSequence, withTiming: arg1(dependencyMap[8]).withTiming, OFFSET: 40, translateBounceOffset: num, TIMING_CONFIG: closure_7 };
  T.__closure = obj;
  T.__workletHash = 4621705591670;
  T.__initData = closure_9;
  const animatedStyle = obj1.useAnimatedStyle(T);
  obj = { style: items1 };
  const items1 = [tmp.tooltipContainer, animatedStyle];
  obj1 = { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: items2 };
  const items2 = [tmp.arrow];
  const intl = arg1(dependencyMap[10]).intl;
  obj1.label = intl.format(arg1(dependencyMap[10]).t.xAW71b, { helpdeskUrl: closure_5 });
  const intl2 = arg1(dependencyMap[10]).intl;
  obj1.title = intl2.string(arg1(dependencyMap[10]).t.HOPqzR);
  const obj3 = { style: tmp.closeButtonWrapper };
  const obj4 = { "Bool(false)": 281018.57583740365, "Bool(false)": 3194708151062737500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 17752983073962420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000855262075521191, color: 143440056900016160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
  const intl3 = arg1(dependencyMap[10]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[10]).t.NX+WJN);
  obj4.onPress = onClosePress.onClosePress;
  obj3.children = jsx(arg1(dependencyMap[11]).Button, obj4);
  obj1.children = <View {...obj3} />;
  obj.children = jsx(arg1(dependencyMap[9]).Tooltip, obj1);
  return jsx(importDefault(dependencyMap[7]).View, obj);
};
