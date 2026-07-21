// Module ID: 12881
// Function ID: 98367
// Name: getIcon
// Dependencies: []
// Exports: default

// Module 12881 (getIcon)
function getIcon(arg0) {
  if (obj6.WARNING === arg0) {
    let obj = { color: importDefault(dependencyMap[4]).unsafe_rawColors.YELLOW_300 };
    return callback(arg1(dependencyMap[6]).CircleErrorIcon, obj);
  } else if (obj6.INFO === arg0) {
    obj = { color: importDefault(dependencyMap[4]).unsafe_rawColors.BLUE_345 };
    return callback(arg1(dependencyMap[7]).CircleInformationIcon, obj);
  } else if (obj6.ERROR === arg0) {
    const obj1 = { color: importDefault(dependencyMap[4]).unsafe_rawColors.RED_400 };
    return callback(arg1(dependencyMap[8]).CircleXIcon, obj1);
  } else if (obj6.SUCCESS === arg0) {
    obj = { color: importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_400 };
    return callback(arg1(dependencyMap[9]).CircleCheckIcon, obj);
  }
}
function useContainerStyle(messageType, warningContainer) {
  if (obj6.WARNING === messageType) {
    return warningContainer.warningContainer;
  } else if (obj6.INFO === messageType) {
    return warningContainer.infoContainer;
  } else if (obj6.ERROR === messageType) {
    return warningContainer.errorContainer;
  } else {
    return obj6.SUCCESS === messageType ? warningContainer.successContainer : undefined;
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { padding: importDefault(dependencyMap[4]).space.PX_8, gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.container = obj;
obj.row = {};
const tmp3 = arg1(dependencyMap[2]);
obj.content = { flex: 1, marginLeft: importDefault(dependencyMap[4]).space.PX_8 };
const obj2 = {};
let obj5 = arg1(dependencyMap[5]);
let obj6 = arg1(dependencyMap[5]);
obj2.backgroundColor = obj5.int2rgba(obj6.hex2int(importDefault(dependencyMap[4]).unsafe_rawColors.YELLOW_300), 0.1);
obj2.borderColor = importDefault(dependencyMap[4]).unsafe_rawColors.YELLOW_300;
obj.warningContainer = obj2;
const obj3 = {};
const obj1 = { flex: 1, marginLeft: importDefault(dependencyMap[4]).space.PX_8 };
const obj9 = arg1(dependencyMap[5]);
obj3.backgroundColor = obj9.int2rgba(arg1(dependencyMap[5]).hex2int(importDefault(dependencyMap[4]).unsafe_rawColors.BLUE_345), 0.1);
obj3.borderColor = importDefault(dependencyMap[4]).unsafe_rawColors.BLUE_345;
obj.infoContainer = obj3;
const obj4 = {};
const obj10 = arg1(dependencyMap[5]);
const obj12 = arg1(dependencyMap[5]);
obj4.backgroundColor = obj12.int2rgba(arg1(dependencyMap[5]).hex2int(importDefault(dependencyMap[4]).unsafe_rawColors.RED_400), 0.1);
obj4.borderColor = importDefault(dependencyMap[4]).unsafe_rawColors.RED_400;
obj.errorContainer = obj4;
obj5 = {};
const obj13 = arg1(dependencyMap[5]);
const obj15 = arg1(dependencyMap[5]);
obj5.backgroundColor = obj15.int2rgba(arg1(dependencyMap[5]).hex2int(importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_400), 0.1);
obj5.borderColor = importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_400;
obj.successContainer = obj5;
let closure_6 = obj.createStyles(obj);
obj6 = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
const obj16 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/void/HelpMessage/native/HelpMessage.tsx");

export default function HelpMessage(textColor) {
  let messageType;
  let textVariant;
  ({ messageType, textVariant } = textColor);
  if (textVariant === undefined) {
    textVariant = "text-sm/medium";
  }
  let str = textColor.textColor;
  if (str === undefined) {
    str = "text-default";
  }
  let xs = textColor.borderRadius;
  if (xs === undefined) {
    xs = importDefault(dependencyMap[4]).radii.xs;
  }
  const tmp3 = callback3();
  let obj = {};
  const items = [tmp3.container, useContainerStyle(messageType, tmp3), ];
  obj = { borderRadius: xs };
  items[2] = obj;
  obj.style = items;
  obj = { style: tmp3.row };
  const items1 = [getIcon(messageType), ];
  const obj1 = { style: tmp3.content, color: str, variant: textVariant, children: textColor.children };
  items1[1] = callback(arg1(dependencyMap[10]).TextWithIOSLinkWorkaround, obj1);
  obj.children = items1;
  const items2 = [callback2(View, obj), textColor.button];
  obj.children = items2;
  return callback2(View, obj);
};
export const HelpMessageTypes = obj6;
