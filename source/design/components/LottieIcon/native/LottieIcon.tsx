// Module ID: 9778
// Function ID: 76012
// Name: LottieIcon
// Dependencies: []

// Module 9778 (LottieIcon)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const forwardRefResult = importAllResult.forwardRef((color) => {
  let height;
  let layers;
  let markers;
  let size;
  let useLottieDefaultColors;
  let width;
  ({ animation: closure_0, size } = color);
  if (size === undefined) {
    size = "md";
  }
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = importDefault(dependencyMap[3]).colors.INTERACTIVE_TEXT_DEFAULT;
  }
  let num2 = color.opacity;
  if (num2 === undefined) {
    num2 = 1;
  }
  ({ markers, layers } = color);
  const importDefault = layers;
  const autoPlay = color.autoPlay;
  const dependencyMap = autoPlay;
  let importAllResult;
  let View;
  let jsx;
  let sum1;
  let ref;
  let enabled;
  let token;
  let callback;
  ({ width, height, useLottieDefaultColors } = color);
  let tmp3 = arg1(dependencyMap[4]).ICON_SIZE[size];
  const found = markers.find((name) => name.name === closure_0);
  let start = found.start;
  importAllResult = start;
  const sum = start + found.duration;
  View = sum;
  const found1 = markers.find((name) => "easteregg" === name.name);
  start = undefined;
  if (null != found1) {
    start = found1.start;
  }
  let num3 = -1;
  let num4 = -1;
  if (null != start) {
    num4 = start;
  }
  jsx = num4;
  let duration;
  if (null != found1) {
    duration = found1.duration;
  }
  if (null != duration) {
    num3 = duration;
  }
  sum1 = num4 + num3;
  ref = importAllResult.useRef(null);
  enabled = importAllResult.useContext(arg1(dependencyMap[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
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
  let obj1 = arg1(dependencyMap[6]);
  token = obj1.useToken(INTERACTIVE_TEXT_DEFAULT);
  const items = [token, layers];
  const items1 = [enabled, start, sum, num4, sum1];
  const memo = importAllResult.useMemo(() => {
    let mapped;
    if (null != token) {
      mapped = layers.map((keypath) => ({ keypath, color: closure_9 }));
    }
    return mapped;
  }, items);
  callback = importAllResult.useCallback(() => {
    if (enabled) {
      const current3 = ref.current;
      if (null != current3) {
        current3.play(sum, sum);
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
        current.play(start, sum);
      }
    }
  }, items1);
  const items2 = [callback];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    play() {
      return callback();
    }
  }), items2);
  const items3 = [start, autoPlay, callback];
  obj = { style: obj };
  const callback1 = importAllResult.useCallback(() => {
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
  obj.children = jsx(importDefault(dependencyMap[7]), obj);
  return <View {...obj} />;
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/LottieIcon/native/LottieIcon.tsx");

export const LottieIcon = forwardRefResult;
