// Module ID: 13149
// Function ID: 101276
// Name: getInputRangeFromIndexes
// Dependencies: [77, 27]
// Exports: defaultAnimatedStyles, defaultScrollInterpolator, shiftAnimatedStyles, stackAnimatedStyles, stackScrollInterpolator, tinderAnimatedStyles, tinderScrollInterpolator

// Module 13149 (getInputRangeFromIndexes)
import _defineProperty from "_defineProperty";
import { Platform } from "get ActivityIndicator";

function getInputRangeFromIndexes(items, _getCustomIndexResult, props) {
  let length;
  items = [];
  let num = 0;
  if (0 < items.length) {
    do {
      let arr = items.push((_getCustomIndexResult - items[num]) * tmp);
      num = num + 1;
      length = items.length;
    } while (num < length);
  }
  return items;
}

export { getInputRangeFromIndexes };
export const defaultScrollInterpolator = function defaultScrollInterpolator(_getCustomIndexResult, props) {
  const items = [1, 0, -1];
  return { inputRange: getInputRangeFromIndexes(items, _getCustomIndexResult, props), outputRange: [0, 1, 0] };
};
export const defaultAnimatedStyles = function defaultAnimatedStyles(index, interpolate, props) {
  if (props.inactiveSlideOpacity < 1) {
    let obj = {};
    obj = { inputRange: [0, 1] };
    const items = [props.inactiveSlideOpacity, 1];
    obj.outputRange = items;
    obj.opacity = interpolate.interpolate(obj);
  }
  if (props.inactiveSlideScale < 1) {
    obj = {};
    const obj1 = {};
    const obj2 = { inputRange: [0, 1] };
    const items1 = [props.inactiveSlideScale, 1];
    obj2.outputRange = items1;
    obj1.scale = interpolate.interpolate(obj2);
    const items2 = [obj1];
    obj.transform = items2;
  }
  return Object.assign({}, {}, {});
};
export const shiftAnimatedStyles = function shiftAnimatedStyles(index, interpolate, props) {
  if (props.inactiveSlideOpacity < 1) {
    let obj = {};
    obj = { inputRange: [0, 1] };
    const items = [props.inactiveSlideOpacity, 1];
    obj.outputRange = items;
    obj.opacity = interpolate.interpolate(obj);
  }
  if (props.inactiveSlideScale < 1) {
    obj = {};
    const obj1 = { inputRange: [0, 1] };
    const items1 = [props.inactiveSlideScale, 1];
    obj1.outputRange = items1;
    obj.scale = interpolate.interpolate(obj1);
  }
  if (0 !== props.inactiveSlideShift) {
    let str = "translateY";
    if (props.vertical) {
      str = "translateX";
    }
    const obj2 = { inputRange: [0, 1] };
    const items2 = [props.inactiveSlideShift, 0];
    obj2.outputRange = items2;
    callback({}, str, interpolate.interpolate(obj2));
  }
  const obj3 = {};
  const items3 = [Object.assign({}, {}), Object.assign({}, {})];
  obj3.transform = items3;
  return Object.assign({}, {}, obj3);
};
export const stackScrollInterpolator = function stackScrollInterpolator(_getCustomIndexResult, props) {
  const items = [1, 0, -1, -2, -3];
  return { inputRange: getInputRangeFromIndexes(items, _getCustomIndexResult, props), outputRange: items };
};
export const stackAnimatedStyles = function stackAnimatedStyles(index, interpolate, props, layoutCardOffset) {
  let num = layoutCardOffset;
  const tmp = props.vertical ? props.itemHeight : props.itemWidth;
  const getInputRangeFromIndexes = tmp;
  let str = "translateX";
  if (props.vertical) {
    str = "translateY";
  }
  if (layoutCardOffset) {
    num = layoutCardOffset;
  } else {
    num = 18;
  }
  function getTranslateFromScale(arg0, arg1) {
    const diff = -Math.round(closure_1 * (1 / arg1 * arg0)) - Math.round((closure_1 - closure_1 * arg1) / 2);
    return diff - Math.round(num * Math.abs(arg0) / arg1);
  }
  let obj = 1 === props.inactiveSlideOpacity ? [1, 1, 1, 0] : [1, 0.75, 0.5, 0];
  obj = {};
  obj = { inputRange: items, outputRange: obj.reverse(), extrapolate: "clamp" };
  items = [-3, -2, -1, 0];
  obj.opacity = interpolate.interpolate(obj);
  const items1 = [-2, -1, 0, 1];
  const items2 = [{ scale: interpolate.interpolate({ inputRange: items1, outputRange: [0.8, 0.9, 1, 0.9], extrapolate: "clamp" }) }, ];
  const obj2 = { inputRange: items3 };
  items3 = [-3, -2, -1, 0, 1];
  const items4 = [getTranslateFromScale(-3, 0.8), getTranslateFromScale(-2, 0.8), getTranslateFromScale(-1, 0.9), 0, 0.5 * tmp];
  obj2.outputRange = items4;
  obj2.extrapolate = "clamp";
  items2[1] = num({}, str, interpolate.interpolate(obj2));
  obj.transform = items2;
  return obj;
};
export const tinderScrollInterpolator = function tinderScrollInterpolator(_getCustomIndexResult, props) {
  const items = [1, 0, -1, -2, -3];
  return { inputRange: getInputRangeFromIndexes(items, _getCustomIndexResult, props), outputRange: items };
};
export const tinderAnimatedStyles = function tinderAnimatedStyles(index, interpolate, props, layoutCardOffset) {
  let num = layoutCardOffset;
  const tmp = props.vertical ? props.itemHeight : props.itemWidth;
  const getInputRangeFromIndexes = tmp;
  let str = "translateX";
  if (props.vertical) {
    str = "translateY";
  }
  let str2 = "translateY";
  if (props.vertical) {
    str2 = "translateX";
  }
  if (layoutCardOffset) {
    num = layoutCardOffset;
  } else {
    num = 9;
  }
  function getMainTranslateFromScale(arg0, arg1) {
    return -Math.round(closure_1 * (1 / arg1 * arg0));
  }
  function getSecondaryTranslateFromScale(arg0, arg1) {
    return Math.round(num * Math.abs(arg0) / arg1);
  }
  let obj = { opacity: interpolate.interpolate({ inputRange: items, outputRange: [0, 0.92, 0.92, 1, 0], extrapolate: "clamp" }) };
  items = [-3, -2, -1, 0, 1];
  obj = { scale: interpolate.interpolate({ inputRange: items1, outputRange: items2, extrapolate: "clamp" }) };
  items1 = [-3, -2, -1, 0];
  items2 = [0.88, 0.92, 0.96, 1];
  const items3 = [obj, , , ];
  obj = { rotate: interpolate.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "22deg"], extrapolate: "clamp" }) };
  items3[1] = obj;
  const obj1 = { inputRange: items4 };
  items4 = [-3, -2, -1, 0, 1];
  const items5 = [getMainTranslateFromScale(-3, 0.88), getMainTranslateFromScale(-2, 0.92), getMainTranslateFromScale(-1, 0.96), 0, 1.1 * tmp];
  obj1.outputRange = items5;
  obj1.extrapolate = "clamp";
  items3[2] = num({}, str, interpolate.interpolate(obj1));
  const obj2 = { inputRange: items6 };
  items6 = [-3, -2, -1, 0];
  const items7 = [getSecondaryTranslateFromScale(-3, 0.88), getSecondaryTranslateFromScale(-2, 0.92), getSecondaryTranslateFromScale(-1, 0.96), 0];
  obj2.outputRange = items7;
  obj2.extrapolate = "clamp";
  items3[3] = num({}, str2, interpolate.interpolate(obj2));
  obj.transform = items3;
  return obj;
};
