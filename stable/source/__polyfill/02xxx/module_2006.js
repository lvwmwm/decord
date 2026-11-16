// Module ID: 2006
// Function ID: 2007
// Dependencies: [19, 21, 1998, 1999, 2004, 1971, 1997]
// Exports: default

// Module 2006
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardController2 from "KeyboardController" /* 1971 */;
import _modDef1998 from "module_1998" /* 1998 */;
import _modDef1999 from "module_1999" /* 1999 */;

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
    button = _modDef1998;
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = _modDef1999;
  }
  const obj = onPress(2004);
  const toolbarContext = obj.useToolbarContext();
  const theme = toolbarContext.theme;
  const tmp5 = onPress;
  if (disabled == null) {
    disabled = toolbarContext.isPrevDisabled;
  }
  const items = [onPress];
  const tmp8 = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = KeyboardController2.KeyboardController;
      KeyboardController.setFocusTo("prev");
    }
  }, items);
  if (children == null) {
    const obj3 = { disabled, theme, type: "prev" };
    children = tmp9(icon, obj3);
  }
  return <button accessibilityHint="Moves focus to the previous field" accessibilityLabel="Previous" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={tmp5(1997).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS} theme={theme} onPress={tmp8}>{children}</button>;
};
