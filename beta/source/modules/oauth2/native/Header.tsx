// Module ID: 8740
// Function ID: 8741
// Name: Header
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1397, 1177, 4832, 8741, 1385, 1115, 2]
// Exports: default

// Module 8740 (Header)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4832 */;
import BotTagDefault from "BotTag" /* 8741 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
const UserFlags = Constants.UserFlags;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, applicationNameWrapper: { flexDirection: "row" }, headerIcons: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }, ellipseGroup: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 24 }, ellipse: size, botTag: { marginTop: 4, marginLeft: 8 } };
obj2 = { paddingBottom: 16, marginHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, flexDirection: "column", justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.1, borderRadius: 2 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/Header.tsx");

export default function Header(accountScopes) {
  let application;
  let bot;
  let hasFlagResult;
  let items;
  let items1;
  let items2;
  let items3;
  let stringResult;
  let user;
  ({ user, application, bot } = accountScopes);
  accountScopes = accountScopes.accountScopes;
  const tmp = closure_7();
  let userAvatarSource;
  const obj = AvatarUtilsDefault;
  const obj2 = { id: application.id, icon: application.icon };
  const applicationIconSource = obj.getApplicationIconSource(obj2);
  if (null != user) {
    const tmp2Result = AvatarUtilsDefault;
    userAvatarSource = tmp2Result.getUserAvatarSource(user);
  }
  const obj3 = { style: tmp.header, children: items2 };
  const obj4 = { style: tmp.headerIcons, children: items };
  const obj5 = { source: applicationIconSource, size: native.AvatarSizes.XLARGE };
  const Avatar = native.Avatar;
  items = [hasOwnProperty(Avatar, obj5), , ];
  const obj6 = { style: tmp.ellipseGroup, children: items1 };
  items1 = [, , ];
  const obj7 = { style: tmp.ellipse };
  items1[0] = hasOwnProperty(View, obj7);
  const obj8 = { style: tmp.ellipse };
  items1[1] = hasOwnProperty(View, obj8);
  const obj9 = { style: tmp.ellipse };
  items1[2] = hasOwnProperty(View, obj9);
  items[1] = metroRequire(View, obj6);
  const obj10 = { source: userAvatarSource, size: native.AvatarSizes.XLARGE };
  const Avatar2 = native.Avatar;
  items[2] = hasOwnProperty(Avatar2, obj10);
  items2 = [metroRequire(View, obj4), , ];
  const obj11 = { style: tmp.applicationNameWrapper, children: items3 };
  items3 = [, ];
  const obj12 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: application.name };
  items3[0] = hasOwnProperty(Text_Text.Text, obj12);
  let tmp8Result = null;
  if (null != bot) {
    const obj13 = { style: tmp.botTag, verified: hasFlagResult };
    hasFlagResult = null != bot.public_flags;
    const tmp2Result2 = BotTagDefault;
    if (hasFlagResult) {
      const tmp9Result = FlagUtils;
      hasFlagResult = tmp9Result.hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
    }
    tmp8Result = tmp8(tmp2Result2, obj13);
  }
  items3[1] = tmp8Result;
  items2[1] = metroRequire(View, obj11);
  const Text = tmp9(4832).Text;
  if (accountScopes.length > 0) {
    const intl2 = tmp9(1115).intl;
    stringResult = intl2.string(tmp9(1115).t.jFbDnJ);
  } else {
    const intl = tmp9(1115).intl;
    stringResult = intl.string(tmp9(1115).t["X+Fdpo"]);
  }
  items2[2] = hasOwnProperty(Text, { variant: "heading-md/normal", color: "text-default", children: stringResult });
  return metroRequire(View, obj3);
};
