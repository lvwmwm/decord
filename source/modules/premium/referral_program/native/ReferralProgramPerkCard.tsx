// Module ID: 12430
// Function ID: 96473
// Name: ReferredFriendAvatar
// Dependencies: [31, 27, 6689, 653, 33, 4130, 689, 1273, 4126, 12431, 1212, 1920, 566, 5462, 5482, 6690, 675, 4098, 12432, 1934, 12439, 4543, 2]
// Exports: ReferralProgramPerkCard

// Module 12430 (ReferredFriendAvatar)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function ReferredFriendAvatar(user) {
  user = user.user;
  let obj = { style: _createForOfIteratorHelperLoose().referredFriendAvatar };
  obj = { source: user.getAvatarSource(undefined, false, 24), size: require(1273) /* Button */.AvatarSizes.XSMALL };
  obj.children = callback(require(1273) /* Button */.Avatar, obj);
  return callback(View, obj);
}
function AvailableReferralSlot(slotIndex) {
  obj = { style: _createForOfIteratorHelperLoose().availableReferralSlot, children: callback(require(4126) /* Text */.Text, obj) };
  obj = { variant: "text-xs/medium", color: "text-strong", children: slotIndex.slotIndex };
  return callback(View, obj);
}
function ProgressIndicator(referralSentUsers) {
  referralSentUsers = referralSentUsers.referralSentUsers;
  const items = [];
  let num = 0;
  if (0 < require(12431) /* MAX_REFERRALS_SENT */.MAX_REFERRALS_SENT) {
    do {
      if (null != referralSentUsers[num]) {
        let tmp5 = callback;
        let tmp6 = ReferredFriendAvatar;
        let obj = { user: referralSentUsers[num] };
        let arr = items.push(callback(ReferredFriendAvatar, obj, referralSentUsers[num].id));
      } else {
        let tmp2 = callback;
        let tmp3 = AvailableReferralSlot;
        obj = { slotIndex: num + 1 };
        arr = items.push(callback(AvailableReferralSlot, obj, num));
      }
      num = num + 1;
      let tmp8 = require;
      let tmp9 = dependencyMap;
    } while (num < require(12431) /* MAX_REFERRALS_SENT */.MAX_REFERRALS_SENT);
  }
  obj = { style: _createForOfIteratorHelperLoose().progressIndicatorContainer, children: items };
  return callback(View, obj);
}
function getBodyText(arg0, arg1, arg2) {
  if (arg0) {
    if (arg1 !== tmp(12431).MAX_REFERRALS_SENT) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let obj = { helpdeskArticle: importDefault(1920).getArticleURL(constants.REFERRAL_PROGRAM) };
      intl2.format(require(1212) /* getSystemLocale */.t["omMr+V"], obj);
      const obj4 = importDefault(1920);
    }
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const format = intl3.format;
    let t = require(1212) /* getSystemLocale */.t;
    if (arg2) {
      t = { helpdeskArticle: importDefault(1920).getArticleURL(constants.REFERRAL_PROGRAM) };
      let formatResult1 = format(t["1aEjsH"], t);
      const obj8 = importDefault(1920);
    } else {
      obj = { helpdeskArticle: importDefault(1920).getArticleURL(constants.REFERRAL_PROGRAM) };
      formatResult1 = format(t["+u3AOO"], obj);
      const obj7 = importDefault(1920);
    }
  } else {
    const intl = tmp(1212).intl;
    obj = { helpdeskArticle: importDefault(1920).getArticleURL(constants.REFERRAL_PROGRAM) };
    return intl.format(tmp(1212).t["zWhX/Q"], obj);
  }
}
({ AnalyticEvents: closure_6, HelpdeskArticles: closure_7 } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: 320, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center" };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.progressIndicatorContainer = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", gap: 8, marginTop: 16, marginLeft: 24 };
let obj1 = { width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.availableReferralSlot = obj1;
_createForOfIteratorHelperLoose.referredFriendAvatar = { borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.contentContainer = { alignItems: "flex-start", paddingHorizontal: 24, gap: 8, marginTop: 12 };
_createForOfIteratorHelperLoose.heading = { textAlign: "left" };
_createForOfIteratorHelperLoose.bodyText = { textAlign: "left" };
let obj2 = { borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.buttonContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%", marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%", marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramPerkCard.tsx");

export const ReferralProgramPerkCard = function ReferralProgramPerkCard() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = analyticsLocations(12431);
  const referralSentUsers = obj.useReferralProgramBannerDetails().referralSentUsers;
  let obj1 = analyticsLocations(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getRecipientStatus());
  let obj3 = analyticsLocations(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_5.getHasEligibleFriends());
  analyticsLocations = importDefault(5462)(importDefault(5482).PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR).analyticsLocations;
  let everyResult = stateFromStores.size === analyticsLocations(12431).MAX_REFERRALS_SENT;
  if (everyResult) {
    const items2 = [];
    HermesBuiltin.arraySpread(stateFromStores.values(), 0);
    everyResult = items2.every((arg0) => arg0 === analyticsLocations(outer1_2[15]).ReferralOfferStatus.REDEEMED);
  }
  const items3 = [analyticsLocations];
  const tmp3 = importDefault(5462);
  obj = { style: tmp.container };
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[16]);
    obj = { location_stack: analyticsLocations };
    obj.track(outer1_6.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, obj);
    outer1_1(outer1_2[17]).openLazy(analyticsLocations(outer1_2[19])(outer1_2[18], outer1_2.paths), "referral-program-share-action-sheet");
  }, items3);
  obj = { nReferralsSent: stateFromStores.size };
  const items4 = [callback(importDefault(12439), obj), callback(ProgressIndicator, { referralSentUsers }), , ];
  obj1 = { style: tmp.contentContainer };
  const obj2 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp.heading };
  const intl = analyticsLocations(1212).intl;
  obj2.children = intl.string(analyticsLocations(1212).t.USo4s7);
  const items5 = [callback(analyticsLocations(4126).Text, obj2), ];
  obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.bodyText, children: getBodyText(false !== stateFromStores1, referralSentUsers.length, everyResult) };
  items5[1] = callback(analyticsLocations(4126).Text, obj3);
  obj1.children = items5;
  items4[2] = callback2(View, obj1);
  const obj4 = { style: tmp.buttonContainer };
  const obj5 = { variant: "primary", size: "sm" };
  let tmp14 = false === stateFromStores1;
  if (!tmp14) {
    tmp14 = tmp7;
  }
  obj5.disabled = tmp14;
  const intl2 = analyticsLocations(1212).intl;
  obj5.text = intl2.string(analyticsLocations(1212).t.Lm2nFc);
  obj5.onPress = callback;
  obj4.children = callback(analyticsLocations(4543).Button, obj5);
  items4[3] = callback(View, obj4);
  obj.children = items4;
  return callback2(View, obj);
};
