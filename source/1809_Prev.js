// Module ID: 1809
// Function ID: 19937
// Name: Prev
// Dependencies: [27, 477, 1821, 2, 648, 2, 1212]
// Exports: default

// Module 1809 (Prev)
import "get ActivityIndicator";
import { jsx } from "module_477";

require("get ActivityIndicator").useCallback;

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
  const arg1 = onPress;
  ({ disabled, button } = icon);
  ({ rippleRadius, style } = icon);
  if (undefined === button) {
    button = importDefault(dependencyMap[2]);
  }
  icon = icon.icon;
  if (undefined === icon) {
    icon = importDefault(dependencyMap[3]);
  }
  let obj = arg1(dependencyMap[4]);
  const toolbarContext = obj.useToolbarContext();
  ({ theme, isPrevDisabled } = toolbarContext);
  if (null != disabled) {
    isPrevDisabled = disabled;
  }
  const items = [onPress];
  obj = {
    "Null": null,
    "Null": null,
    disabled: isPrevDisabled,
    rippleRadius,
    style,
    testID: arg1(dependencyMap[6]).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS,
    theme,
    onPress: useCallback((isDefaultPrevented) => {
      if (null != onPress) {
        onPress(isDefaultPrevented);
      }
      if (!isDefaultPrevented.isDefaultPrevented()) {
        const KeyboardController = onPress(closure_2[5]).KeyboardController;
        KeyboardController.setFocusTo("prev");
      }
    }, items)
  };
  if (null == children) {
    obj = { disabled: isPrevDisabled, theme, type: "prev" };
    children = <icon {...obj} />;
  }
  obj.children = children;
  return <button {...obj} />;
};
