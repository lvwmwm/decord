// Module ID: 1801
// Function ID: 19913
// Name: ButtonAndroid
// Dependencies: [31, 27, 33, 1776]
// Exports: default

// Module 1801 (ButtonAndroid)
import "result";
import { useMemo } from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let TouchableOpacity;
let closure_3;
let closure_4;
const require = arg1;
({ Platform, TouchableNativeFeedback: closure_3, TouchableOpacity, View: closure_4 } = get_ActivityIndicator);

export default function ButtonAndroid(disabled) {
  let accessibilityHint;
  let accessibilityLabel;
  let children;
  let onPress;
  let style;
  let testID;
  let theme;
  disabled = disabled.disabled;
  const rippleRadius = disabled.rippleRadius;
  let num = 18;
  ({ children, onPress, accessibilityLabel, accessibilityHint, testID } = disabled);
  if (undefined !== rippleRadius) {
    num = rippleRadius;
  }
  ({ style, theme } = disabled);
  let obj = disabled(num[3]);
  const keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  const items = [disabled];
  const items1 = [keyboardState, num, theme];
  obj = { accessibilityHint, accessibilityLabel, accessibilityRole: "button", accessibilityState: theme(() => ({ disabled }), items), background: theme(() => keyboardState.Ripple(theme[keyboardState].ripple, true, num), items1), style, testID, onPress, children: <closure_4 style={style}>{children}</closure_4> };
  return <keyboardState accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityRole="button" accessibilityState={theme(() => ({ disabled }), items)} background={theme(() => keyboardState.Ripple(theme[keyboardState].ripple, true, num), items1)} style={style} testID={testID} onPress={onPress}><closure_4 style={style}>{children}</closure_4></keyboardState>;
};
