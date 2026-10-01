// Module ID: 13634
// Function ID: 13635
// Name: HelpMessage
// Dependencies: [19, 17, 21, 4836, 576, 1092, 6028, 4787, 6034, 4792, 4832, 2]
// Exports: default

// Module 13634 (HelpMessage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4787 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 4792 */;
import Text_Text from "Text/Text" /* 4832 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 6028 */;
import CircleXIcon2 from "CircleXIcon" /* 6034 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "utils/ColorUtils" /* 1092 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let closure_4;
let hasOwnProperty;
let int2rgba;
let int2rgba2;
let int2rgba3;
let int2rgba4;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, row: { display: "flex", flexDirection: "row", alignItems: "center" }, content: obj3, warningContainer: obj4, infoContainer: obj5, errorContainer: obj6, successContainer: obj7 };
obj2 = { padding: nativeDefault.space.PX_8, borderWidth: 1, borderStyle: "solid", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, marginLeft: nativeDefault.space.PX_8 };
obj4 = { backgroundColor: int2rgba(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.YELLOW_300), 0.1), borderColor: nativeDefault.unsafe_rawColors.YELLOW_300 };
ColorUtils = ColorUtils_mod;
int2rgba = ColorUtils.int2rgba;
ColorUtils = ColorUtils_mod;
obj5 = { backgroundColor: int2rgba2(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.BLUE_345), 0.1), borderColor: nativeDefault.unsafe_rawColors.BLUE_345 };
ColorUtils = ColorUtils_mod;
int2rgba2 = ColorUtils.int2rgba;
ColorUtils = ColorUtils_mod;
obj6 = { backgroundColor: int2rgba3(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.RED_400), 0.1), borderColor: nativeDefault.unsafe_rawColors.RED_400 };
ColorUtils = ColorUtils_mod;
int2rgba3 = ColorUtils.int2rgba;
ColorUtils = ColorUtils_mod;
obj7 = { backgroundColor: int2rgba4(ColorUtils.hex2int(nativeDefault.unsafe_rawColors.GREEN_400), 0.1), borderColor: nativeDefault.unsafe_rawColors.GREEN_400 };
ColorUtils = ColorUtils_mod;
int2rgba4 = ColorUtils.int2rgba;
ColorUtils = ColorUtils_mod;
let closure_6 = createStyles(obj);
const obj8 = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
const result = size.fileFinishedImporting("design/void/HelpMessage/native/HelpMessage.tsx");

export default function HelpMessage(children) {
  let items1;
  let items2;
  let messageType;
  let successContainer;
  let textVariant;
  let tmp7;
  ({ messageType, textVariant } = children);
  children = children.children;
  if (textVariant === undefined) {
    textVariant = "text-sm/medium";
  }
  let str = children.textColor;
  if (str === undefined) {
    str = "text-default";
  }
  let xs = children.borderRadius;
  if (xs === undefined) {
    xs = nativeDefault.radii.xs;
  }
  const button = children.button;
  const tmp3 = closure_6();
  const items = [tmp3.container, , ];
  if (obj8.WARNING === messageType) {
    successContainer = tmp3.warningContainer;
  } else if (obj8.INFO === messageType) {
    successContainer = tmp3.infoContainer;
  } else if (obj8.ERROR === messageType) {
    successContainer = tmp3.errorContainer;
  } else if (obj8.SUCCESS === messageType) {
    successContainer = tmp3.successContainer;
  }
  const obj = { style: items, children: items2 };
  items[1] = successContainer;
  items[2] = { borderRadius: xs };
  const obj2 = { style: tmp3.row, children: items1 };
  if (obj8.WARNING === messageType) {
    const obj3 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    tmp7 = React3(CircleErrorIcon, obj3);
  } else if (obj8.INFO === messageType) {
    const obj4 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
    const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
    tmp7 = React3(CircleInformationIcon, obj4);
  } else if (obj8.ERROR === messageType) {
    const obj5 = { color: nativeDefault.unsafe_rawColors.RED_400 };
    const CircleXIcon = CircleXIcon2.CircleXIcon;
    tmp7 = React3(CircleXIcon, obj5);
  } else if (obj8.SUCCESS === messageType) {
    const obj6 = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
    const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
    tmp7 = React3(CircleCheckIcon, obj6);
  }
  items1 = [tmp7, ];
  const obj7 = { style: tmp3.content, color: str, variant: textVariant, children };
  items1[1] = React3(Text_Text.Text, obj7);
  items2 = [hasOwnProperty(View, obj2), button];
  return hasOwnProperty(View, obj);
};
export const HelpMessageTypes = obj8;
