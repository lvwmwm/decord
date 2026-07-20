// Module ID: 5497
// Function ID: 46831
// Name: ActionSheetCloseButton
// Dependencies: []
// Exports: ActionSheetCloseButton

// Module 5497 (ActionSheetCloseButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = Object.freeze({ radius: 12 });
let closure_5 = Object.freeze({ position: "parent", right: "Array", top: "isArray", display: "accessibilityRole" });
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/components/Sheet/native/ActionSheetCloseButton.native.tsx");

export const ActionSheetCloseButton = function ActionSheetCloseButton(arg0) {
  let onPress;
  let variant;
  ({ onPress, variant } = arg0);
  let obj = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[3]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[3]).t.cpT0Cq);
  obj.hitSlop = closure_5;
  obj.androidRippleConfig = closure_4;
  obj.onPress = onPress;
  obj = {};
  if ("overlay" === variant) {
    let ICON_STRONG = importDefault(dependencyMap[5]).colors.WHITE;
  } else {
    ICON_STRONG = importDefault(dependencyMap[5]).colors.ICON_STRONG;
  }
  obj.color = ICON_STRONG;
  obj.children = jsx(arg1(dependencyMap[4]).XSmallIcon, obj);
  return jsx(arg1(dependencyMap[2]).PressableOpacity, obj);
};
