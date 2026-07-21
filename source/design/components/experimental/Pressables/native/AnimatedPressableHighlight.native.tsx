// Module ID: 5431
// Function ID: 46529
// Name: AnimatedPressableHighlight
// Dependencies: []

// Module 5431 (AnimatedPressableHighlight)
let closure_3 = importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = importDefault(dependencyMap[3]).createAnimatedComponent(arg1(dependencyMap[4]).PressableHighlight);
const importDefaultResult = importDefault(dependencyMap[3]);
const obj2 = arg1(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[8]).isAndroid() ? function AnimatedPressableHighlightAndroid(children) {
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  const arg1 = merged;
  obj = arg1(dependencyMap[6]);
  const token = obj.useToken(importDefault(dependencyMap[7]).colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
  const importDefault = token;
  const items = [token, ];
  const androidRippleConfig = merged.androidRippleConfig;
  let cornerRadius;
  if (null != androidRippleConfig) {
    cornerRadius = androidRippleConfig.cornerRadius;
  }
  items[1] = cornerRadius;
  obj = {
    android_ripple: React.useMemo(() => {
      const obj = { color: token };
      const androidRippleConfig = merged.androidRippleConfig;
      let cornerRadius;
      if (null != androidRippleConfig) {
        cornerRadius = androidRippleConfig.cornerRadius;
      }
      let num = 12;
      if (null != cornerRadius) {
        num = cornerRadius;
      }
      obj.cornerRadius = num;
      return obj;
    }, items)
  };
  const merged1 = Object.assign(merged);
  obj["children"] = children.children;
  return <Pressable {...obj} />;
} : function AnimatedPressableHighlightiOS(children) {
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  obj = arg1(dependencyMap[5]);
  const iOSPressEffects = obj.useIOSPressEffects(4);
  obj = { accessibilityRole: "button", onPressIn: iOSPressEffects.onPressIn, onPressOut: iOSPressEffects.onPressOut };
  const merged1 = Object.assign(merged);
  const items = [iOSPressEffects.pressableStyles, merged.style];
  obj["style"] = items;
  obj["children"] = children.children;
  return <closure_6 {...obj} />;
};
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx");

export const AnimatedPressableHighlight = tmp2;
