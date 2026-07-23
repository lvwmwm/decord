// Module ID: 15064
// Function ID: 114703
// Name: ScreenAlignedThemedGradient
// Dependencies: [31, 27, 33, 8831, 3991, 9891, 4662, 2]
// Exports: default

// Module 15064 (ScreenAlignedThemedGradient)
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = { code: "function ScreenAlignedThemedGradientTsx1(){const{roundToNearestPixel,offsetX,parentSpringTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-parentSpringTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}" };
const styles = StyleSheet.create({ container: StyleSheet.absoluteFillObject });
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(offsetX) {
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  const parentSpringTranslateX = offsetX.parentSpringTranslateX;
  let obj = offsetX(parentSpringTranslateX[3]);
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  let obj1 = offsetX(parentSpringTranslateX[4]);
  const fn = function c() {
    let obj = {};
    obj = { translateX: offsetY(parentSpringTranslateX[5])(-offsetX - parentSpringTranslateX.get()) };
    const items = [obj, ];
    obj = { translateY: offsetY(parentSpringTranslateX[5])(-offsetY) };
    items[1] = obj;
    obj.transform = items;
    return obj;
  };
  obj = { roundToNearestPixel: offsetY(parentSpringTranslateX[5]), offsetX, parentSpringTranslateX, offsetY };
  fn.__closure = obj;
  fn.__workletHash = 13846065523130;
  fn.__initData = closure_4;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { pointerEvents: "none", style: items };
  items = [container.container, animatedStyle];
  obj1 = { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive };
  obj.children = jsx(offsetY(parentSpringTranslateX[6]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive });
  return jsx(offsetY(parentSpringTranslateX[4]).View, { pointerEvents: "none", style: items });
};
