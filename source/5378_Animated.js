// Module ID: 5378
// Function ID: 45937
// Name: Animated
// Dependencies: []
// Exports: default

// Module 5378 (Animated)
let Platform;
let Pressable;
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
const Animated = tmp2.Animated;
const Easing = tmp2.Easing;
({ Platform, Pressable } = tmp2);
const jsx = arg1(dependencyMap[4]).jsx;
let closure_9 = Animated.createAnimatedComponent(Pressable);
let closure_10 = Platform.Version >= 21;

export default function PlatformPressable(android_ripple) {
  let pressColor;
  let pressOpacity;
  ({ onPressIn: closure_0, onPressOut: closure_1, pressColor, pressOpacity } = android_ripple);
  let num = 0.3;
  if (undefined !== pressOpacity) {
    num = pressOpacity;
  }
  let closure_2 = num;
  let obj = arg1(dependencyMap[5]);
  let num2 = 1;
  const first = callback(React.useState(() => {
    const value = new closure_6.Value(1);
    return value;
  }), 1)[0];
  const callback = first;
  function animateTo(toValue, closure_2) {
    if (!closure_10) {
      const obj = { toValue, duration: closure_2, easing: closure_7.inOut(closure_7.quad), useNativeDriver: true };
      closure_6.timing(first, obj).start();
      const timingResult = closure_6.timing(first, obj);
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
  return <closure_9 {...Object.assign(obj, animateTo(arg0, closure_2))} />;
};
