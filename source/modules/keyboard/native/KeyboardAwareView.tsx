// Module ID: 5585
// Function ID: 47415
// Name: getKeyboardHeightWithOffset
// Dependencies: [57, 31, 27, 1452, 33, 1823, 3996, 1555, 5163, 5161, 5162, 2]

// Module 5585 (getKeyboardHeightWithOffset)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
function getKeyboardHeightWithOffset(style) {
  let systemKeyboardHeight = require(1823) /* useSystemKeyboardHeight */.getSystemKeyboardHeight();
  if (0 === systemKeyboardHeight) {
    const keyboardType = require(3996) /* getKeyboardContextForType */.getKeyboardType();
    let num3 = 0;
    if (keyboardType !== require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
      num3 = require(5163) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
      const obj3 = require(5163) /* useCustomKeyboardHeight */;
    }
    systemKeyboardHeight = num3;
    const obj2 = require(3996) /* getKeyboardContextForType */;
  }
  return Math.max(0, systemKeyboardHeight + style);
}
({ View: closure_4, StyleSheet: closure_5 } = get_ActivityIndicator);
const memoResult = importAllResult.memo(function KeyboardAwareView(style) {
  let children;
  let pointerEvents;
  style = style.style;
  let flag = style.animated;
  ({ children, pointerEvents } = style);
  if (flag === undefined) {
    flag = true;
  }
  let num = style.keyboardHeightOffset;
  if (num === undefined) {
    num = 0;
  }
  let ref;
  let first;
  let closure_5;
  let subscribeToKeyboardUIStore;
  ref = ref.useRef(getKeyboardHeightWithOffset(num));
  const tmp2 = num(ref.useState(ref.current), 2);
  first = tmp2[0];
  closure_5 = tmp2[1];
  const items = [num];
  const effect = ref.useEffect(() => ref(() => {
    const tmp = outer2_8(outer1_2);
    if (outer1_3.current !== tmp) {
      outer1_3.current = tmp;
      outer1_5(tmp);
    }
  }), items);
  subscribeToKeyboardUIStore = ref.useRef(false);
  const items1 = [flag, first];
  const effect1 = ref.useEffect(() => {
    if (ref.current) {
      const keyboardDuration = style(flag[9]).getKeyboardDuration();
      let tmp5 = flag;
      if (flag) {
        tmp5 = keyboardDuration > 0;
      }
      if (tmp5) {
        const result = style(flag[10]).DeprecatedLayoutAnimationKeyboard(keyboardDuration);
        const obj2 = style(flag[10]);
      }
      const obj = style(flag[9]);
    } else {
      ref.current = true;
    }
  }, items1);
  const items2 = [first, style];
  return <first style={ref.useMemo(() => {
    if (null == style) {
      let obj = { marginBottom: first };
      return obj;
    } else {
      const flattenResult = closure_5.flatten(style);
      if ("number" === typeof flattenResult.marginBottom) {
        obj = {};
        const merged = Object.assign(flattenResult);
        obj["marginBottom"] = flattenResult.marginBottom + first;
      } else {
        obj = {};
        const merged1 = Object.assign(flattenResult);
        obj["marginBottom"] = first;
      }
      return obj;
    }
  }, items2)} pointerEvents={pointerEvents}>{children}</first>;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/keyboard/native/KeyboardAwareView.tsx");

export default memoResult;
