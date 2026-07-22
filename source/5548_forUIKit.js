// Module ID: 5548
// Function ID: 47116
// Name: forUIKit
// Dependencies: []
// Exports: forFade, forNoAnimation, forSlideLeft, forSlideRight, forSlideUp, forUIKit

// Module 5548 (forUIKit)
const _module = require(dependencyMap[0]);
const I18nManager = _module.I18nManager;
const add = _module.Animated.add;

export const forUIKit = function forUIKit(current) {
  let layouts;
  let next;
  ({ next, layouts } = current);
  let num = 100;
  let num2 = 100;
  if (layouts.leftLabel) {
    num2 = (layouts.screen.width - layouts.leftLabel.width) / 2 - 27;
  }
  if (layouts.title) {
    num = (layouts.screen.width - layouts.title.width) / 2 - 27;
  }
  const result = layouts.screen.width / 4;
  const progress = current.current.progress;
  let num7 = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" };
    num7 = progress2.interpolate(obj);
  }
  const tmp2Result = add(progress.interpolate({ inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" }), num7);
  obj = {};
  obj = { opacity: tmp2Result.interpolate({ inputRange: [], outputRange: [255, 235, 205] }) };
  obj.leftButtonStyle = obj;
  const obj1 = {};
  const obj2 = {};
  const obj3 = { inputRange: [] };
  const items = [, , ];
  if (I18nManager.getConstants().isRTL) {
    items[0] = tmp4;
    items[1] = 0;
    items[2] = num2;
    let tmp5 = items;
  } else {
    items[0] = num2;
    items[1] = 0;
    items[2] = tmp4;
    tmp5 = items;
  }
  obj3.outputRange = tmp5;
  obj2.translateX = tmp2Result.interpolate(obj3);
  const items1 = [obj2];
  obj1.transform = items1;
  obj.leftLabelStyle = obj1;
  const interpolateResult = progress.interpolate({ inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" });
  const tmp2 = add;
  obj.rightButtonStyle = { opacity: tmp2Result.interpolate({ inputRange: [], outputRange: [255, 235, 205] }) };
  const obj5 = { opacity: tmp2Result.interpolate({ inputRange: [1079741169, -1683627215, 1517297860, 1511862848], outputRange: [true, true, true, true] }) };
  const obj6 = {};
  const obj7 = { inputRange: [null, null, null] };
  const items2 = [, , ];
  if (I18nManager.getConstants().isRTL) {
    items2[0] = tmp6;
    items2[1] = 0;
    items2[2] = result;
    let tmp7 = items2;
  } else {
    items2[0] = result;
    items2[1] = 0;
    items2[2] = tmp6;
    tmp7 = items2;
  }
  obj7.outputRange = tmp7;
  obj6.translateX = tmp2Result.interpolate(obj7);
  const items3 = [obj6];
  obj5.transform = items3;
  obj.titleStyle = obj5;
  const obj8 = {};
  const obj9 = {};
  const obj10 = { inputRange: [] };
  const width = layouts.screen.width;
  const items4 = [, , ];
  if (I18nManager.getConstants().isRTL) {
    items4[0] = -width;
    items4[1] = 0;
    items4[2] = layouts.screen.width;
    let tmp8 = items4;
  } else {
    items4[0] = width;
    items4[1] = 0;
    items4[2] = -layouts.screen.width;
    tmp8 = items4;
  }
  obj10.outputRange = tmp8;
  obj9.translateX = tmp2Result.interpolate(obj10);
  const items5 = [obj9];
  obj8.transform = items5;
  obj.backgroundStyle = obj8;
  return obj;
};
export const forFade = function forFade(next) {
  next = next.next;
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const tmpResult = add(progress.interpolate({ inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" }), num);
  const interpolateResult1 = tmpResult.interpolate({ inputRange: [], outputRange: [255, 235, 205] });
  obj = { leftButtonStyle: { opacity: interpolateResult1 }, rightButtonStyle: { opacity: interpolateResult1 }, titleStyle: { opacity: interpolateResult1 } };
  obj = { opacity: tmpResult.interpolate({ inputRange: [], outputRange: [] }) };
  obj.backgroundStyle = obj;
  return obj;
};
export const forSlideLeft = function forSlideLeft(next) {
  next = next.next;
  const screen = next.layouts.screen;
  let obj = {};
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    obj = { inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const interpolateResult = progress.interpolate({ inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" });
  const tmp = add;
  obj = { inputRange: [] };
  const width = screen.width;
  const items = [, , ];
  if (I18nManager.getConstants().isRTL) {
    items[0] = -width;
    items[1] = 0;
    items[2] = screen.width;
    let tmp3 = items;
  } else {
    items[0] = width;
    items[1] = 0;
    items[2] = -screen.width;
    tmp3 = items;
  }
  obj.outputRange = tmp3;
  obj.translateX = add(progress.interpolate({ inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" }), num).interpolate(obj);
  const transform = [obj];
  return { leftButtonStyle: { transform }, rightButtonStyle: { transform }, titleStyle: { transform }, backgroundStyle: { transform } };
};
export const forSlideRight = function forSlideRight(next) {
  next = next.next;
  const screen = next.layouts.screen;
  let obj = {};
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    obj = { inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const interpolateResult = progress.interpolate({ inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" });
  const tmp = add;
  obj = { inputRange: [] };
  const width = screen.width;
  const items = [, , ];
  if (I18nManager.getConstants().isRTL) {
    items[0] = width;
    items[1] = 0;
    items[2] = -screen.width;
    let tmp3 = items;
  } else {
    items[0] = -width;
    items[1] = 0;
    items[2] = screen.width;
    tmp3 = items;
  }
  obj.outputRange = tmp3;
  obj.translateX = add(progress.interpolate({ inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" }), num).interpolate(obj);
  const transform = [obj];
  return { leftButtonStyle: { transform }, rightButtonStyle: { transform }, titleStyle: { transform }, backgroundStyle: { transform } };
};
export const forSlideUp = function forSlideUp(next) {
  next = next.next;
  const header = next.layouts.header;
  let obj = {};
  const progress = next.current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    obj = { inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const interpolateResult = progress.interpolate({ inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" });
  const tmp = add;
  const items = [-header.height, 0, -header.height];
  obj.translateY = add(progress.interpolate({ inputRange: [77601039, 1612144654], outputRange: [77601039, 1612144654], extrapolate: "clamp" }), num).interpolate({ inputRange: [], outputRange: items });
  const transform = [obj];
  return { leftButtonStyle: { transform }, rightButtonStyle: { transform }, titleStyle: { transform }, backgroundStyle: { transform } };
};
export function forNoAnimation() {
  return {};
}
