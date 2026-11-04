// Module ID: 15386
// Function ID: 15387
// Name: InAppReportsUserPreview
// Dependencies: [19, 17, 21, 5141, 575, 5138, 5761, 1113, 1187, 2]
// Exports: default

// Module 15386 (InAppReportsUserPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import ColorUtils from "ColorUtils" /* 5138 */;
import Text_Text from "Text/Text" /* 5761 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: obj2, title: { lineHeight: 16, marginBottom: 8 }, userContainer: obj3, userProfileInfo: { marginLeft: 8 } };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default function UserPreview(user) {
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  user = user.user;
  const tmp = closure_5();
  const obj2 = { style: tmp.container, children: items };
  const obj = ColorUtils;
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: intl.string(intl2.t.Rsth7z) };
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [_false(Text, obj3), ];
  const obj4 = { style: items1, children: items2 };
  items1 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  const obj5 = { size: native.AvatarSizes.LARGE_48, user, guildId: "Array" };
  const Avatar = native.Avatar;
  items2 = [_false(Avatar, obj5), ];
  let tmp7Result = null != user.globalName;
  const obj6 = { style: tmp.userProfileInfo, children: items3 };
  if (tmp7Result) {
    const obj7 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
    tmp7Result = tmp7(tmp2(5761).Text, obj7);
  }
  items3 = [tmp7Result, ];
  const obj8 = { color: "text-default", variant: "body-sm/normal", children: user.username };
  items3[1] = _false(Text_Text.Text, obj8);
  items2[1] = React3(View, obj6);
  items[1] = React3(View, obj4);
  return React3(View, obj2);
};
