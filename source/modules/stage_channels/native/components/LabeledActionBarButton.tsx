// Module ID: 10723
// Function ID: 83398
// Name: IconPosition
// Dependencies: []
// Exports: LabeledActionButton

// Module 10723 (IconPosition)
importAll(dependencyMap[0]);
({ Image: closure_2, View: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: arg1(dependencyMap[5]).ACTION_BAR_BUTTON_BACKGROUND };
obj.buttonContainer = obj;
obj.container = { marginHorizontal: 12 };
obj.containerWithLabel = {};
obj.pressable = {};
obj.buttonContent = { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}" };
const tmp4 = arg1(dependencyMap[3]);
obj.buttonText = { color: importDefault(dependencyMap[6]).colors.WHITE, fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_SEMIBOLD };
obj.rightTextMargin = {};
let closure_6 = obj.createStyles(obj);
const obj2 = { LEFT: 0, [0]: "LEFT", RIGHT: 1, [1]: "RIGHT" };
const obj1 = { color: importDefault(dependencyMap[6]).colors.WHITE, fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_SEMIBOLD };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/stage_channels/native/components/LabeledActionBarButton.tsx");

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
  let obj = { 1382375756: 1091658877, 705812916: 151597, -1436796059: 6258, 1382201186: 6144, 1314980677: -180289280, 1386894946: 1375732285, 2078191487: 1685947892 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(children, obj);
  const tmp4 = callback2();
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
  const obj2 = {};
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
    tmp20Result = callback(arg1(dependencyMap[8]).LegacyText, obj7);
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
  obj.children = callback(arg1(dependencyMap[7]).PressableOpacity, obj);
  return callback(closure_3, obj);
};
