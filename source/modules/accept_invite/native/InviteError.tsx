// Module ID: 11744
// Function ID: 91225
// Name: InviteErrorBase
// Dependencies: []
// Exports: default

// Module 11744 (InviteErrorBase)
function InviteErrorBase(invite) {
  let inviteError;
  ({ onPressClose: closure_0, inviteError } = invite);
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  if (obj.isThemeDark(importDefault(dependencyMap[7])())) {
    let tmp4 = tmp3[8];
  } else {
    tmp4 = tmp3[9];
  }
  let obj1 = arg1(dependencyMap[10]);
  let code;
  if (null != inviteError) {
    code = inviteError.code;
  }
  const descriptiveInviteError = obj1.getDescriptiveInviteError(code);
  if (invite.invite.state === constants3.BANNED) {
    const intl2 = arg1(dependencyMap[11]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[11]).t.GzD/aa);
  } else {
    stringResult = undefined;
    if (null != descriptiveInviteError) {
      stringResult = descriptiveInviteError.description;
    }
    if (null == stringResult) {
      const intl = arg1(dependencyMap[11]).intl;
      stringResult = intl.string(arg1(dependencyMap[11]).t.FWkU6P);
    }
  }
  obj = {};
  obj = { style: tmp.expiredImage, source: importDefault(tmp4) };
  const items = [callback(closure_3, obj), , , ];
  obj1 = { style: tmp.expiredTitle };
  let title;
  if (null != descriptiveInviteError) {
    title = descriptiveInviteError.title;
  }
  if (null == title) {
    const intl3 = arg1(dependencyMap[11]).intl;
    title = intl3.string(arg1(dependencyMap[11]).t.u9zxnX);
  }
  obj1.children = title;
  items[1] = callback(arg1(dependencyMap[12]).Text, obj1);
  const obj2 = { style: tmp.expiredBody, children: stringResult };
  items[2] = callback(arg1(dependencyMap[12]).Text, obj2);
  const obj3 = { "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(true)": null };
  const intl4 = arg1(dependencyMap[11]).intl;
  obj3.text = intl4.string(arg1(dependencyMap[11]).t.wcqOoF);
  obj3.onPress = function handlePressClose() {
    callback();
  };
  items[3] = callback(arg1(dependencyMap[13]).Button, obj3);
  obj.children = items;
  return closure_10(closure_9, obj);
}
function InviteDisabledError(onPressClose) {
  const arg1 = onPressClose.onPressClose;
  const tmp = callback3();
  const guild = onPressClose.invite.guild;
  if (null == guild) {
    return null;
  } else {
    let obj = importDefault(dependencyMap[14]);
    obj = {};
    ({ id: obj2.id, icon: obj2.icon } = guild);
    obj.size = 64;
    obj.canAnimate = false;
    obj = {};
    const obj1 = { style: tmp.disabledView };
    const guildIconURL = obj.getGuildIconURL(obj);
    const obj2 = { style: tmp.disabledPauseIcon, source: importDefault(dependencyMap[16]) };
    const items = [callback(arg1(dependencyMap[15]).Icon, obj2), ];
    const obj3 = { style: tmp.guildIcon, icon: guildIconURL, size: arg1(dependencyMap[17]).GuildIconSizes.XLARGE };
    items[1] = callback(importDefault(dependencyMap[17]), obj3);
    obj1.children = items;
    const items1 = [callback2(closure_4, obj1), , , ];
    const obj4 = { delete: -1663348269, dispatch: 113, raw: 7405824, style: tmp.disabledTitle };
    const intl = arg1(dependencyMap[11]).intl;
    obj4.children = intl.string(arg1(dependencyMap[11]).t.jlLX2Z);
    items1[1] = callback(arg1(dependencyMap[12]).Text, obj4);
    const obj5 = { delete: null, dispatch: 1, raw: 1, style: tmp.disabledBody };
    const intl2 = arg1(dependencyMap[11]).intl;
    const obj6 = {};
    const tmp11 = importDefault(dependencyMap[17]);
    obj6.articleLink = importDefault(dependencyMap[19]).getArticleURL(constants2.INVITE_DISABLED);
    obj5.children = intl2.format(arg1(dependencyMap[11]).t.RXSeLl, obj6);
    items1[2] = callback(arg1(dependencyMap[18]).TextWithIOSLinkWorkaround, obj5);
    const obj7 = { "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(true)": null };
    const intl3 = arg1(dependencyMap[11]).intl;
    obj7.text = intl3.string(arg1(dependencyMap[11]).t.yD/zkn);
    obj7.onPress = function handlePressClose() {
      onPressClose();
    };
    items1[3] = callback(arg1(dependencyMap[13]).Button, obj7);
    obj.children = items1;
    return callback2(closure_9, obj);
  }
}
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ AbortCodes: closure_5, HelpdeskArticles: closure_6, InviteStates: closure_7 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { expiredImage: { size: false, progress: false }, expiredTitle: { "Bool(false)": true, "Bool(false)": null, "Bool(false)": null }, expiredBody: { -519529133: "allow_multiselect", 996616402: "Array" }, disabledView: { margin: null, backgroundColor: null } };
obj = { tintColor: importDefault(dependencyMap[5]).colors.WHITE };
obj.disabledPauseIcon = obj;
const tmp5 = arg1(dependencyMap[3]);
obj.guildIcon = { borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.disabledTitle = {};
obj.disabledBody = { value: 52881784.83212474, marginTop: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 };
let closure_11 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.lg };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default function InviteError(inviteError) {
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    let obj = {};
    const merged = Object.assign(inviteError);
    let tmp7 = callback(InviteErrorBase, obj);
  } else if (inviteError.code === constants.INVITES_DISABLED) {
    obj = {};
    const merged1 = Object.assign(inviteError);
    tmp7 = callback(InviteDisabledError, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(inviteError);
    tmp7 = callback(InviteErrorBase, obj);
  }
  return tmp7;
};
