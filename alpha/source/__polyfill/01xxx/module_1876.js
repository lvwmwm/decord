// Module ID: 1876
// Function ID: 1877
// Dependencies: [19, 21, 1869, 1870, 1875, 1842, 1868]
// Exports: default

// Module 1876
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardController2 from "KeyboardController" /* 1842 */;
import _modDef1869 from "module_1869" /* 1869 */;
import _modDef1870 from "module_1870" /* 1870 */;

const useCallback = react2.useCallback;
const jsx = Fragment.jsx;

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
    const tmp = importDefault;
    button = _modDef1869;
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = _modDef1870;
  }
  const obj = onPress(1875);
  const toolbarContext = obj.useToolbarContext();
  const theme = toolbarContext.theme;
  const tmp5 = onPress;
  if (disabled == null) {
    disabled = toolbarContext.isNextDisabled;
  }
  const items = [onPress];
  const tmp8 = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = KeyboardController2.KeyboardController;
      KeyboardController.setFocusTo("next");
    }
  }, items);
  if (children == null) {
    const obj3 = { disabled, theme, type: "next" };
    children = tmp9(icon, obj3);
  }
  return <button accessibilityHint="Moves focus to the next field" accessibilityLabel="Next" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={tmp5(1868).TEST_ID_KEYBOARD_TOOLBAR_NEXT} theme={theme} onPress={tmp8}>{children}</button>;
};
