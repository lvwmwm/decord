// Module ID: 7423
// Function ID: 59655
// Name: usePerkCardHeight
// Dependencies: []
// Exports: default, usePremiumPerkCard

// Module 7423 (usePerkCardHeight)
function usePerkCardHeight(NARROW) {
  return arg1(dependencyMap[5]).useFontScale() > 1 ? frozen[NARROW].scaledFontHeight : frozen[NARROW].height;
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE;
const tmp2 = arg1(dependencyMap[1]);
({ HelpdeskArticles: closure_7, UserSettingsSections: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const obj = { NARROW: 0, [0]: "NARROW", WIDE: 1, [1]: "WIDE" };
const frozen = Object.freeze({ [obj.NARROW]: {}, [obj.WIDE]: {} });
const tmp4 = arg1(dependencyMap[4]);
let closure_13 = arg1(dependencyMap[30]).createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[31]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[31]).radii.sm, width: frozen[arg0].width };
  const merged = Object.assign(importDefault(dependencyMap[31]).shadows.SHADOW_LOW);
  obj.container = obj;
  obj = { width: "100%", borderTopLeftRadius: importDefault(dependencyMap[31]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[31]).radii.sm, overflow: "hidden" };
  obj.headerComponent = obj;
  obj.image = { width: "100%", borderTopLeftRadius: importDefault(dependencyMap[31]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[31]).radii.sm };
  obj.title = {};
  const obj2 = {};
  let num = 8;
  if (arg0 === obj.WIDE) {
    num = 24;
  }
  obj2.marginBottom = num;
  let tmp2 = arg0 === obj.NARROW;
  if (tmp2) {
    const obj3 = { height: "100%" };
    tmp2 = obj3;
  }
  const merged1 = Object.assign(tmp2);
  obj.description = obj2;
  obj.button = {};
  obj.imageContainer = { fr: true, fs: true, ha: true };
  const obj1 = { width: "100%", borderTopLeftRadius: importDefault(dependencyMap[31]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[31]).radii.sm };
  obj.imageOverlayText = { color: importDefault(dependencyMap[31]).colors.WHITE, fontSize: 14 };
  const obj4 = { color: importDefault(dependencyMap[31]).colors.WHITE, fontSize: 14 };
  obj.imageOverlayTextContainer = { borderRadius: importDefault(dependencyMap[31]).radii.round, backgroundColor: importDefault(dependencyMap[31]).colors.BACKGROUND_MOD_STRONG };
  obj.pillTextContainer = {};
  return obj;
});
const obj2 = arg1(dependencyMap[30]);
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/premium/native/PremiumPerkCard.tsx");

