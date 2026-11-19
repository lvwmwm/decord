// Module ID: 7444
// Function ID: 7445
// Name: UserProfileCard
// Dependencies: [19, 17, 7445, 21, 4792, 575, 6911, 5383, 7446, 7447, 2]
// Exports: UserProfileCardRows, UserProfileFormRow, default

// Module 7444 (UserProfileCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5383 */;
import Pressables from "Pressables" /* 6911 */;
import UserProfileCardTitleDefault from "UserProfileCardTitle" /* 7447 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 7445 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let CARD_ROWS_COLUMN_GAP;
let CARD_ROWS_ICON_SIZE;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp3;
const ChevronSmallRightIcon = tmp3(7446);
const View = react_native.View;
({ CARD_ROWS_COLUMN_GAP, CARD_ROWS_ICON_SIZE, CARD_ROWS_ICON_SIZE_VARIANT: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { title: obj2, row: { flexDirection: "column", paddingVertical: 20 }, rowLabel: { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP }, rowLabelText: { flex: 1, lineHeight: CARD_ROWS_ICON_SIZE }, rowSublabel: { marginHorizontal: CARD_ROWS_ICON_SIZE + CARD_ROWS_COLUMN_GAP } };
obj2 = { marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCard.tsx");

export default function UserProfileCard(arg0) {
  let children;
  let items;
  let items1;
  let items2;
  let style;
  let title;
  let titleIcon;
  let titleLeadingIcon;
  let titleStyle;
  let trailingAction;
  ({ title, trailingAction } = arg0);
  ({ titleLeadingIcon, titleIcon, titleStyle, children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, titleLeadingIcon: 0, titleIcon: 0, titleStyle: 0, trailingAction: 0, children: 0, style: 0 }));
  const obj = { style, children: items2 };
  const tmp2 = closure_9();
  const merged1 = Object.assign(merged);
  let tmp3Result = null != title || null != trailingAction;
  if (tmp3Result) {
    const obj2 = { style: items, children: items1 };
    items = [tmp2.title, titleStyle];
    let tmp7 = null != title;
    if (tmp7) {
      const obj3 = { title, leadingIcon: titleLeadingIcon, trailingIcon: titleIcon };
      tmp7 = metroRequire(UserProfileCardTitleDefault, obj3);
    }
    items1 = [tmp7, trailingAction];
    tmp3Result = tmp3(tmp4, obj2);
  }
  items2 = [tmp3Result, children];
  return metroImportDefault(View, obj);
};
export function UserProfileFormRow(arg0) {
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
  const tmp = closure_9();
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
  const obj3 = { size: hasOwnProperty, color: str };
  const PressableOpacity = Pressables.PressableOpacity;
  items = [metroRequire(icon, obj3), , , ];
  const Text = Text_Text.Text;
  const tmp7 = hasOwnProperty;
  if (labelColor == null) {
    labelColor = str2;
  }
  const obj4 = { variant: "body-md/semibold", color: labelColor, style: tmp.rowLabelText, children: label };
  items[1] = metroRequire(Text, obj4);
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
  items1 = [metroImportDefault(View, obj2), ];
  let tmp6Result4 = null != sublabel;
  if (tmp6Result4) {
    const obj6 = { style: tmp.rowSublabel, children: sublabel };
    tmp6Result4 = tmp6(tmp5, obj6);
  }
  items1[1] = tmp6Result4;
  return metroImportDefault(PressableOpacity, obj);
}
export function UserProfileCardRows(children) {
  let Children;
  let obj = {
    children: Children.map(children.children, (children, arg1) => {
      const obj = { children };
      return closure_1_6(React.Fragment, obj, arg1);
    })
  };
  Children = react.Children;
  return metroRequire(metroImportAll, obj);
}
