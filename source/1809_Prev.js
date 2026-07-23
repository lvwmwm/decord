// Module ID: 1809
// Function ID: 19938
// Name: Prev
// Dependencies: [31, 33, 1801, 1802, 1807, 1774, 1800]
// Exports: default

// Module 1809 (Prev)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
require("result").useCallback;

export default function Prev(icon) {
  let button;
  let children;
  let disabled;
  let isPrevDisabled;
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
  ({ theme, isPrevDisabled } = toolbarContext);
  if (null != disabled) {
    isPrevDisabled = disabled;
  }
  const items = [onPress];
  obj = {
    accessibilityHint: "Moves focus to the previous field",
    accessibilityLabel: "Previous",
    disabled: isPrevDisabled,
    rippleRadius,
    style,
    testID: onPress(1800).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS,
    theme,
    onPress: useCallback((isDefaultPrevented) => {
      if (null != onPress) {
        onPress(isDefaultPrevented);
      }
      if (!isDefaultPrevented.isDefaultPrevented()) {
        const KeyboardController = onPress(outer1_2[5]).KeyboardController;
        KeyboardController.setFocusTo("prev");
      }
    }, items)
  };
  if (null == children) {
    obj = { disabled: isPrevDisabled, theme, type: "prev" };
    children = <icon disabled={isPrevDisabled} theme={theme} type="prev" />;
  }
  obj.children = children;
  return <button accessibilityHint="Moves focus to the previous field" accessibilityLabel="Previous" disabled={isPrevDisabled} rippleRadius={rippleRadius} style={style} testID={onPress(1800).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS} theme={theme} onPress={useCallback((isDefaultPrevented) => {
    if (null != onPress) {
      onPress(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = onPress(outer1_2[5]).KeyboardController;
      KeyboardController.setFocusTo("prev");
    }
  }, items)} />;
};
