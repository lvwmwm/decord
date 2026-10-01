// Module ID: 12984
// Function ID: 12985
// Name: ReferralProgramShareConfirmationActionSheet
// Dependencies: [17, 1074, 21, 4836, 576, 4678, 6873, 1177, 4832, 1115, 5281, 5385, 4800, 4849, 2111, 6571, 6570, 5279, 12985, 2]
// Exports: default

// Module 12984 (ReferralProgramShareConfirmationActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import ReferralTrialActionCreators from "ReferralTrialActionCreators" /* 6873 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function SharedUser(user) {
  let ChatIcon;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj10;
  let obj7;
  let tmp9Result;
  user = user.user;
  const trialCreationResult = user.trialCreationResult;
  const tmp = closure_8();
  let obj = UserUtilsDefault;
  const name = obj.getName(user);
  const tmp6 = trialCreationResult === user(6873).CreateReferralStatus.FAIL;
  let obj2 = { style: tmp.recipientRow, children: items1 };
  const items = [tmp.avatarContainer, ];
  let erroredAvatar = tmp6;
  const Avatar = user(1177).Avatar;
  const tmp8 = View;
  if (tmp6) {
    erroredAvatar = tmp.erroredAvatar;
  }
  let obj3 = { style: items, size: tmp5(1177).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "a" };
  items[1] = erroredAvatar;
  items1 = [closure_5(Avatar, obj3), , ];
  if (tmp6) {
    const obj4 = { children: items2 };
    const obj5 = { variant: "text-md/medium", color: "text-muted", style: tmp.recipientDisplayName, children: name };
    items2 = [closure_5(user(4832).Text, obj5), ];
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: intl.format(user(1115).t.RO3T4B, obj7) };
    const Text = tmp5(4832).Text;
    intl = tmp5(1115).intl;
    obj7 = { userName: name };
    items2[1] = closure_5(Text, obj6);
    tmp9Result = tmp7(closure_6, obj4);
  } else {
    const obj8 = { variant: "text-md/medium", color: "text-strong", style: tmp.recipientDisplayName, children: name };
    tmp9Result = tmp9(tmp5(4832).Text, obj8);
  }
  items1[1] = tmp9Result;
  const obj9 = {
    variant: "secondary",
    size: "sm",
    text: intl2.string(user(1115).t["g33r/P"]),
    icon: closure_5(ChatIcon, obj10),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = ChannelActionCreatorsDefault;
      const obj3 = { recipientIds: user.id };
      obj2.openPrivateChannel(obj3);
    }
  };
  const Button = tmp5(5281).Button;
  intl2 = tmp5(1115).intl;
  obj10 = { size: "xs", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
  ChatIcon = tmp5(5385).ChatIcon;
  items1[2] = closure_5(Button, obj9);
  return closure_7(tmp8, obj2);
}
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, headerAsset: { alignSelf: "center" }, header: obj3, subheader: obj4, recipientContainer: obj5, recipientRow: obj6, recipientDisplayName: { flex: 1 }, erroredAvatar: { opacity: 0.5 }, avatarContainer: { alignSelf: "center", justifyContent: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_8, textAlign: "center" };
obj4 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingBottom: 21 };
obj6 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx");

export default function ReferralProgramShareConfirmationActionSheet(trialCreationResult) {
  let Stack;
  let arr2;
  let items;
  let obj2;
  let obj4;
  let stringResult;
  let tmp5;
  require = trialCreationResult;
  const selectedUsers = trialCreationResult.selectedUsers;
  const tmp = closure_8();
  const arr = Array.from(trialCreationResult.trialCreationResult.values());
  if (0 === arr.filter((item) => item === ReferralTrialActionCreators.CreateReferralStatus.SUCCESS).length) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t["7VBEue"]);
    tmp5 = require;
  } else {
    const intl = intl4.intl;
    stringResult = intl.string(intl4.t.tKCltd);
    tmp5 = require;
  }
  const intl3 = tmp5(1115).intl;
  const format = intl3.format;
  let obj = { helpdeskArticle: obj2.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
  const AwGSWl = tmp5(1115).t.AwGSWl;
  obj2 = HelpdeskUtilsDefault;
  const obj3 = { startExpanded: true, contentStyles: tmp.content, header: closure_5(tmp5(6570).BottomSheetTitleHeader, { title: null }), children: closure_7(Stack, obj4) };
  const formatResult = format(AwGSWl, obj);
  BottomSheet = tmp5(6571).BottomSheet;
  obj4 = { children: items };
  const obj5 = { style: tmp.headerAsset, children: closure_5(tmp5(12985).FistBumpSpotIllustration, {}) };
  Stack = tmp5(5279).Stack;
  items = [closure_5(View, obj5), , , ];
  const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: stringResult };
  items[1] = closure_5(tmp5(4832).Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: tmp.subheader, children: formatResult };
  items[2] = closure_5(tmp5(4832).Text, obj7);
  const obj8 = {
    style: tmp.recipientContainer,
    children: arr2.map((user) => {
      const obj = { user, trialCreationResult: require.get(user.id) };
      return hasOwnProperty(SharedUser, obj, user.id);
    })
  };
  arr2 = Array.from(selectedUsers);
  items[3] = closure_5(View, obj8);
  return closure_5(BottomSheet, obj3);
};
