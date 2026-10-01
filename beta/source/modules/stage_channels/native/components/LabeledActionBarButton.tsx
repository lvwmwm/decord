// Module ID: 9470
// Function ID: 9471
// Name: LabeledActionBarButton
// Dependencies: [19, 17, 1085, 21, 4836, 5753, 576, 5435, 1177, 2]
// Exports: LabeledActionButton

// Module 9470 (LabeledActionBarButton)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import Pressables from "Pressables" /* 5435 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let tmp7;
const native = tmp7(1177);
({ Image: c2, View: c3 } = react_native);
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { buttonContainer: obj2, container: { marginHorizontal: 12 }, containerWithLabel: { minWidth: "50%", maxWidth: "70%", flexShrink: 1 }, pressable: { marginHorizontal: 12, borderRadius: 28 }, buttonContent: { display: "flex", flexDirection: "row", alignItems: "center" }, buttonText: obj3, rightTextMargin: { marginStart: 0, marginEnd: 8 } };
obj2 = { minHeight: 56, minWidth: 56, alignItems: "center", justifyContent: "center", borderRadius: 28, backgroundColor: LegacyTokens.ACTION_BAR_BUTTON_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { marginStart: 8, fontSize: 14, color: nativeDefault.colors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, paddingStart: 3 };
let closure_6 = createStyles(obj);
let obj4 = { LEFT: 0, [0]: "LEFT", RIGHT: 1, [1]: "RIGHT" };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/LabeledActionBarButton.tsx");

export const IconPosition = obj4;
export const LabeledActionButton = function LabeledActionButton(children) {
  let PressableOpacity;
  let backgroundColor;
  let disabled;
  let iconPosition;
  let imageStyle;
  let items3;
  let items5;
  let label;
  let obj2;
  let source;
  ({ backgroundColor, imageStyle, source, disabled, label, iconPosition } = children);
  children = children.children;
  if (iconPosition === undefined) {
    iconPosition = obj4.LEFT;
  }
  const merged = Object.assign(children, Object.assign({ backgroundColor: 0, imageStyle: 0, children: 0, source: 0, disabled: 0, label: 0, iconPosition: 0 }));
  const tmp3 = closure_6();
  const items = [tmp3.container, ];
  let containerWithLabel = null;
  if (null != label) {
    containerWithLabel = tmp3.containerWithLabel;
  }
  items[1] = containerWithLabel;
  const obj = { style: items, children: React3(PressableOpacity, obj2) };
  obj2 = { accessibilityRole: "button", disabled, style: tmp3.pressable, children: hasOwnProperty(_false, obj4) };
  PressableOpacity = Pressables.PressableOpacity;
  const merged1 = Object.assign(merged);
  const items1 = [tmp3.buttonContainer, , ];
  let num = 1;
  if (disabled) {
    num = 0.25;
  }
  items1[1] = { opacity: num };
  let tmp11 = null;
  if (null != backgroundColor) {
    tmp11 = { backgroundColor };
    const obj3 = { backgroundColor };
  }
  obj4 = { style: items1, children: items5 };
  items1[2] = tmp11;
  const items2 = [tmp3.buttonContent, ];
  let obj5 = null;
  if (null != label) {
    obj5 = { paddingHorizontal: 16 };
  }
  const obj6 = { style: items2, children: items3 };
  items2[1] = obj5;
  let tmp4Result = iconPosition === obj4.LEFT;
  if (tmp4Result) {
    const obj7 = { source, style: imageStyle };
    tmp4Result = tmp4(React2, obj7);
  }
  items3 = [tmp4Result, , ];
  let tmp4Result3 = null;
  if (null != label) {
    const items4 = [tmp3.buttonText, ];
    let rightTextMargin = iconPosition === tmp12.RIGHT;
    const LegacyText = native.LegacyText;
    if (rightTextMargin) {
      rightTextMargin = tmp3.rightTextMargin;
    }
    const obj8 = { numberOfLines: 2, style: items4, children: label };
    items4[1] = rightTextMargin;
    tmp4Result3 = tmp4(LegacyText, obj8);
  }
  items3[1] = tmp4Result3;
  let tmp4Result4 = iconPosition === tmp12.RIGHT;
  if (tmp4Result4) {
    const obj9 = { source, style: imageStyle };
    tmp4Result4 = tmp4(React2, obj9);
  }
  items3[2] = tmp4Result4;
  items5 = [hasOwnProperty(_false, obj6), children];
  return React3(_false, obj);
};
