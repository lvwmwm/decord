// Module ID: 1871
// Function ID: 1872
// Dependencies: [19, 21, 1863, 1864, 1869, 1836, 1862]
// Exports: default

// Module 1871
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardController2 from "KeyboardController" /* 1836 */;
import _modDef1863 from "module_1863" /* 1863 */;
import _modDef1864 from "module_1864" /* 1864 */;

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
    button = _modDef1863;
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = _modDef1864;
  }
  const obj = onPress(1869);
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
  return <button accessibilityHint="Moves focus to the previous field" accessibilityLabel="Previous" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={tmp5(1862).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS} theme={theme} onPress={tmp8}>{children}</button>;
};
