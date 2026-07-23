// Module ID: 1806
// Function ID: 19928
// Name: Done
// Dependencies: [31, 27, 33, 1801, 1776, 1807, 1774, 1800]
// Exports: default

// Module 1806 (Done)
import "result";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ useCallback: closure_3, useMemo: closure_4 } = result);
({ StyleSheet, Text: closure_5 } = get_ActivityIndicator);
const styles = StyleSheet.create({ doneButton: { fontWeight: "600", fontSize: 15 }, doneButtonContainer: { marginRight: 16, marginLeft: 8 } });

export default function Done(rippleRadius) {
  let button;
  let children;
  let onPress;
  let text;
  ({ children, onPress } = rippleRadius);
  rippleRadius = rippleRadius.rippleRadius;
  let num = 28;
  if (undefined !== rippleRadius) {
    num = rippleRadius;
  }
  ({ text, button } = rippleRadius);
  if (undefined === button) {
    button = keyboardState(theme[3]);
  }
  let obj = onPress(theme[4]);
  keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  theme = onPress(theme[5]).useToolbarContext().theme;
  let items = [keyboardState, theme];
  const items1 = [onPress];
  const obj2 = onPress(theme[5]);
  obj = { accessibilityHint: "Closes the keyboard", accessibilityLabel: "Done" };
  let str = "Done";
  obj.rippleRadius = num;
  obj.style = doneButtonContainer.doneButtonContainer;
  const tmp4 = callback2(() => {
    const items = [outer1_7.doneButton, { color: theme[keyboardState].primary }];
    return items;
  }, items);
  obj.testID = onPress(theme[7]).TEST_ID_KEYBOARD_TOOLBAR_DONE;
  obj.theme = theme;
  obj.onPress = callback((isDefaultPrevented) => {
    if (null != onPress) {
      onPress(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = onPress(theme[6]).KeyboardController;
      KeyboardController.dismiss();
    }
  }, items1);
  obj = { maxFontSizeMultiplier: 1.3, style: tmp4 };
  if (null != children) {
    text = children;
  }
  if (null != text) {
    str = text;
  }
  obj.children = str;
  obj.children = <closure_5 maxFontSizeMultiplier={1.3} style={tmp4} />;
  return <button maxFontSizeMultiplier={1.3} style={tmp4} />;
};
