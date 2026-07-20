// Module ID: 12241
// Function ID: 93898
// Name: ReferredFriendAvatar
// Dependencies: []
// Exports: ReferralProgramPerkCard

// Module 12241 (ReferredFriendAvatar)
function ReferredFriendAvatar(user) {
  user = user.user;
  let obj = { style: callback3().referredFriendAvatar };
  obj = { source: user.getAvatarSource(undefined, false, 24), size: arg1(dependencyMap[7]).AvatarSizes.XSMALL };
  obj.children = callback(arg1(dependencyMap[7]).Avatar, obj);
  return callback(View, obj);
}
function AvailableReferralSlot(children) {
  return callback(View, { style: callback3().availableReferralSlot, children: callback(arg1(dependencyMap[8]).Text, { children: children.slotIndex }) });
}
function ProgressIndicator(referralSentUsers) {
  referralSentUsers = referralSentUsers.referralSentUsers;
  const items = [];
  let num = 0;
  if (0 < arg1(dependencyMap[9]).MAX_REFERRALS_SENT) {
    do {
      if (null != referralSentUsers[num]) {
        let tmp5 = closure_8;
        let tmp6 = closure_11;
        let obj = { user: referralSentUsers[num] };
        let arr = items.push(closure_8(closure_11, obj, referralSentUsers[num].id));
      } else {
        let tmp2 = closure_8;
        let tmp3 = closure_12;
        obj = { slotIndex: num + 1 };
        arr = items.push(closure_8(closure_12, obj, num));
      }
      num = num + 1;
      let tmp8 = closure_0;
      let tmp9 = closure_2;
    } while (num < closure_0(closure_2[9]).MAX_REFERRALS_SENT);
  }
  obj = { style: callback3().progressIndicatorContainer, children: items };
  return callback(View, obj);
}
function getBodyText(arg0, arg1, arg2) {
  if (arg0) {
    if (arg1 !== tmp(tmp2[9]).MAX_REFERRALS_SENT) {
      const intl2 = arg1(dependencyMap[10]).intl;
      let obj = { helpdeskArticle: importDefault(dependencyMap[11]).getArticleURL(constants.REFERRAL_PROGRAM) };
      intl2.format(arg1(dependencyMap[10]).t.omMr+V, obj);
      const obj4 = importDefault(dependencyMap[11]);
    }
    const intl3 = arg1(dependencyMap[10]).intl;
    const format = intl3.format;
    let t = arg1(dependencyMap[10]).t;
    if (arg2) {
      t = { helpdeskArticle: importDefault(tmp11[11]).getArticleURL(constants.REFERRAL_PROGRAM) };
      let formatResult1 = format(t.1aEjsH, t);
      const obj8 = importDefault(tmp11[11]);
    } else {
      obj = { helpdeskArticle: importDefault(tmp11[11]).getArticleURL(constants.REFERRAL_PROGRAM) };
      formatResult1 = format(t.+u3AOO, obj);
      const obj7 = importDefault(tmp11[11]);
    }
  } else {
    const intl = tmp(tmp2[10]).intl;
    obj = { helpdeskArticle: importDefault(tmp2[11]).getArticleURL(constants.REFERRAL_PROGRAM) };
    return intl.format(tmp(tmp2[10]).t.zWhX/Q, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticEvents: closure_6, HelpdeskArticles: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { width: 320, borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, alignItems: "center" };
const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_LOW);
obj.container = obj;
obj.progressIndicatorContainer = { 9223372036854775807: true, -9223372036854775808: "/assets/images/native/premium/logos", 0: 134, -9223372036854775808: 56, -9223372036854775808: null, -9223372036854775808: "5491d41ca2212b1f11c074c452801d84" };
const obj1 = { -9223372036854775808: null, -9223372036854775808: "494d75fe739ed4a36d195ab8193847fa", -9223372036854775808: "alert", -9223372036854775808: "png", -9223372036854775808: true, -9223372036854775808: "/assets/modules/stickers/native/images", borderRadius: importDefault(dependencyMap[6]).radii.xxl, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_STRONG };
obj.availableReferralSlot = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.referredFriendAvatar = { borderWidth: 2, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.contentContainer = {};
obj.heading = { textAlign: "left" };
obj.bodyText = { textAlign: "left" };
const obj2 = { borderWidth: 2, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.buttonContainer = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, width: "100%", marginTop: importDefault(dependencyMap[6]).space.PX_24, marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
let closure_10 = obj.createStyles(obj);
const obj3 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, width: "100%", marginTop: importDefault(dependencyMap[6]).space.PX_24, marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramPerkCard.tsx");

export const ReferralProgramPerkCard = function ReferralProgramPerkCard() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const referralSentUsers = obj.useReferralProgramBannerDetails().referralSentUsers;
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getRecipientStatus());
  let obj3 = arg1(dependencyMap[12]);
  const items1 = [closure_5];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => store.getHasEligibleFriends());
  const analyticsLocations = importDefault(dependencyMap[13])(importDefault(dependencyMap[14]).PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR).analyticsLocations;
  const arg1 = analyticsLocations;
  let everyResult = stateFromStores.size === arg1(dependencyMap[9]).MAX_REFERRALS_SENT;
  if (everyResult) {
    const items2 = [];
    HermesBuiltin.arraySpread(stateFromStores.values(), 0);
    everyResult = items2.every((arg0) => arg0 === analyticsLocations(closure_2[15]).ReferralOfferStatus.REDEEMED);
  }
  const items3 = [analyticsLocations];
  const tmp3 = importDefault(dependencyMap[13]);
  obj = { style: tmp.container };
  const callback = React.useCallback(() => {
    let obj = callback(paths[16]);
    obj = { location_stack: analyticsLocations };
    obj.track(constants.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, obj);
    callback(paths[17]).openLazy(analyticsLocations(paths[19])(paths[18], paths.paths), "referral-program-share-action-sheet");
  }, items3);
  obj = { nReferralsSent: stateFromStores.size };
  const items4 = [callback(importDefault(dependencyMap[20]), obj), callback(ProgressIndicator, { referralSentUsers }), , ];
  obj1 = { style: tmp.contentContainer };
  const obj2 = { INTEGRATION_CREATE: false, ConstraintReasonCode: false, style: tmp.heading };
  const intl = arg1(dependencyMap[10]).intl;
  obj2.children = intl.string(arg1(dependencyMap[10]).t.USo4s7);
  const items5 = [callback(arg1(dependencyMap[8]).Text, obj2), ];
  obj3 = { INTEGRATION_CREATE: 3, ConstraintReasonCode: null, style: tmp.bodyText, children: getBodyText(false !== stateFromStores1, referralSentUsers.length, everyResult) };
  items5[1] = callback(arg1(dependencyMap[21]).TextWithIOSLinkWorkaround, obj3);
  obj1.children = items5;
  items4[2] = callback2(View, obj1);
  const obj4 = { style: tmp.buttonContainer };
  const obj5 = {};
  let tmp14 = false === stateFromStores1;
  if (!tmp14) {
    tmp14 = tmp7;
  }
  obj5.disabled = tmp14;
  const intl2 = arg1(dependencyMap[10]).intl;
  obj5.text = intl2.string(arg1(dependencyMap[10]).t.Lm2nFc);
  obj5.onPress = callback;
  obj4.children = callback(arg1(dependencyMap[22]).Button, obj5);
  items4[3] = callback(View, obj4);
  obj.children = items4;
  return callback2(View, obj);
};
