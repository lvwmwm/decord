// Module ID: 11755
// Function ID: 91287
// Name: InviteErrorBase
// Dependencies: [31, 27, 653, 33, 4130, 689, 3976, 4066, 11756, 11757, 11758, 1212, 4126, 4543, 1392, 1273, 11759, 5515, 5459, 1920, 2]
// Exports: default

// Module 11755 (InviteErrorBase)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function InviteErrorBase(invite) {
  let inviteError;
  let require;
  ({ onPressClose: require, inviteError } = invite);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3976) /* AccessibilityAnnouncer */;
  if (obj.isThemeDark(importDefault(4066)())) {
    let tmp4 = 11756;
  } else {
    tmp4 = 11757;
  }
  let obj1 = require(11758) /* getDescriptiveInviteError */;
  let code;
  if (null != inviteError) {
    code = inviteError.code;
  }
  const descriptiveInviteError = obj1.getDescriptiveInviteError(code);
  if (invite.invite.state === constants3.BANNED) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["GzD/aa"]);
  } else {
    stringResult = undefined;
    if (null != descriptiveInviteError) {
      stringResult = descriptiveInviteError.description;
    }
    if (null == stringResult) {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.FWkU6P);
    }
  }
  obj = {};
  obj = { style: tmp.expiredImage, source: importDefault(tmp4) };
  const items = [callback(closure_3, obj), , , ];
  obj1 = { style: tmp.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  let title;
  if (null != descriptiveInviteError) {
    title = descriptiveInviteError.title;
  }
  if (null == title) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    title = intl3.string(require(1212) /* getSystemLocale */.t.u9zxnX);
  }
  obj1.children = title;
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.expiredBody, variant: "text-sm/medium", color: "text-default", children: stringResult };
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  const obj3 = { variant: "primary", size: "lg" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl4.string(require(1212) /* getSystemLocale */.t.wcqOoF);
  obj3.onPress = function handlePressClose() {
    callback();
  };
  items[3] = callback(require(4543) /* Button */.Button, obj3);
  obj.children = items;
  return closure_10(closure_9, obj);
}
function InviteDisabledError(onPressClose) {
  onPressClose = onPressClose.onPressClose;
  const tmp = _createForOfIteratorHelperLoose();
  const guild = onPressClose.invite.guild;
  if (null == guild) {
    return null;
  } else {
    let obj = importDefault(1392);
    obj = {};
    ({ id: obj2.id, icon: obj2.icon } = guild);
    obj.size = 64;
    obj.canAnimate = false;
    obj = {};
    const obj1 = { style: tmp.disabledView };
    const guildIconURL = obj.getGuildIconURL(obj);
    const obj2 = { style: tmp.disabledPauseIcon, source: importDefault(11759) };
    const items = [callback(onPressClose(1273).Icon, obj2), ];
    const obj3 = { style: tmp.guildIcon, icon: guildIconURL, size: onPressClose(5515).GuildIconSizes.XLARGE };
    items[1] = callback(importDefault(5515), obj3);
    obj1.children = items;
    const items1 = [callback2(closure_4, obj1), , , ];
    const obj4 = { style: tmp.disabledTitle, variant: "heading-xl/semibold", color: "text-feedback-critical" };
    const intl = onPressClose(1212).intl;
    obj4.children = intl.string(onPressClose(1212).t.jlLX2Z);
    items1[1] = callback(onPressClose(4126).Text, obj4);
    const obj5 = { style: tmp.disabledBody, variant: "text-md/normal", color: "text-default" };
    const intl2 = onPressClose(1212).intl;
    const obj6 = {};
    const tmp11 = importDefault(5515);
    obj6.articleLink = importDefault(1920).getArticleURL(constants2.INVITE_DISABLED);
    obj5.children = intl2.format(onPressClose(1212).t.RXSeLl, obj6);
    items1[2] = callback(onPressClose(5459).TextWithIOSLinkWorkaround, obj5);
    const obj7 = { variant: "primary", size: "lg" };
    const intl3 = onPressClose(1212).intl;
    obj7.text = intl3.string(onPressClose(1212).t["yD/zkn"]);
    obj7.onPress = function handlePressClose() {
      onPressClose();
    };
    items1[3] = callback(onPressClose(4543).Button, obj7);
    obj.children = items1;
    return callback2(closure_9, obj);
  }
}
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ AbortCodes: closure_5, HelpdeskArticles: closure_6, InviteStates: closure_7 } = ME);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { expiredImage: { marginTop: 32, marginBottom: 32 }, expiredTitle: { marginBottom: 8, backgroundColor: "transparent", textAlign: "center" }, expiredBody: { backgroundColor: "transparent", marginBottom: 24 }, disabledView: { justifyContent: "center", alignItems: "center" } };
_createForOfIteratorHelperLoose = { position: "absolute", alignSelf: "center", tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE, width: 42, height: 42 };
_createForOfIteratorHelperLoose.disabledPauseIcon = _createForOfIteratorHelperLoose;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, opacity: 0.2, zIndex: -999 };
_createForOfIteratorHelperLoose.guildIcon = obj1;
_createForOfIteratorHelperLoose.disabledTitle = { marginTop: 16, marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.disabledBody = { textAlign: "center", marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

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
