// Module ID: 9254
// Function ID: 9255
// Name: InfoBox
// Dependencies: [19, 17, 21, 4836, 576, 4787, 6028, 4832, 2]
// Exports: default

// Module 9254 (InfoBox)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4787 */;
import Text_Text from "Text/Text" /* 4832 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 6028 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { infoBox: obj2, infoBoxWarning: obj3, infoText: { flex: 1 } };
obj2 = { borderRadius: nativeDefault.radii.xs, padding: 8, borderStyle: "solid", borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, flexDirection: "row", alignItems: "center", gap: 8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
let closure_6 = createStyles(obj);
let obj4 = { INFO: "info", WARNING: "warning" };
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/InfoBox.tsx");

export default function InfoBox(look) {
  let children;
  let items2;
  let items3;
  let style;
  let INFO = look.look;
  ({ children, style } = look);
  if (INFO === undefined) {
    INFO = obj4.INFO;
  }
  const tmp2 = closure_6();
  const items = [tmp2.infoBox];
  const items1 = [, ];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp2);
  const obj = {};
  const INFO2 = obj4.INFO;
  const obj2 = { color: nativeDefault.colors.TEXT_LINK };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  obj[INFO2] = React3(CircleInformationIcon, obj2);
  const WARNING = obj4.WARNING;
  const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
  const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
  obj[WARNING] = React3(CircleErrorIcon, obj3);
  obj4 = { style: items2, children: items3 };
  items2 = [style, ...{ [closure_1_7.INFO]: items, [closure_1_7.WARNING]: items1 }[INFO]];
  items3 = [obj[INFO], ];
  const obj5 = { style: tmp2.infoText, variant: "text-sm/semibold", children };
  items3[1] = React3(Text_Text.Text, obj5);
  return hasOwnProperty(View, obj4);
};
export const InfoBoxLooks = obj4;
