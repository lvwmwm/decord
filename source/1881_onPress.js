// Module ID: 1881
// Function ID: 1882
// Name: onPress
// Dependencies: [19, 21, 1873, 1874, 1879, 1846, 1872]
// Exports: default

// Module 1881 (onPress)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
require("noop").useCallback;

export default function _default(icon) {
  let button;
  let children;
  let disabled;
  let onPress;
  let rippleRadius;
  let style;
  ({ children, onPress } = icon);
  ({ disabled, button } = icon);
  ({ rippleRadius, style } = icon);
  if (button === undefined) {
    button = importDefault(1873);
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = importDefault(1874);
  }
  let obj = onPress(1879);
  const toolbarContext = obj.useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isPrevDisabled;
  }
  const items = [onPress];
  obj = { accessibilityHint: "Moves focus to the previous field", accessibilityLabel: "Previous", disabled, rippleRadius, style, testID: null, theme: null, onPress: null, children: null };
  obj[5] = onPress(1872).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS;
  obj[6] = theme;
  obj[7] = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = onPress(outer1_2[5]).KeyboardController;
      KeyboardController.setFocusTo("prev");
    }
  }, items);
  if (children == null) {
    obj = { disabled: null, theme: null, type: "prev" };
    obj[0] = disabled;
    obj[1] = theme;
    children = tmp9(icon, obj);
  }
  obj[8] = children;
  return <button accessibilityHint="Moves focus to the previous field" accessibilityLabel="Previous" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={null} theme={null} onPress={null}>{null}</button>;
};
