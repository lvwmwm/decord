// Module ID: 6628
// Function ID: 6629
// Name: UserProfileCard
// Dependencies: [19, 17, 6629, 21, 4836, 576, 5435, 4832, 6630, 2]
// Exports: UserProfileCardRows, UserProfileFormRow, default

// Module 6628 (UserProfileCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 6629 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let CARD_ROWS_COLUMN_GAP;
let CARD_ROWS_ICON_SIZE;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp3;
const ChevronSmallRightIcon = tmp3(6630);
const View = react_native.View;
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: closure_4 } = Constants);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: obj2, titleContent: obj3, text: { flexShrink: 1 }, row: { flexDirection: "column", paddingVertical: 20 }, rowLabel: { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP }, rowLabelText: { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE }, rowSublabel: { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP } };
obj2 = { marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(arg0) {
  let children;
  let items;
  let items1;
  let items2;
  let items3;
  let style;
  let title;
  let titleIcon;
  let titleLeadingIcon;
  let titleStyle;
  let trailingAction;
  ({ title, trailingAction } = arg0);
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, titleLeadingIcon: 0, titleIcon: 0, titleStyle: 0, trailingAction: 0, children: 0, style: 0 }));
  const tmp2 = closure_8();
  const obj = { style, children: items3 };
  const merged1 = Object.assign(merged);
  let tmp3Result2 = null != title || null != trailingAction;
  if (tmp3Result2) {
    const obj2 = { style: items, children: items2 };
    items = [tmp2.title, titleStyle];
    let tmp3Result = null != title;
    if (tmp3Result) {
      const obj3 = { style: tmp2.titleContent, children: items1 };
      items1 = [titleLeadingIcon, , ];
      const obj4 = { style: tmp2.text, accessibilityRole: "header", variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: title };
      items1[1] = hasOwnProperty(Text_Text.Text, obj4);
      items1[2] = titleIcon;
      tmp3Result = tmp3(tmp4, obj3);
    }
    items2 = [tmp3Result, trailingAction];
    tmp3Result2 = tmp3(tmp4, obj2);
  }
  items3 = [tmp3Result2, children];
  return metroRequire(View, obj);
};
export const UserProfileFormRow = function UserProfileFormRow(arg0) {
  let arrow;
  let disabled;
  let hint;
  let icon;
  let isDestructive;
  let items;
  let items1;
  let label;
  let labelColor;
  let onPress;
  let sublabel;
  let tmp6Result3;
  ({ label, sublabel, hint, isDestructive, labelColor, arrow } = arg0);
  ({ icon, disabled, onPress } = arg0);
  if (tmp6Result3 === undefined) {
    tmp6Result3 = false;
  }
  const tmp = closure_8();
  let str;
  if (isDestructive) {
    str = "text-feedback-critical";
  }
  let str2 = "mobile-text-heading-primary";
  if (isDestructive) {
    str2 = "text-feedback-critical";
  }
  const obj = { style: tmp.row, accessibilityRole: "button", accessibilityLabel: label, disabled, onPress, children: items1 };
  const obj2 = { style: tmp.rowLabel, children: items };
  const obj3 = { size, color: str };
  const PressableOpacity = Pressables.PressableOpacity;
  items = [hasOwnProperty(icon, obj3), , , ];
  const Text = Text_Text.Text;
  const tmp7 = size;
  if (labelColor == null) {
    labelColor = str2;
  }
  const obj4 = { variant: "text-md/semibold", color: labelColor, style: tmp.rowLabelText, children: label };
  items[1] = hasOwnProperty(Text, obj4);
  let tmp6Result = null != hint;
  if (tmp6Result) {
    const obj5 = { size: tmp7, color: str };
    tmp6Result = tmp6(hint, obj5);
  }
  items[2] = tmp6Result;
  if (tmp6Result3) {
    tmp6Result3 = tmp6(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" });
  }
  items[3] = tmp6Result3;
  items1 = [metroRequire(View, obj2), ];
  let tmp6Result4 = null != sublabel;
  if (tmp6Result4) {
    const obj6 = { style: tmp.rowSublabel, children: sublabel };
    tmp6Result4 = tmp6(tmp5, obj6);
  }
  items1[1] = tmp6Result4;
  return metroRequire(PressableOpacity, obj);
};
export const UserProfileCardRows = function UserProfileCardRows(children) {
  let Children;
  let obj = {
    children: Children.map(children.children, (children, arg1) => {
      const obj = { children };
      return closure_1_5(React.Fragment, obj, arg1);
    })
  };
  Children = react.Children;
  return hasOwnProperty(metroImportDefault, obj);
};
