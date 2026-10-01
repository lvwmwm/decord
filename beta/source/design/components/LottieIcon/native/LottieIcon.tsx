// Module ID: 9405
// Function ID: 9406
// Name: LottieIcon
// Dependencies: [19, 17, 21, 576, 6038, 4550, 4531, 5842, 2]

// Module 9405 (LottieIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import LottieViewDefault from "LottieView" /* 5842 */;
import IconSize from "IconSize" /* 6038 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let dotLottie;

let tmp3;
const useToken = tmp3(4531);
const react2 = tmp3(4550);
const View = react_native.View;
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((dotLottie, ref) => {
  let closure_129_0;
  let height;
  let layers;
  let markers;
  let useLottieDefaultColors;
  let width;
  ({ animation: closure_129_0, size } = dotLottie);
  dotLottie = dotLottie.dotLottie;
  if (size === undefined) {
    size = "md";
  }
  let INTERACTIVE_TEXT_DEFAULT = dotLottie.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    let tmp = importDefault;
    let tmp2 = dependencyMap;
    INTERACTIVE_TEXT_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
  }
  let num = dotLottie.opacity;
  if (num === undefined) {
    num = 1;
  }
  ({ markers, layers } = dotLottie);
  const autoPlay = dotLottie.autoPlay;
  let sum1;
  ref = undefined;
  let enabled;
  let token;
  let callback;
  const tmp3 = require;
  ({ width, height, useLottieDefaultColors } = dotLottie);
  let tmp5 = IconSize.ICON_SIZE[size];
  const found = markers.find((name) => name.name === closure_1_0);
  const start = found.start;
  const sum = start + found.duration;
  let c4 = sum;
  const found1 = markers.find((name) => "easteregg" === name.name);
  let num2;
  if (found1 != null) {
    num2 = found1.start;
  }
  if (num2 == null) {
    num2 = -1;
  }
  let num3;
  if (found1 != null) {
    num3 = found1.duration;
  }
  if (num3 == null) {
    num3 = -1;
  }
  sum1 = num2 + num3;
  ref = react.useRef(null);
  enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  let tmp12 = tmp5;
  if ("custom" === size) {
    tmp12 = width;
  }
  const size1 = { width: tmp12, height: tmp5 };
  if ("custom" === size) {
    tmp5 = height;
  }
  const tmp3Result = useToken;
  token = tmp3Result.useToken(INTERACTIVE_TEXT_DEFAULT);
  const items = [token, layers];
  const items1 = [enabled, start, sum, num2, sum1];
  const memo = obj.useMemo(() => {
    let color;
    let mapped;
    if (null != token) {
      mapped = layers.map((keypath) => ({ keypath, color }));
    }
    return mapped;
  }, items);
  callback = obj.useCallback(() => {
    const tmp2 = enabled;
    if (tmp2) {
      const current3 = ref.current;
      if (current3 != null) {
        current3.play(c4, c4);
      }
    } else {
      if (tmp) {
        if (num2 >= 0) {
          const current2 = ref.current;
          if (current2 != null) {
            current2.play(tmp3, sum1);
          }
        }
      }
      const current = ref.current;
      if (current != null) {
        current.play(start, c4);
      }
    }
  }, items1);
  const items2 = [callback];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
    play() {
      return callback();
    }
  }), items2);
  const items3 = [start, autoPlay, callback];
  const callback1 = obj.useCallback(() => {
    const tmp = autoPlay;
    if (tmp) {
      callback();
    } else {
      const current = ref.current;
      if (current != null) {
        current.play(start, start);
      }
    }
  }, items3);
  LottieViewDefault;
  const items4 = [size1, { opacity: num }];
  return <tmp19 style={size1}>{null}</tmp19>;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/LottieIcon/native/LottieIcon.tsx");

export const LottieIcon = forwardRefResult;
