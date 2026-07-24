// Module ID: 9823
// Function ID: 76287
// Name: LottieIcon
// Dependencies: [31, 27, 33, 689, 5511, 3849, 3834, 5454, 2]

// Module 9823 (LottieIcon)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const forwardRefResult = importAllResult.forwardRef((color) => {
  let height;
  let layers;
  let markers;
  let require;
  let size;
  let useLottieDefaultColors;
  let width;
  ({ animation: require, size } = color);
  if (size === undefined) {
    size = "md";
  }
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = layers(autoPlay[3]).colors.INTERACTIVE_TEXT_DEFAULT;
  }
  let num2 = color.opacity;
  if (num2 === undefined) {
    num2 = 1;
  }
  ({ markers, layers } = color);
  autoPlay = color.autoPlay;
  let start;
  let c4;
  let num4;
  let sum1;
  let ref;
  let enabled;
  let token;
  let callback;
  ({ width, height, useLottieDefaultColors } = color);
  let tmp3 = require(autoPlay[4]).ICON_SIZE[size];
  const found = markers.find((name) => name.name === closure_0);
  start = found.start;
  const sum = start + found.duration;
  c4 = sum;
  const found1 = markers.find((name) => "easteregg" === name.name);
  start = undefined;
  if (null != found1) {
    start = found1.start;
  }
  let num3 = -1;
  num4 = -1;
  if (null != start) {
    num4 = start;
  }
  let duration;
  if (null != found1) {
    duration = found1.duration;
  }
  if (null != duration) {
    num3 = duration;
  }
  sum1 = num4 + num3;
  ref = start.useRef(null);
  enabled = start.useContext(require(autoPlay[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj = {};
  let tmp12 = tmp3;
  if ("custom" === size) {
    tmp12 = width;
  }
  obj.width = tmp12;
  if ("custom" === size) {
    tmp3 = height;
  }
  obj.height = tmp3;
  let obj1 = require(autoPlay[6]);
  token = obj1.useToken(INTERACTIVE_TEXT_DEFAULT);
  const items = [token, layers];
  const items1 = [enabled, start, sum, num4, sum1];
  const memo = start.useMemo(() => {
    let mapped;
    if (null != token) {
      mapped = layers.map((keypath) => ({ keypath, color: outer1_9 }));
    }
    return mapped;
  }, items);
  callback = start.useCallback(() => {
    if (enabled) {
      const current3 = ref.current;
      if (null != current3) {
        current3.play(c4, c4);
      }
    } else {
      if (tmp) {
        if (num4 >= 0) {
          const current2 = ref.current;
          if (null != current2) {
            current2.play(num4, sum1);
          }
        }
      }
      const current = ref.current;
      if (null != current) {
        current.play(start, c4);
      }
    }
  }, items1);
  const items2 = [callback];
  const imperativeHandle = start.useImperativeHandle(arg1, () => ({
    play() {
      return outer1_10();
    }
  }), items2);
  const items3 = [start, autoPlay, callback];
  obj = { style: obj };
  const callback1 = start.useCallback(() => {
    if (autoPlay) {
      callback();
    } else {
      const current = ref.current;
      if (null != current) {
        current.play(start, start);
      }
    }
  }, items3);
  obj = { ref, source: color.dotLottie };
  let tmp21;
  if (!useLottieDefaultColors) {
    tmp21 = memo;
  }
  obj.colorFilters = tmp21;
  obj.hardwareAccelerationAndroid = true;
  obj.loop = false;
  obj.onAnimationLoaded = callback1;
  obj.resizeMode = "cover";
  const items4 = [obj, ];
  obj1 = { opacity: num2 };
  items4[1] = obj1;
  obj.style = items4;
  obj.children = num4(layers(autoPlay[7]), obj);
  return num4(c4, obj);
});
const result = require("jsxProd").fileFinishedImporting("design/components/LottieIcon/native/LottieIcon.tsx");

export const LottieIcon = forwardRefResult;
