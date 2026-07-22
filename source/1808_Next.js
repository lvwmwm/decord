// Module ID: 1808
// Function ID: 19934
// Name: Next
// Dependencies: [27, 477, 1821, 2, 648, 2, 1212]
// Exports: default

// Module 1808 (Next)
import "get ActivityIndicator";
import { jsx } from "module_477";

require("get ActivityIndicator").useCallback;

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
  ({ theme, isNextDisabled } = toolbarContext);
  if (null != disabled) {
    isNextDisabled = disabled;
  }
  const items = [onPress];
  obj = {
    disabled: isNextDisabled,
    rippleRadius,
    style,
    testID: arg1(dependencyMap[6]).TEST_ID_KEYBOARD_TOOLBAR_NEXT,
    theme,
    onPress: useCallback((isDefaultPrevented) => {
      if (null != onPress) {
        onPress(isDefaultPrevented);
      }
      if (!isDefaultPrevented.isDefaultPrevented()) {
        const KeyboardController = onPress(closure_2[5]).KeyboardController;
        KeyboardController.setFocusTo("next");
      }
    }, items)
  };
  if (null == children) {
    obj = { disabled: isNextDisabled, theme, type: "next" };
    children = <icon {...obj} />;
  }
  obj.children = children;
  return <button {...obj} />;
};
