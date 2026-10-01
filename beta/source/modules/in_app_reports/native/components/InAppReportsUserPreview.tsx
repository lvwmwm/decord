// Module ID: 8116
// Function ID: 8117
// Name: InAppReportsUserPreview
// Dependencies: [19, 17, 21, 4836, 576, 6400, 4683, 4832, 1115, 1177, 2]
// Exports: default

// Module 8116 (InAppReportsUserPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import Text_Text from "Text/Text" /* 4832 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let items1;
  let items2;
  let items3;
  let items4;
  let stringResult;
  let title;
  user = user.user;
  const tmp = closure_5();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsUserPreview", "text-xs/bold");
  const obj3 = { style: tmp.container, children: items1 };
  const obj2 = ColorUtils;
  const hexWithOpacityResult = obj2.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = Text_Text.Text;
  if (null != typeConsolidationEyebrow.style) {
    const items = [tmp.title, typeConsolidationEyebrow.style];
    title = items;
  } else {
    title = tmp.title;
  }
  const obj4 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: stringResult };
  if (null != typeConsolidationEyebrow.style) {
    const intl2 = tmp2(1115).intl;
    stringResult = intl2.string(tmp2(1115).t.Rsth7z);
  } else {
    const intl = tmp2(1115).intl;
    const str = intl.string(intl3.t.Rsth7z);
    stringResult = str.toUpperCase();
  }
  items1 = [_false(Text, obj4), ];
  const obj5 = { style: items2, children: items3 };
  items2 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  const obj6 = { size: native.AvatarSizes.LARGE_48, user, guildId: "Array" };
  const Avatar = tmp2(1177).Avatar;
  items3 = [_false(Avatar, obj6), ];
  let tmp8Result = null != user.globalName;
  const obj7 = { style: tmp.userProfileInfo, children: items4 };
  if (tmp8Result) {
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
    tmp8Result = tmp8(tmp2(4832).Text, obj8);
  }
  items4 = [tmp8Result, ];
  const obj9 = { color: "text-default", variant: "text-sm/normal", children: user.username };
  items4[1] = _false(Text_Text.Text, obj9);
  items3[1] = React3(View, obj7);
  items1[1] = React3(View, obj5);
  return React3(View, obj3);
};