export default function PremiumPerkCard(variant) {
  let bodyComponent;
  let buttonOnPress;
  let cta;
  let description;
  let headerComponent;
  let imageOverlayText;
  let imageSrc;
  let imageStyle;
  let pillText;
  let style;
  let title;
  let titleStyle;
  ({ description, bodyComponent, headerComponent, imageSrc, imageStyle, buttonOnPress, cta } = variant);
  ({ style, title, titleStyle } = variant);
  if (cta === undefined) {
    const intl = arg1(dependencyMap[10]).intl;
    cta = intl.string(arg1(dependencyMap[10]).t.jVcuVY);
  }
  let WIDE = variant.variant;
  if (WIDE === undefined) {
    WIDE = obj.WIDE;
  }
  ({ imageOverlayText, pillText } = variant);
  const tmp4 = callback3(WIDE);
  if (null != imageSrc) {
    if (null != imageOverlayText) {
      let obj = { style: tmp4.imageContainer };
      obj = {};
      const items = [tmp4.image, imageStyle];
      obj.style = items;
      obj.source = imageSrc;
      const items1 = [callback(importDefault(dependencyMap[32]), obj), ];
      const obj1 = { style: tmp4.imageOverlayTextContainer };
      const obj2 = { style: tmp4.imageOverlayText, variant: "text-md/bold", children: imageOverlayText.toUpperCase() };
      imageSrc = callback(arg1(dependencyMap[33]).Text, obj2);
      obj1.children = imageSrc;
      items1[1] = callback(closure_4, obj1);
      obj.children = items1;
      let tmp12 = callback2(closure_4, obj);
    } else {
      const obj3 = {};
      const items2 = [tmp4.image, imageStyle];
      obj3.style = items2;
      obj3.source = imageSrc;
      tmp12 = callback(importDefault(dependencyMap[32]), obj3);
    }
  } else {
    let tmp6 = null;
    if (null != headerComponent) {
      obj = { style: tmp4.headerComponent, children: headerComponent };
      tmp6 = callback(closure_4, obj);
    }
    if (null != description) {
      const obj4 = { variant: "text-sm/normal", children: description };
      let tmp20 = callback(arg1(dependencyMap[33]).Text, obj4);
    } else {
      tmp20 = null;
      if (null != bodyComponent) {
        tmp20 = bodyComponent;
      }
    }
    const obj5 = {};
    const items3 = [tmp4.container, , ];
    let tmp27 = WIDE === obj.NARROW;
    if (tmp27) {
      const obj6 = { height: tmp5 };
      tmp27 = obj6;
    }
    items3[1] = tmp27;
    items3[2] = style;
    obj5.style = items3;
    let tmp28 = null != pillText;
    if (tmp28) {
      const obj7 = { pillText, style: tmp4.pillTextContainer };
      tmp28 = callback(importDefault(dependencyMap[34]), obj7);
    }
    const items4 = [tmp28, tmp6, , , ];
    const obj8 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
    const items5 = [tmp4.title, titleStyle];
    obj8.style = items5;
    obj8.children = title;
    items4[2] = callback(arg1(dependencyMap[33]).Text, obj8);
    const obj9 = { style: tmp4.description, children: tmp20 };
    items4[3] = callback(closure_5, obj9);
    let tmp36 = null != buttonOnPress;
    if (tmp36) {
      const obj10 = { style: tmp4.button };
      const obj11 = { text: cta, onPress: buttonOnPress };
      obj10.children = callback(arg1(dependencyMap[35]).Button, obj11);
      tmp36 = callback(closure_4, obj10);
    }
    items4[4] = tmp36;
    obj5.children = items4;
    return callback2(closure_4, obj5);
  }
};
export const PerkCardTypes = { CUSTOM_PROFILE: "customProfile", CLIENT_THEMES: "clientThemes", SERVER_BOOSTS: "serverBoosts", GREYED_SERVER_BOOSTS: "greyServerBoosts", CUSTOM_APP_ICONS: "customAppIcons", EMOJI: "emoji", CUSTOM_SOUNDS: "customSounds", STICKER: "sticker", EARLY_ACCESS: "earlyAccess", MEMBER_PRICING: "memberPricing", LARGE_UPLOADS: "largeUploads", HD_VIDEO: "hdVideo", SUPER_REACTIONS: "superReactions", ENTRACE_SOUNDS: "entranceSounds", BADGE: "badge", GREYED_BADGE: "greyBadge", XBOX_GAME_PASS: "xboxGamePass" };
export const PerkCardVariant = obj;
export const PERK_CARD_SIZES = frozen;
export { usePerkCardHeight };
export const usePremiumPerkCard = function usePremiumPerkCard() {
  let obj = arg1(dependencyMap[6]);
  const subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  const arg1 = subscriptionPlansLoaded;
  let obj1 = arg1(dependencyMap[7]);
  const formatSizeResult = obj1.formatSize(closure_6 / 1024, { useKibibytes: true });
  const callback = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(closure_2[8]);
    obj = { screen: constants.COLLECTIBLES_SHOP };
    obj = { analyticsSource: callback(closure_2[9]).PREMIUM_MARKETING_PERK_CARD };
    obj.params = obj;
    obj.openUserSettings(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(closure_2[8]);
    obj = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  }, []);
  const items = [subscriptionPlansLoaded];
  const callback2 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(closure_2[8]);
    obj = { screen: constants.APPEARANCE_THEME_PICKER };
    obj.openUserSettings(obj);
  }, []);
  const callback3 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(closure_2[8]);
    obj = { screen: constants.GUILD_BOOSTING, params: obj };
    obj = { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded };
    obj.openUserSettings(obj);
  }, items);
  obj = {};
  obj = {};
  const callback4 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(closure_2[8]);
    obj = { screen: constants.APP_ICONS };
    obj.openUserSettings(obj);
  }, []);
  const intl = arg1(dependencyMap[10]).intl;
  obj.title = intl.string(arg1(dependencyMap[10]).t.KcyDwF);
  const intl2 = arg1(dependencyMap[10]).intl;
  obj.description = intl2.string(arg1(dependencyMap[10]).t.Mt3U1W);
  obj.imageSrc = importDefault(dependencyMap[11]);
  obj.buttonOnPress = callback1;
  obj.customProfile = obj;
  obj1 = {};
  const intl3 = arg1(dependencyMap[10]).intl;
  obj1.title = intl3.string(arg1(dependencyMap[10]).t.kWM48G);
  const intl4 = arg1(dependencyMap[10]).intl;
  obj1.description = intl4.string(arg1(dependencyMap[10]).t.CjRASJ);
  obj1.imageSrc = importDefault(dependencyMap[12]);
  obj1.buttonOnPress = callback2;
  obj.clientThemes = obj1;
  const obj2 = {};
  const intl5 = arg1(dependencyMap[10]).intl;
  obj2.title = intl5.string(arg1(dependencyMap[10]).t.NyDu/6);
  const intl6 = arg1(dependencyMap[10]).intl;
  obj2.description = intl6.string(arg1(dependencyMap[10]).t.4pEwXL);
  obj2.imageSrc = importDefault(dependencyMap[13]);
  obj2.buttonOnPress = callback3;
  obj.serverBoosts = obj2;
  const obj3 = {};
  const intl7 = arg1(dependencyMap[10]).intl;
  obj3.title = intl7.string(arg1(dependencyMap[10]).t.NyDu/6);
  const intl8 = arg1(dependencyMap[10]).intl;
  obj3.description = intl8.string(arg1(dependencyMap[10]).t.4pEwXL);
  obj3.imageSrc = importDefault(dependencyMap[14]);
  const intl9 = arg1(dependencyMap[10]).intl;
  obj3.imageOverlayText = intl9.string(arg1(dependencyMap[10]).t./VzCKE);
  obj.greyServerBoosts = obj3;
  const obj4 = {};
  const intl10 = arg1(dependencyMap[10]).intl;
  obj4.title = intl10.string(arg1(dependencyMap[10]).t.OuItFi);
  const intl11 = arg1(dependencyMap[10]).intl;
  obj4.description = intl11.string(arg1(dependencyMap[10]).t.mPyrE6);
  obj4.imageSrc = importDefault(dependencyMap[15]);
  obj4.buttonOnPress = callback4;
  obj.customAppIcons = obj4;
  const obj5 = {};
  const intl12 = arg1(dependencyMap[10]).intl;
  obj5.title = intl12.string(arg1(dependencyMap[10]).t.R2IV/Q);
  const intl13 = arg1(dependencyMap[10]).intl;
  obj5.description = intl13.string(arg1(dependencyMap[10]).t.R5Xag2);
  obj5.imageSrc = importDefault(dependencyMap[16]);
  obj.emoji = obj5;
  const obj6 = {};
  const intl14 = arg1(dependencyMap[10]).intl;
  obj6.title = intl14.string(arg1(dependencyMap[10]).t.LWsArT);
  const intl15 = arg1(dependencyMap[10]).intl;
  obj6.description = intl15.string(arg1(dependencyMap[10]).t.4lSyCY);
  obj6.imageSrc = importDefault(dependencyMap[17]);
  obj.customSounds = obj6;
  const obj7 = {};
  const intl16 = arg1(dependencyMap[10]).intl;
  obj7.title = intl16.string(arg1(dependencyMap[10]).t.tzdIwI);
  const intl17 = arg1(dependencyMap[10]).intl;
  obj7.description = intl17.string(arg1(dependencyMap[10]).t.hJG8ZN);
  obj7.imageSrc = importDefault(dependencyMap[18]);
  obj.sticker = obj7;
  const obj8 = {};
  const intl18 = arg1(dependencyMap[10]).intl;
  obj8.title = intl18.string(arg1(dependencyMap[10]).t.EYxi0o);
  const intl19 = arg1(dependencyMap[10]).intl;
  obj8.description = intl19.string(arg1(dependencyMap[10]).t.M9AIt1);
  obj8.imageSrc = importDefault(dependencyMap[19]);
  obj.earlyAccess = obj8;
  const obj9 = {};
  const intl20 = arg1(dependencyMap[10]).intl;
  obj9.title = intl20.string(arg1(dependencyMap[10]).t.H4/NBN);
  const intl21 = arg1(dependencyMap[10]).intl;
  obj9.description = intl21.string(arg1(dependencyMap[10]).t.wo3D3T);
  obj9.imageSrc = importDefault(dependencyMap[20]);
  obj9.buttonOnPress = callback;
  obj.memberPricing = obj9;
  const obj10 = {};
  const intl22 = arg1(dependencyMap[10]).intl;
  obj10.title = intl22.formatToPlainString(arg1(dependencyMap[10]).t.jqhAdL, { premiumMaxSize: formatSizeResult });
  const intl23 = arg1(dependencyMap[10]).intl;
  obj10.description = intl23.formatToPlainString(arg1(dependencyMap[10]).t.HI+cfm, { premiumMaxSize: formatSizeResult });
  obj10.imageSrc = importDefault(dependencyMap[21]);
  obj.largeUploads = obj10;
  const obj11 = {};
  const intl24 = arg1(dependencyMap[10]).intl;
  obj11.title = intl24.string(arg1(dependencyMap[10]).t.RSXQYO);
  const intl25 = arg1(dependencyMap[10]).intl;
  obj11.description = intl25.string(arg1(dependencyMap[10]).t.ymCPxp);
  obj11.imageSrc = importDefault(dependencyMap[22]);
  obj.hdVideo = obj11;
  const obj12 = {};
  const intl26 = arg1(dependencyMap[10]).intl;
  obj12.title = intl26.string(arg1(dependencyMap[10]).t.6S7kO7);
  const intl27 = arg1(dependencyMap[10]).intl;
  obj12.description = intl27.string(arg1(dependencyMap[10]).t.A0U9fk);
  obj12.imageSrc = importDefault(dependencyMap[23]);
  obj.superReactions = obj12;
  const obj13 = {};
  const intl28 = arg1(dependencyMap[10]).intl;
  obj13.title = intl28.string(arg1(dependencyMap[10]).t.f4M+H9);
  const intl29 = arg1(dependencyMap[10]).intl;
  obj13.description = intl29.string(arg1(dependencyMap[10]).t.7ZCYvC);
  obj13.imageSrc = importDefault(dependencyMap[24]);
  obj.entranceSounds = obj13;
  const obj14 = {};
  const intl30 = arg1(dependencyMap[10]).intl;
  obj14.title = intl30.string(arg1(dependencyMap[10]).t.dcFfSJ);
  const intl31 = arg1(dependencyMap[10]).intl;
  obj14.description = intl31.string(arg1(dependencyMap[10]).t.37MFFq);
  obj14.imageSrc = importDefault(dependencyMap[25]);
  obj.badge = obj14;
  const obj15 = {};
  const intl32 = arg1(dependencyMap[10]).intl;
  obj15.title = intl32.string(arg1(dependencyMap[10]).t.dcFfSJ);
  const intl33 = arg1(dependencyMap[10]).intl;
  obj15.description = intl33.string(arg1(dependencyMap[10]).t.37MFFq);
  obj15.imageSrc = importDefault(dependencyMap[26]);
  const intl34 = arg1(dependencyMap[10]).intl;
  obj15.imageOverlayText = intl34.string(arg1(dependencyMap[10]).t./VzCKE);
  obj.greyBadge = obj15;
  const obj16 = {};
  const intl35 = arg1(dependencyMap[10]).intl;
  obj16.title = intl35.string(arg1(dependencyMap[10]).t.aJE9i1);
  obj16.imageSrc = { uri: importDefault(dependencyMap[27]) };
  obj16.imageStyle = { aspectRatio: 1.9789473684210526 };
  const obj18 = { variant: "text-sm/normal" };
  const intl36 = arg1(dependencyMap[10]).intl;
  const obj19 = {};
  const obj17 = { uri: importDefault(dependencyMap[27]) };
  obj19.termsLink = importDefault(dependencyMap[29]).getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0);
  obj18.children = intl36.format(arg1(dependencyMap[10]).t.9Wv+8h, obj19);
  obj16.bodyComponent = callback(arg1(dependencyMap[28]).TextWithIOSLinkWorkaround, obj18);
  obj.xboxGamePass = obj16;
  return obj;
};
