// Module ID: 1882
// Function ID: 1883
// Dependencies: [19, 21, 1875, 1876, 1881, 1848, 1874]
// Exports: default

// Module 1882
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardController2 from "KeyboardController" /* 1848 */;
import _modDef1875 from "module_1875" /* 1875 */;
import _modDef1876 from "module_1876" /* 1876 */;

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
    button = _modDef1875;
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = _modDef1876;
  }
  const obj = onPress(1881);
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
  return <button accessibilityHint="Moves focus to the next field" accessibilityLabel="Next" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={tmp5(1874).TEST_ID_KEYBOARD_TOOLBAR_NEXT} theme={theme} onPress={tmp8}>{children}</button>;
};
