// Module ID: 14940
// Function ID: 112492
// Name: ScreenAlignedThemedGradient
// Dependencies: []
// Exports: default

// Module 14940 (ScreenAlignedThemedGradient)
importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = { code: "function ScreenAlignedThemedGradientTsx1(){const{roundToNearestPixel,offsetX,parentSpringTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-parentSpringTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}" };
const styles = StyleSheet.create({ container: StyleSheet.absoluteFillObject });
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(offsetX) {
  offsetX = offsetX.offsetX;
  const arg1 = offsetX;
  const offsetY = offsetX.offsetY;
  const importDefault = offsetY;
  const parentSpringTranslateX = offsetX.parentSpringTranslateX;
  const dependencyMap = parentSpringTranslateX;
  let obj = arg1(dependencyMap[3]);
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  let obj1 = arg1(dependencyMap[4]);
  const fn = function c() {
    let obj = {};
    obj = { translateX: offsetY(parentSpringTranslateX[5])(-offsetX - parentSpringTranslateX.get()) };
    const items = [obj, ];
    obj = { translateY: offsetY(parentSpringTranslateX[5])(-offsetY) };
    items[1] = obj;
    obj.transform = items;
    return obj;
  };
  obj = { roundToNearestPixel: importDefault(dependencyMap[5]), offsetX, parentSpringTranslateX, offsetY };
  fn.__closure = obj;
  fn.__workletHash = 13846065523130;
  fn.__initData = closure_4;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { pointerEvents: "none", style: items };
  const items = [container.container, animatedStyle];
  obj1 = { id: "Small", text: "sm", variant: "Placeholder", mix: isClientThemeOrCustomThemeActive };
  obj.children = jsx(importDefault(dependencyMap[6]), obj1);
  return jsx(importDefault(dependencyMap[4]).View, obj);
};
