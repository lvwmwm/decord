// Module ID: 10740
// Function ID: 83494
// Name: IconPosition
// Dependencies: [31, 27, 482, 33, 4130, 4973, 689, 4660, 1273, 2]
// Exports: LabeledActionButton

// Module 10740 (IconPosition)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_2, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { minHeight: 56, minWidth: 56, alignItems: "center", justifyContent: "center", borderRadius: 28, backgroundColor: require("result").ACTION_BAR_BUTTON_BACKGROUND };
_createForOfIteratorHelperLoose.buttonContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { marginHorizontal: 12 };
_createForOfIteratorHelperLoose.containerWithLabel = { minWidth: "50%", maxWidth: "70%", flexShrink: 1 };
_createForOfIteratorHelperLoose.pressable = { marginHorizontal: 12, borderRadius: 28 };
_createForOfIteratorHelperLoose.buttonContent = { display: "flex", flexDirection: "row", alignItems: "center" };
let obj1 = { marginStart: 8, fontSize: 14, color: require("_createForOfIteratorHelperLoose").colors.WHITE, fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, paddingStart: 3 };
_createForOfIteratorHelperLoose.buttonText = obj1;
_createForOfIteratorHelperLoose.rightTextMargin = { marginStart: 0, marginEnd: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { LEFT: 0, [0]: "LEFT", RIGHT: 1, [1]: "RIGHT" };
const result = require("sum").fileFinishedImporting("modules/stage_channels/native/components/LabeledActionBarButton.tsx");

export const IconPosition = obj2;
export const LabeledActionButton = function LabeledActionButton(children) {
  let backgroundColor;
  let disabled;
  let iconPosition;
  let imageStyle;
  let label;
  let source;
  ({ backgroundColor, imageStyle, source, disabled, label, iconPosition } = children);
  if (iconPosition === undefined) {
    iconPosition = obj2.LEFT;
  }
  let obj = { backgroundColor: 0, imageStyle: 0, children: 0, source: 0, disabled: 0, label: 0, iconPosition: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(children, obj);
  const tmp4 = _createForOfIteratorHelperLoose();
  obj = {};
  const items = [tmp4.container, ];
  let containerWithLabel = null;
  if (null != label) {
    containerWithLabel = tmp4.containerWithLabel;
  }
  items[1] = containerWithLabel;
  obj.style = items;
  obj = { accessibilityRole: "button", disabled, style: tmp4.pressable };
  const merged1 = Object.assign(merged);
  const obj1 = {};
  const items1 = [tmp4.buttonContainer, , ];
  obj2 = {};
  let num = 1;
  if (disabled) {
    num = 0.25;
  }
  obj2.opacity = num;
  items1[1] = obj2;
  let tmp12 = null;
  if (null != backgroundColor) {
    const obj3 = { backgroundColor };
    tmp12 = obj3;
  }
  items1[2] = tmp12;
  obj1.style = items1;
  const obj4 = {};
  const items2 = [tmp4.buttonContent, ];
  let tmp15 = null;
  if (null != label) {
    const obj5 = { paddingHorizontal: 16 };
    tmp15 = obj5;
  }
  items2[1] = tmp15;
  obj4.style = items2;
  let tmp16 = iconPosition === obj2.LEFT;
  if (tmp16) {
    const obj6 = { source, style: imageStyle };
    tmp16 = callback(closure_2, obj6);
  }
  const items3 = [tmp16, , ];
  let tmp20Result = null;
  if (null != label) {
    const obj7 = { numberOfLines: 2 };
    const items4 = [tmp4.buttonText, ];
    let rightTextMargin = iconPosition === obj2.RIGHT;
    if (rightTextMargin) {
      rightTextMargin = tmp4.rightTextMargin;
    }
    items4[1] = rightTextMargin;
    obj7.style = items4;
    obj7.children = label;
    tmp20Result = callback(require(1273) /* Button */.LegacyText, obj7);
    const tmp20 = callback;
  }
  items3[1] = tmp20Result;
  let tmp24 = iconPosition === obj2.RIGHT;
  if (tmp24) {
    const obj8 = { source, style: imageStyle };
    tmp24 = callback(closure_2, obj8);
  }
  items3[2] = tmp24;
  obj4.children = items3;
  const items5 = [closure_5(closure_3, obj4), children.children];
  obj1.children = items5;
  obj["children"] = closure_5(closure_3, obj1);
  obj.children = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  return callback(closure_3, obj);
};
