// Module ID: 1808
// Function ID: 19929
// Name: Next
// Dependencies: []
// Exports: default

// Module 1808 (Next)
importDefault(dependencyMap[0]);
arg1(dependencyMap[0]).useCallback;
const jsx = arg1(dependencyMap[1]).jsx;

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
