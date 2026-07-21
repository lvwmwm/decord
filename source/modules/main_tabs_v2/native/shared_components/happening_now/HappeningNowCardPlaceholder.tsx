// Module ID: 14805
// Function ID: 111598
// Name: HappeningNowCardPlaceholder
// Dependencies: []
// Exports: HappeningNowCardPlaceholder

// Module 14805 (HappeningNowCardPlaceholder)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const HAPPENING_NOW_CONTENT_HEIGHT = arg1(dependencyMap[2]).HAPPENING_NOW_CONTENT_HEIGHT;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { placeholderContainer: {} };
obj = { height: HAPPENING_NOW_CONTENT_HEIGHT, width: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[5]).radii.sm, marginRight: 12, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.placeholderIcon = obj;
obj.placeholderContent = { flex: 1 };
const tmp2 = arg1(dependencyMap[3]);
obj.placeholderText = { backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.placeholderTextTop = { width: "75%" };
obj.placeholderTextBottom = { value: 1091633156, fill: 112740 };
let closure_7 = obj.createStyles(obj);
let closure_8 = { code: "function HappeningNowCardPlaceholderTsx1(){const{opacity,withRepeat,withTiming,endOpacity,duration,Easing}=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));}" };
let closure_9 = { code: "function HappeningNowCardPlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx");

export const HappeningNowCardPlaceholder = function HappeningNowCardPlaceholder(panelVariant) {
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  let obj = {};
  let str = "medium";
  const tmp2 = function useBlinkStyle(duration) {
    duration = duration.duration;
    const endOpacity = duration.endOpacity;
    const sharedValue = duration(sharedValue[6]).useSharedValue(duration.startOpacity);
    const items = [sharedValue, duration, endOpacity];
    const effect = React.useEffect(() => {
      let obj = duration(sharedValue[6]);
      const fn = function t() {
        let obj = callback(closure_2[6]);
        obj = { duration: callback, easing: callback(closure_2[6]).Easing.ease };
        const result = closure_2.set(obj.withRepeat(callback(closure_2[7]).withTiming(closure_1, obj), -1, true));
      };
      obj = { opacity: sharedValue, withRepeat: duration(sharedValue[6]).withRepeat, withTiming: duration(sharedValue[7]).withTiming, endOpacity, duration, Easing: duration(sharedValue[6]).Easing };
      fn.__closure = obj;
      fn.__workletHash = 14338250108016;
      fn.__initData = closure_8;
      obj.runOnUI(fn)();
    }, items);
    const obj = duration(sharedValue[6]);
    const fn = function c() {
      return { opacity: sharedValue.get() };
    };
    fn.__closure = { opacity: sharedValue };
    fn.__workletHash = 17547739379389;
    fn.__initData = closure_9;
    return duration(sharedValue[6]).useAnimatedStyle(fn);
  }({});
  const tmp3 = callback;
  if (panelVariant.fullWidth) {
    str = "full";
  }
  obj.width = str;
  obj.panelVariant = flag;
  obj = { style: items };
  const items = [tmp2, tmp.placeholderContainer];
  obj = { style: tmp.placeholderIcon };
  const items1 = [callback(View, obj), ];
  const obj1 = { style: tmp.placeholderContent };
  const items2 = [, ];
  ({ placeholderText: arr3[0], placeholderTextTop: arr3[1] } = tmp);
  const items3 = [callback(View, { style: items2 }), ];
  const items4 = [, ];
  ({ placeholderText: arr5[0], placeholderTextBottom: arr5[1] } = tmp);
  items3[1] = callback(View, { style: items4 });
  obj1.children = items3;
  items1[1] = callback2(View, obj1);
  obj.children = items1;
  obj.children = callback2(importDefault(dependencyMap[6]).View, obj);
  return tmp3(importDefault(dependencyMap[8]), obj);
};
