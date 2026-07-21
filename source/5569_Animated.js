// Module ID: 5569
// Function ID: 47312
// Name: Animated
// Dependencies: []
// Exports: forBottomSheetAndroid, forFadeFromBottomAndroid, forFadeFromCenter, forHorizontalIOS, forModalPresentationIOS, forNoAnimation, forRevealFromBottomAndroid, forScaleFromCenterAndroid, forVerticalIOS

// Module 5569 (Animated)
let Animated;
let Platform;
const _module = require(dependencyMap[0]);
({ Animated, Platform } = _module);
({ add: closure_2, multiply: closure_3 } = Animated);

export const forHorizontalIOS = function forHorizontalIOS(layouts) {
  let current;
  let inverted;
  let next;
  ({ current, next, inverted } = layouts);
  const screen = layouts.layouts.screen;
  let obj = {};
  obj = {};
  obj = { translateX: callback(progress.interpolate({ inputRange: ["Text", "lc"], outputRange: items, extrapolate: "clamp" }), inverted) };
  const progress = current.progress;
  const items = [screen.width, ];
  let num = 0;
  items[1] = 0;
  const items1 = [obj, ];
  const obj1 = {};
  if (next) {
    const progress2 = next.progress;
    const obj2 = { inputRange: ["Text", "lc"] };
    const items2 = [0.229, -0.3 * screen.width];
    obj2.outputRange = items2;
    obj2.extrapolate = "clamp";
    num = callback(progress2.interpolate(obj2), inverted);
  }
  obj1.translateX = num;
  items1[1] = obj1;
  obj.transform = items1;
  obj.cardStyle = obj;
  const progress3 = current.progress;
  obj.overlayStyle = { opacity: progress3.interpolate({ inputRange: ["Text", "lc"], outputRange: ["<string:3398392872>", "<string:1211187289>"], extrapolate: "clamp" }) };
  const obj3 = { opacity: progress3.interpolate({ inputRange: ["Text", "lc"], outputRange: ["<string:3398392872>", "<string:1211187289>"], extrapolate: "clamp" }) };
  const progress4 = current.progress;
  obj.shadowStyle = { shadowOpacity: progress4.interpolate({ inputRange: ["Text", "lc"], outputRange: [-520405018, 1431658495], extrapolate: "clamp" }) };
  return obj;
};
export const forVerticalIOS = function forVerticalIOS(inverted) {
  let obj = {};
  obj = {};
  obj = { translateY: callback(progress.interpolate({ inputRange: ["Text", "lc"], outputRange: items, extrapolate: "clamp" }), inverted.inverted) };
  const progress = inverted.current.progress;
  const items = [inverted.layouts.screen.height, 0];
  const items1 = [obj];
  obj.transform = items1;
  obj.cardStyle = obj;
  return obj;
};
export const forModalPresentationIOS = function forModalPresentationIOS(next) {
  let current;
  let index;
  let insets;
  let inverted;
  next = next.next;
  const screen = next.layouts.screen;
  let num = 10;
  let num2 = 10;
  ({ index, current, inverted, insets } = next);
  if (screen.width > screen.height) {
    num2 = 0;
  }
  const top = insets.top;
  const progress = current.progress;
  const result = screen.height / screen.width;
  let num3 = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: ["Text", "lc"], outputRange: ["Text", "lc"], extrapolate: "clamp" };
    num3 = progress2.interpolate(obj);
  }
  const tmp3Result = closure_2(progress.interpolate({ inputRange: ["Text", "lc"], outputRange: ["Text", "lc"], extrapolate: "clamp" }), num3);
  obj = { inputRange: [true, true, true] };
  const items = [screen.height, , ];
  let num4 = 0;
  if (0 !== index) {
    num4 = num2;
  }
  items[1] = num4;
  let num5 = 0;
  if (0 === index) {
    num5 = top;
  }
  items[2] = num5 - num2 * result;
  obj.outputRange = items;
  const interpolateResult = progress.interpolate({ inputRange: ["Text", "lc"], outputRange: ["Text", "lc"], extrapolate: "clamp" });
  const tmp3 = closure_2;
  const tmp6 = closure_3;
  let num6 = 1;
  const tmp6Result = closure_3(tmp3Result.interpolate(obj), inverted);
  if (screen.width <= screen.height) {
    obj = { inputRange: [true, true, true] };
    let num7 = 1;
    if (screen.width) {
      num7 = 1 - 2 * num2 / screen.width;
    }
    const items1 = [, , num7];
    obj.outputRange = items1;
    num6 = tmp3Result.interpolate(obj);
  }
  let num9 = 0;
  if (screen.width <= screen.height) {
    if (tmp5) {
      const obj1 = { inputRange: [], outputRange: ["GUILD_SETTINGS_LOADED_BANS", "tenureRequirements", "RowType", "isArray"] };
      num = tmp3Result.interpolate(obj1);
    }
    num9 = num;
  }
  const obj2 = {};
  const obj3 = { borderTopLeftRadius: num9, borderTopRightRadius: num9 };
  let num10 = 0;
  if (0 !== index) {
    num10 = top;
  }
  obj3.marginTop = num10;
  let num11 = 0;
  if (0 !== index) {
    num11 = num2;
  }
  obj3.marginBottom = num11;
  const items2 = [{ translateY: tmp6Result }, ];
  const obj4 = { scale: num6 };
  items2[1] = obj4;
  obj3.transform = items2;
  obj2.cardStyle = obj3;
  obj2.overlayStyle = { opacity: tmp3Result.interpolate({ inputRange: [], outputRange: [-520405018, 1431658495, 24199125, 822083584] }) };
  return obj2;
};
export const forFadeFromBottomAndroid = function forFadeFromBottomAndroid(current) {
  let closing;
  let inverted;
  current = current.current;
  const progress = current.progress;
  const items = [0.08 * current.layouts.screen.height, 0];
  ({ inverted, closing } = current);
  let obj = {};
  obj = {};
  const progress2 = current.progress;
  const tmp = callback(progress.interpolate({ inputRange: ["Text", "lc"], outputRange: items, extrapolate: "clamp" }), inverted);
  obj.opacity = importDefault(dependencyMap[1])(closing, current.progress, progress2.interpolate({ inputRange: ["SAFETY_SC_FILTERS_SEXUAL_MEDIA", "itemInner", "available_regions", "start_id"], outputRange: [null, null, null, null], extrapolate: "clamp" }));
  const items1 = [{ translateY: tmp }];
  obj.transform = items1;
  obj.cardStyle = obj;
  return obj;
};
export const forRevealFromBottomAndroid = function forRevealFromBottomAndroid(layouts) {
  let current;
  let inverted;
  let next;
  ({ current, next, inverted } = layouts);
  const screen = layouts.layouts.screen;
  let obj = {};
  obj = { overflow: "hidden" };
  obj = { translateY: callback(progress.interpolate({ inputRange: ["Text", "lc"], outputRange: items, extrapolate: "clamp" }), inverted) };
  const progress = current.progress;
  const items = [screen.height, ];
  let num = 0;
  items[1] = 0;
  const items1 = [obj];
  obj.transform = items1;
  obj.containerStyle = obj;
  const obj1 = {};
  const progress2 = current.progress;
  const items2 = [0.9590000000000001 * screen.height * -1, 0];
  const items3 = [{ translateY: callback(progress2.interpolate({ inputRange: ["Text", "lc"], outputRange: items2, extrapolate: "clamp" }), inverted) }, ];
  const obj3 = {};
  if (next) {
    const progress3 = next.progress;
    const obj4 = { inputRange: ["Text", "lc"] };
    const items4 = [0.229, 0.02 * screen.height * -1];
    obj4.outputRange = items4;
    obj4.extrapolate = "clamp";
    num = callback(progress3.interpolate(obj4), inverted);
  }
  obj3.translateY = num;
  items3[1] = obj3;
  obj1.transform = items3;
  obj.cardStyle = obj1;
  const obj2 = { translateY: callback(progress2.interpolate({ inputRange: ["Text", "lc"], outputRange: items2, extrapolate: "clamp" }), inverted) };
  const progress4 = current.progress;
  obj.overlayStyle = { opacity: progress4.interpolate({ inputRange: ["String", "construct", "isArray"], outputRange: ["updateWith", "headerBarSeparator", "usePendingRequestCount"], extrapolate: "clamp" }) };
  return obj;
};
export const forScaleFromCenterAndroid = function forScaleFromCenterAndroid(closing) {
  let current;
  let next;
  ({ current, next } = closing);
  const progress = current.progress;
  let num = 0;
  if (next) {
    const progress2 = next.progress;
    let obj = { inputRange: ["Text", "lc"], outputRange: ["Text", "lc"], extrapolate: "clamp" };
    num = progress2.interpolate(obj);
  }
  const tmpResult = closure_2(progress.interpolate({ inputRange: ["Text", "lc"], outputRange: ["Text", "lc"], extrapolate: "clamp" }), num);
  obj = {};
  obj = { opacity: tmpResult.interpolate({ inputRange: ["E2EE_USER_VERIFY_MODAL", "INVALID_ACCESS_ERR", "onSelectFont", null, null, null, null], outputRange: [] }) };
  const obj1 = {};
  const progress3 = current.progress;
  const interpolateResult = progress.interpolate({ inputRange: ["Text", "lc"], outputRange: ["Text", "lc"], extrapolate: "clamp" });
  const tmp = closure_2;
  const tmp3 = importDefault(dependencyMap[1]);
  obj1.scale = tmp3(closing.closing, progress3.interpolate({ inputRange: ["Text", "lc"], outputRange: [1070977777, 1065151889], extrapolate: "clamp" }), tmpResult.interpolate({ inputRange: [true, true, true], outputRange: [-0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001728457148418828, -4310086068234.3613, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020871549900078875] }));
  const items = [obj1];
  obj.transform = items;
  obj.cardStyle = obj;
  return obj;
};
export const forBottomSheetAndroid = function forBottomSheetAndroid(current) {
  let closing;
  let inverted;
  current = current.current;
  const progress = current.progress;
  const items = [0.8 * current.layouts.screen.height, 0];
  ({ inverted, closing } = current);
  let obj = {};
  obj = {};
  const progress2 = current.progress;
  const tmp = callback(progress.interpolate({ inputRange: ["Text", "lc"], outputRange: items, extrapolate: "clamp" }), inverted);
  obj.opacity = importDefault(dependencyMap[1])(closing, current.progress, progress2.interpolate({ inputRange: ["Text", "lc"], outputRange: ["Text", "lc"], extrapolate: "clamp" }));
  const items1 = [{ translateY: tmp }];
  obj.transform = items1;
  obj.cardStyle = obj;
  obj = { opacity: progress3.interpolate({ inputRange: ["Text", "lc"], outputRange: [-520405018, 1431658495], extrapolate: "clamp" }) };
  const progress3 = current.progress;
  obj.overlayStyle = obj;
  return obj;
};
export const forFadeFromCenter = function forFadeFromCenter(current) {
  const progress = current.current.progress;
  let obj = {};
  obj = { opacity: progress.interpolate({ inputRange: ["SAFETY_SC_FILTERS_SEXUAL_MEDIA", "itemInner", "available_regions", "start_id"], outputRange: [null, null, null, null] }) };
  obj.cardStyle = obj;
  obj = { opacity: progress.interpolate({ inputRange: ["Text", "lc"], outputRange: ["width", "height"], extrapolate: "clamp" }) };
  obj.overlayStyle = obj;
  return obj;
};
export function forNoAnimation() {
  return {};
}
