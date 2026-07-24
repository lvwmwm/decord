// Module ID: 12436
// Function ID: 96546
// Name: SharedUser
// Dependencies: [27, 653, 33, 4130, 689, 3969, 6690, 1273, 4126, 1212, 4543, 4629, 4098, 4140, 1920, 5187, 5186, 4541, 5807, 2]
// Exports: default

// Module 12436 (SharedUser)
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
function SharedUser(user) {
  user = user.user;
  const tmp = callback3();
  let obj = importDefault(3969);
  const name = obj.getName(user);
  const tmp3 = user.trialCreationResult === user(6690).CreateReferralStatus.FAIL;
  obj = { style: tmp.recipientRow };
  obj = {};
  const items = [tmp.avatarContainer, ];
  let erroredAvatar = tmp3;
  if (tmp3) {
    erroredAvatar = tmp.erroredAvatar;
  }
  items[1] = erroredAvatar;
  obj.style = items;
  obj.size = user(1273).AvatarSizes.REFRESH_MEDIUM_32;
  obj.user = user;
  obj.guildId = undefined;
  const items1 = [callback(user(1273).Avatar, obj), , ];
  if (tmp3) {
    const obj1 = {};
    const obj2 = { variant: "text-md/medium", color: "text-muted", style: tmp.recipientDisplayName, children: name };
    const items2 = [callback(user(4126).Text, obj2), ];
    const obj3 = { variant: "text-md/medium", color: "text-muted" };
    const intl = user(1212).intl;
    const obj4 = { userName: name };
    obj3.children = intl.format(user(1212).t.RO3T4B, obj4);
    items2[1] = callback(user(4126).Text, obj3);
    obj1.children = items2;
    let tmp10 = callback2(closure_6, obj1);
  } else {
    const obj5 = { variant: "text-md/medium", color: "text-strong", style: tmp.recipientDisplayName, children: name };
    tmp10 = callback(user(4126).Text, obj5);
  }
  items1[1] = tmp10;
  const obj6 = { variant: "secondary", size: "sm" };
  const intl2 = user(1212).intl;
  obj6.text = intl2.string(user(1212).t["g33r/P"]);
  const obj7 = { size: "xs", color: importDefault(689).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
  obj6.icon = callback(user(4629).ChatIcon, obj7);
  obj6.onPress = function onPress() {
    let obj = outer1_1(outer1_2[12]);
    obj.hideActionSheet();
    obj = { recipientIds: user.id };
    outer1_1(outer1_2[13]).openPrivateChannel(obj);
  };
  items1[2] = callback(user(4543).Button, obj6);
  obj.children = items1;
  return callback2(View, obj);
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.content = obj;
obj.headerAsset = { alignSelf: "center" };
obj.header = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, alignSelf: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, alignSelf: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
obj.subheader = { textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.recipientContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: 21 };
let obj4 = { flexDirection: "row", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
obj.recipientRow = obj4;
obj.recipientDisplayName = { flex: 1 };
obj.erroredAvatar = { opacity: 0.5 };
obj.avatarContainer = { alignSelf: "center", justifyContent: "center" };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: 21 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx");

export default function ReferralProgramShareConfirmationActionSheet(trialCreationResult) {
  const require = trialCreationResult;
  const tmp = callback3();
  let arr = Array.from(trialCreationResult.values());
  if (0 === arr.filter((arg0) => arg0 === trialCreationResult(outer1_2[6]).CreateReferralStatus.SUCCESS).length) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["7VBEue"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.tKCltd);
  }
  const intl3 = require(1212) /* getSystemLocale */.intl;
  let obj = {};
  let obj1 = importDefault(1920);
  obj.helpdeskArticle = obj1.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  obj = { startExpanded: true, contentStyles: tmp.content, header: callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: null }) };
  obj = {};
  obj1 = { style: tmp.headerAsset, children: callback(require(5807) /* AccountAgeTier10LargeBadge */.FistBumpSpotIllustration, {}) };
  const items = [callback(View, obj1), , , ];
  const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: stringResult };
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  const obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.subheader, children: intl3.format(require(1212) /* getSystemLocale */.t.AwGSWl, obj) };
  items[2] = callback(require(4126) /* Text */.Text, obj3);
  const obj4 = { style: tmp.recipientContainer };
  arr = Array.from(trialCreationResult.selectedUsers);
  obj4.children = arr.map((id) => outer1_5(outer1_9, { user: id, trialCreationResult: trialCreationResult.get(id.id) }, id.id));
  items[3] = callback(View, obj4);
  obj.children = items;
  obj.children = callback2(require(4541) /* Stack */.Stack, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
