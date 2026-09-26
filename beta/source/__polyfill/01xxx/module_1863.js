// Module ID: 1863
// Function ID: 1864
// Dependencies: [19, 21, 1856, 1857, 1862, 1829, 1855]
// Exports: default

// Module 1863
import _mod1829 from "module_1829" /* 1829 */;
import disabledDefault from "disabled" /* 1856 */;
import _modDef1857 from "module_1857" /* 1857 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(19).useCallback;
const jsx = fn(21).jsx;

export default function _default(icon) {
  ({ children, onPress } = icon);
  ({ disabled, button } = icon);
  ({ rippleRadius, style } = icon);
  if (button === undefined) {
    button = disabledDefault;
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = _modDef1857;
  }
  const toolbarContext = onPress(1862).useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isNextDisabled;
  }
  const items = [onPress];
  const obj2 = { accessibilityHint: "Moves focus to the next field", accessibilityLabel: "Next", disabled, rippleRadius, style, testID: null, theme: null, onPress: null, children: null };
  const obj = onPress(1862);
  const tmp5 = onPress;
  obj2.testID = tmp5(1855).TEST_ID_KEYBOARD_TOOLBAR_NEXT;
  obj2.theme = theme;
  obj2.onPress = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = _mod1829.KeyboardController;
      KeyboardController.setFocusTo("next");
    }
  }, items);
  if (children == null) {
    const obj3 = { disabled, theme, type: "next" };
    children = tmp9(icon, obj3);
  }
  obj2.children = children;
  return <button accessibilityHint="Moves focus to the next field" accessibilityLabel="Next" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={null} theme={null} onPress={null}>{null}</button>;
};
