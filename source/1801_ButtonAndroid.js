// Module ID: 1801
// Function ID: 19906
// Name: ButtonAndroid
// Dependencies: []
// Exports: default

// Module 1801 (ButtonAndroid)
let Platform;
let TouchableOpacity;
importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[0]).useMemo;
({ Platform, TouchableNativeFeedback: closure_3, TouchableOpacity, View: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;

export default function ButtonAndroid(disabled) {
  let accessibilityHint;
  let accessibilityLabel;
  let children;
  let onPress;
  let style;
  let testID;
  let theme;
  disabled = disabled.disabled;
  const arg1 = disabled;
  const rippleRadius = disabled.rippleRadius;
  let num = 18;
  ({ children, onPress, accessibilityLabel, accessibilityHint, testID } = disabled);
  if (undefined !== rippleRadius) {
    num = rippleRadius;
  }
  const dependencyMap = num;
  ({ style, theme } = disabled);
  const useMemo = theme;
  let obj = arg1(dependencyMap[3]);
  const keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  const items = [disabled];
  const items1 = [keyboardState, num, theme];
  obj = { accessibilityHint, accessibilityLabel, accessibilityRole: "button", accessibilityState: useMemo(() => ({ disabled }), items), background: useMemo(() => keyboardState.Ripple(theme[closure_3].ripple, true, num), items1), style, testID, onPress, children: <closure_4 style={style}>{children}</closure_4> };
  return <keyboardState {...obj} />;
};
