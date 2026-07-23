// Module ID: 5543
// Function ID: 47119
// Name: Animated
// Dependencies: [57, 29, 31, 27, 33, 1457]
// Exports: default

// Module 5543 (Animated)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let Pressable;
const require = arg1;
let closure_2 = ["onPressIn", "onPressOut", "android_ripple", "pressColor", "pressOpacity", "style"];
const Animated = get_ActivityIndicator.Animated;
const Easing = get_ActivityIndicator.Easing;
({ Platform, Pressable } = get_ActivityIndicator);
let closure_9 = Animated.createAnimatedComponent(Pressable);
let closure_10 = Platform.Version >= 21;

export default function PlatformPressable(android_ripple) {
  let dependencyMap;
  let pressColor;
  let pressOpacity;
  let require;
  ({ onPressIn: require, onPressOut: dependencyMap, pressColor, pressOpacity } = android_ripple);
  let num = 0.3;
  if (undefined !== pressOpacity) {
    num = pressOpacity;
  }
  let obj = require(1457) /* Link */;
  let num2 = 1;
  first = first(React.useState(() => {
    const value = new outer1_6.Value(1);
    return value;
  }), 1)[0];
  function animateTo(toValue, duration) {
    if (!outer1_10) {
      const obj = { toValue, duration, easing: outer1_7.inOut(outer1_7.quad), useNativeDriver: true };
      outer1_6.timing(first, obj).start();
      const timingResult = outer1_6.timing(first, obj);
    }
  }
  obj = {
    onPressIn: function handlePressIn(arg0) {
      animateTo(num, 0);
      if (null != callback) {
        callback(arg0);
      }
    },
    onPressOut: function handlePressOut(arg0) {
      animateTo(1, 200);
      if (null != callback2) {
        callback2(arg0);
      }
    }
  };
  let merged;
  if (closure_10) {
    obj = {};
    if (undefined === pressColor) {
      let str = "rgba(0, 0, 0, .32)";
      if (obj.useTheme().dark) {
        str = "rgba(255, 255, 255, .32)";
      }
      pressColor = str;
    }
    obj.color = pressColor;
    merged = Object.assign(obj, android_ripple.android_ripple);
  }
  obj.android_ripple = merged;
  const obj1 = {};
  if (!closure_10) {
    num2 = first;
  }
  obj1.opacity = num2;
  const items = [obj1, android_ripple.style];
  obj.style = items;
  return <closure_9 {...Object.assign(obj, animateTo(arg0, num))} />;
};
