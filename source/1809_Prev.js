// Module ID: 1809
// Function ID: 19932
// Name: Prev
// Dependencies: []
// Exports: default

// Module 1809 (Prev)
importDefault(dependencyMap[0]);
arg1(dependencyMap[0]).useCallback;
const jsx = arg1(dependencyMap[1]).jsx;

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
    props: null,
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
