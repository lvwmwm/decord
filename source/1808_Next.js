// Module ID: 1808
// Function ID: 19935
// Name: Next
// Dependencies: [31, 33, 1801, 1802, 1807, 1774, 1800]
// Exports: default

// Module 1808 (Next)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
require("result").useCallback;

export default function Next(icon) {
  let button;
  let children;
  let disabled;
  let isNextDisabled;
  let onPress;
  let rippleRadius;
  let style;
  let theme;
  ({ children, onPress } = icon);
  ({ disabled, button } = icon);
  ({ rippleRadius, style } = icon);
  if (undefined === button) {
    button = importDefault(1801);
  }
  icon = icon.icon;
  if (undefined === icon) {
    icon = importDefault(1802);
  }
  let obj = onPress(1807);
  const toolbarContext = obj.useToolbarContext();
  ({ theme, isNextDisabled } = toolbarContext);
  if (null != disabled) {
    isNextDisabled = disabled;
  }
  const items = [onPress];
  obj = {
    accessibilityHint: "Moves focus to the next field",
    accessibilityLabel: "Next",
    disabled: isNextDisabled,
    rippleRadius,
    style,
    testID: onPress(1800).TEST_ID_KEYBOARD_TOOLBAR_NEXT,
    theme,
    onPress: useCallback((isDefaultPrevented) => {
      if (null != onPress) {
        onPress(isDefaultPrevented);
      }
      if (!isDefaultPrevented.isDefaultPrevented()) {
        const KeyboardController = onPress(outer1_2[5]).KeyboardController;
        KeyboardController.setFocusTo("next");
      }
    }, items)
  };
  if (null == children) {
    obj = { disabled: isNextDisabled, theme, type: "next" };
    children = <icon disabled={isNextDisabled} theme={theme} type="next" />;
  }
  obj.children = children;
  return <button accessibilityHint="Moves focus to the next field" accessibilityLabel="Next" disabled={isNextDisabled} rippleRadius={rippleRadius} style={style} testID={onPress(1800).TEST_ID_KEYBOARD_TOOLBAR_NEXT} theme={theme} onPress={useCallback((isDefaultPrevented) => {
    if (null != onPress) {
      onPress(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = onPress(outer1_2[5]).KeyboardController;
      KeyboardController.setFocusTo("next");
    }
  }, items)} />;
};
