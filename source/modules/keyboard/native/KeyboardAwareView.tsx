// Module ID: 5585
// Function ID: 47387
// Name: getKeyboardHeightWithOffset
// Dependencies: []

// Module 5585 (getKeyboardHeightWithOffset)
function getKeyboardHeightWithOffset(style) {
  let systemKeyboardHeight = arg1(dependencyMap[5]).getSystemKeyboardHeight();
  if (0 === systemKeyboardHeight) {
    const keyboardType = arg1(dependencyMap[6]).getKeyboardType();
    let num3 = 0;
    if (keyboardType !== arg1(dependencyMap[7]).KeyboardTypes.SYSTEM) {
      num3 = arg1(dependencyMap[8]).getCustomKeyboardHeight();
      const obj3 = arg1(dependencyMap[8]);
    }
    systemKeyboardHeight = num3;
    const obj2 = arg1(dependencyMap[6]);
  }
  return Math.max(0, systemKeyboardHeight + style);
}
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_4, StyleSheet: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
const tmp2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function KeyboardAwareView(style) {
  let children;
  let pointerEvents;
  style = style.style;
  const arg1 = style;
  let flag = style.animated;
  ({ children, pointerEvents } = style);
  if (flag === undefined) {
    flag = true;
  }
  const dependencyMap = flag;
  let num = style.keyboardHeightOffset;
  if (num === undefined) {
    num = 0;
  }
  const callback = num;
  let importAllResult;
  let first;
  let closure_5;
  let closure_6;
  const ref = importAllResult.useRef(getKeyboardHeightWithOffset(num));
  importAllResult = ref;
  const tmp2 = callback(importAllResult.useState(ref.current), 2);
  first = tmp2[0];
  closure_5 = tmp2[1];
  const items = [num];
  const effect = importAllResult.useEffect(() => ref(() => {
    const tmp = callback2(closure_2);
    if (ref.current !== tmp) {
      ref.current = tmp;
      callback(tmp);
    }
  }), items);
  closure_6 = importAllResult.useRef(false);
  const items1 = [flag, first];
  const effect1 = importAllResult.useEffect(() => {
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
  return <first style={importAllResult.useMemo(() => {
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
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/keyboard/native/KeyboardAwareView.tsx");

export default memoResult;
