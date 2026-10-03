// Module ID: 1869
// Function ID: 1870
// Dependencies: [19, 21, 1862, 1863, 1868, 1835, 1861]
// Exports: default

// Module 1869
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardController2 from "KeyboardController" /* 1835 */;
import _modDef1862 from "module_1862" /* 1862 */;
import _modDef1863 from "module_1863" /* 1863 */;

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
    button = _modDef1862;
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = _modDef1863;
  }
  const obj = onPress(1868);
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
  return <button accessibilityHint="Moves focus to the next field" accessibilityLabel="Next" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={tmp5(1861).TEST_ID_KEYBOARD_TOOLBAR_NEXT} theme={theme} onPress={tmp8}>{children}</button>;
};
