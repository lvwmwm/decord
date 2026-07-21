// Module ID: 1806
// Function ID: 19922
// Name: Done
// Dependencies: []
// Exports: default

// Module 1806 (Done)
let StyleSheet;
importDefault(dependencyMap[0]);
({ useCallback: closure_3, useMemo: closure_4 } = arg1(dependencyMap[0]));
const tmp3 = arg1(dependencyMap[0]);
({ StyleSheet, Text: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const styles = StyleSheet.create({ doneButton: { <string:80641536>: 4, <string:80784128>: "guild_recents_dismissed_at" }, doneButtonContainer: {} });

export default function Done(rippleRadius) {
  let button;
  let children;
  let onPress;
  let text;
  ({ children, onPress } = rippleRadius);
  const arg1 = onPress;
  rippleRadius = rippleRadius.rippleRadius;
  let num = 28;
  if (undefined !== rippleRadius) {
    num = rippleRadius;
  }
  ({ text, button } = rippleRadius);
  if (undefined === button) {
    button = importDefault(dependencyMap[3]);
  }
  let obj = arg1(dependencyMap[4]);
  const keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  const importDefault = keyboardState;
  const theme = arg1(dependencyMap[5]).useToolbarContext().theme;
  const dependencyMap = theme;
  const items = [keyboardState, theme];
  const items1 = [onPress];
  const obj2 = arg1(dependencyMap[5]);
  obj = { "Null": true, "Null": true };
  let str = "Done";
  obj.rippleRadius = num;
  obj.style = doneButtonContainer.doneButtonContainer;
  const tmp4 = callback2(() => {
    const items = [doneButton.doneButton, { color: theme[closure_1].primary }];
    return items;
  }, items);
  obj.testID = arg1(dependencyMap[7]).TEST_ID_KEYBOARD_TOOLBAR_DONE;
  obj.theme = theme;
  obj.onPress = callback((isDefaultPrevented) => {
    if (null != onPress) {
      onPress(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = onPress(theme[6]).KeyboardController;
      KeyboardController.dismiss();
    }
  }, items1);
  obj = { maxFontSizeMultiplier: 1.3, style: tmp4 };
  if (null != children) {
    text = children;
  }
  if (null != text) {
    str = text;
  }
  obj.children = str;
  obj.children = <closure_5 {...obj} />;
  return <button {...obj} />;
};
