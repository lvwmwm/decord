// Module ID: 12254
// Function ID: 93994
// Name: SharedUser
// Dependencies: []
// Exports: default

// Module 12254 (SharedUser)
function SharedUser(user) {
  user = user.user;
  const require = user;
  const tmp = callback3();
  let obj = importDefault(dependencyMap[5]);
  const name = obj.getName(user);
  const tmp3 = user.trialCreationResult === require(dependencyMap[6]).CreateReferralStatus.FAIL;
  obj = { style: tmp.recipientRow };
  obj = {};
  const items = [tmp.avatarContainer, ];
  let erroredAvatar = tmp3;
  if (tmp3) {
    erroredAvatar = tmp.erroredAvatar;
  }
  items[1] = erroredAvatar;
  obj.style = items;
  obj.size = require(dependencyMap[7]).AvatarSizes.REFRESH_MEDIUM_32;
  obj.user = user;
  obj.guildId = undefined;
  const items1 = [callback(require(dependencyMap[7]).Avatar, obj), , ];
  if (tmp3) {
    const obj1 = {};
    const obj2 = { style: tmp.recipientDisplayName, children: name };
    const items2 = [callback(require(dependencyMap[8]).Text, obj2), ];
    const obj3 = {};
    const intl = require(dependencyMap[9]).intl;
    const obj4 = { userName: name };
    obj3.children = intl.format(require(dependencyMap[9]).t.RO3T4B, obj4);
    items2[1] = callback(require(dependencyMap[8]).Text, obj3);
    obj1.children = items2;
    let tmp10 = callback2(closure_6, obj1);
  } else {
    const obj5 = { style: tmp.recipientDisplayName, children: name };
    tmp10 = callback(require(dependencyMap[8]).Text, obj5);
  }
  items1[1] = tmp10;
  const obj6 = {};
  const intl2 = require(dependencyMap[9]).intl;
  obj6.text = intl2.string(require(dependencyMap[9]).t.g33r/P);
  const obj7 = { size: "xs", color: importDefault(dependencyMap[4]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
  obj6.icon = callback(require(dependencyMap[11]).ChatIcon, obj7);
  obj6.onPress = function onPress() {
    let obj = callback(closure_2[12]);
    obj.hideActionSheet();
    obj = { recipientIds: user.id };
    callback(closure_2[13]).openPrivateChannel(obj);
  };
  items1[2] = callback(require(dependencyMap[10]).Button, obj6);
  obj.children = items1;
  return callback2(View, obj);
}
const View = require(dependencyMap[0]).View;
const HelpdeskArticles = require(dependencyMap[1]).HelpdeskArticles;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.content = obj;
obj.headerAsset = { alignSelf: "center" };
obj.header = { marginTop: importDefault(dependencyMap[4]).space.PX_16, alignSelf: "center", paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, textAlign: "center" };
const obj1 = { marginTop: importDefault(dependencyMap[4]).space.PX_16, alignSelf: "center", paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, textAlign: "center" };
obj.subheader = { textAlign: "center", paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, marginTop: importDefault(dependencyMap[4]).space.PX_8 };
const obj2 = { textAlign: "center", paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, marginTop: importDefault(dependencyMap[4]).space.PX_8 };
obj.recipientContainer = { gap: importDefault(dependencyMap[4]).space.PX_16, marginTop: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: 21 };
const obj3 = { gap: importDefault(dependencyMap[4]).space.PX_16, marginTop: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: 21 };
obj.recipientRow = { padding: importDefault(dependencyMap[4]).space.PX_12, gap: importDefault(dependencyMap[4]).space.PX_12, borderRadius: importDefault(dependencyMap[4]).radii.md, borderWidth: 1, borderColor: importDefault(dependencyMap[4]).colors.BORDER_MUTED };
obj.recipientDisplayName = { flex: 1 };
obj.erroredAvatar = { opacity: 0.5 };
obj.avatarContainer = { accessibilityRole: null, jsxs: null };
let closure_8 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[20]);
const result = _module2.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx");

export default function ReferralProgramShareConfirmationActionSheet(trialCreationResult) {
  const require = trialCreationResult;
  const tmp = callback3();
  let arr = Array.from(trialCreationResult.values());
  if (0 === arr.filter((arg0) => arg0 === trialCreationResult(closure_2[6]).CreateReferralStatus.SUCCESS).length) {
    const intl2 = require(dependencyMap[9]).intl;
    let stringResult = intl2.string(require(dependencyMap[9]).t.7VBEue);
  } else {
    const intl = require(dependencyMap[9]).intl;
    stringResult = intl.string(require(dependencyMap[9]).t.tKCltd);
  }
  const intl3 = require(dependencyMap[9]).intl;
  let obj = {};
  let obj1 = importDefault(dependencyMap[14]);
  obj.helpdeskArticle = obj1.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  obj = { startExpanded: true, contentStyles: tmp.content, header: callback(require(dependencyMap[16]).BottomSheetTitleHeader, { title: null }) };
  obj = {};
  obj1 = { style: tmp.headerAsset, children: callback(require(dependencyMap[18]).FistBumpSpotIllustration, {}) };
  const items = [callback(View, obj1), , , ];
  const obj2 = { style: tmp.header, children: stringResult };
  items[1] = callback(require(dependencyMap[8]).Text, obj2);
  const formatResult = intl3.format(require(dependencyMap[9]).t.AwGSWl, obj);
  items[2] = callback(require(dependencyMap[19]).TextWithIOSLinkWorkaround, { style: tmp.subheader, children: intl3.format(require(dependencyMap[9]).t.AwGSWl, obj) });
  const obj4 = { style: tmp.recipientContainer };
  arr = Array.from(trialCreationResult.selectedUsers);
  obj4.children = arr.map((id) => callback(closure_9, { user: id, trialCreationResult: trialCreationResult.get(id.id) }, id.id));
  items[3] = callback(View, obj4);
  obj.children = items;
  obj.children = callback2(require(dependencyMap[17]).Stack, obj);
  return callback(require(dependencyMap[15]).BottomSheet, obj);
};
