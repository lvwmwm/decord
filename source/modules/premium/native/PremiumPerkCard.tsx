// Module ID: 12403
// Function ID: 96417
// Name: usePerkCardHeight
// Dependencies: [31, 27, 1851, 653, 33, 4549, 12404, 4025, 5796, 5482, 1212, 12405, 12406, 12407, 12408, 12409, 12410, 12411, 12412, 12413, 12414, 12415, 12416, 12417, 12418, 12419, 12420, 12421, 4126, 1920, 4130, 689, 5085, 12422, 4543, 2]
// Exports: default, usePremiumPerkCard

// Module 12403 (usePerkCardHeight)
import closure_3 from "_createForOfIteratorHelperLoose";
import get_ActivityIndicator from "metadata";
import { MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE as closure_6 } from "GuildFeatures";
import ME from "ME";
import jsxProd from "PillText";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function usePerkCardHeight(NARROW) {
  return require(4549) /* getFontScale */.useFontScale() > 1 ? frozen[NARROW].scaledFontHeight : frozen[NARROW].height;
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ HelpdeskArticles: closure_7, UserSettingsSections: closure_8 } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = { NARROW: 0, [0]: "NARROW", WIDE: 1, [1]: "WIDE" };
const frozen = Object.freeze({ [obj.NARROW]: { width: 300, height: 364, scaledFontHeight: 440 }, [obj.WIDE]: { width: 320, height: 364, scaledFontHeight: 440 } });
let closure_13 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).radii.sm, width: frozen[arg0].width };
  const merged = Object.assign(importDefault(689).shadows.SHADOW_LOW);
  obj.container = obj;
  obj = { width: "100%", borderTopLeftRadius: importDefault(689).radii.sm, borderTopRightRadius: importDefault(689).radii.sm, overflow: "hidden" };
  obj.headerComponent = obj;
  obj.image = { width: "100%", borderTopLeftRadius: importDefault(689).radii.sm, borderTopRightRadius: importDefault(689).radii.sm };
  obj.title = { marginTop: 16, marginHorizontal: 16 };
  const obj2 = { marginTop: 8, marginHorizontal: 16 };
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
  obj.button = { marginTop: "auto", marginHorizontal: 16, marginBottom: 16 };
  obj.imageContainer = { position: "relative", alignItems: "center", justifyContent: "center" };
  const obj1 = { width: "100%", borderTopLeftRadius: importDefault(689).radii.sm, borderTopRightRadius: importDefault(689).radii.sm };
  obj.imageOverlayText = { color: importDefault(689).colors.WHITE, fontSize: 14 };
  const obj5 = { position: "absolute", bottom: "10%", borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, paddingHorizontal: 12, paddingVertical: 4, justifyContent: "center", alignItems: "center" };
  obj.imageOverlayTextContainer = obj5;
  obj.pillTextContainer = { position: "absolute", width: "auto", top: -8, left: 10 };
  return obj;
});
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/PremiumPerkCard.tsx");

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
    const intl = require(1212) /* getSystemLocale */.intl;
    cta = intl.string(require(1212) /* getSystemLocale */.t.jVcuVY);
  }
  let WIDE = variant.variant;
  if (WIDE === undefined) {
    WIDE = obj.WIDE;
  }
  ({ imageOverlayText, pillText } = variant);
  const tmp4 = callback3(WIDE);
  if (null != imageSrc) {
    if (null != imageOverlayText) {
      obj = { style: tmp4.imageContainer };
      obj = {};
      const items = [tmp4.image, imageStyle];
      obj.style = items;
      obj.source = imageSrc;
      const items1 = [callback(importDefault(5085), obj), ];
      const obj1 = { style: tmp4.imageOverlayTextContainer };
      const obj2 = { style: tmp4.imageOverlayText, variant: "text-md/bold", children: imageOverlayText.toUpperCase() };
      imageSrc = callback(require(4126) /* Text */.Text, obj2);
      obj1.children = imageSrc;
      items1[1] = callback(closure_4, obj1);
      obj.children = items1;
      let tmp12 = callback2(closure_4, obj);
    } else {
      const obj3 = {};
      const items2 = [tmp4.image, imageStyle];
      obj3.style = items2;
      obj3.source = imageSrc;
      tmp12 = callback(importDefault(5085), obj3);
    }
  } else {
    let tmp6 = null;
    if (null != headerComponent) {
      obj = { style: tmp4.headerComponent, children: headerComponent };
      tmp6 = callback(closure_4, obj);
    }
    if (null != description) {
      const obj4 = { variant: "text-sm/normal", children: description };
      let tmp20 = callback(require(4126) /* Text */.Text, obj4);
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
      tmp28 = callback(importDefault(12422), obj7);
    }
    const items4 = [tmp28, tmp6, , , ];
    const obj8 = { style: null, variant: "heading-lg/extrabold", accessibilityRole: "header" };
    const items5 = [tmp4.title, titleStyle];
    obj8.style = items5;
    obj8.children = title;
    items4[2] = callback(require(4126) /* Text */.Text, obj8);
    const obj9 = { style: tmp4.description, children: tmp20 };
    items4[3] = callback(closure_5, obj9);
    let tmp36 = null != buttonOnPress;
    if (tmp36) {
      const obj10 = { style: tmp4.button };
      const obj11 = { size: "sm", variant: "secondary", text: cta, onPress: buttonOnPress };
      obj10.children = callback(require(4543) /* Button */.Button, obj11);
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
  let obj = subscriptionPlansLoaded(12404);
  subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  let obj1 = subscriptionPlansLoaded(4025);
  const formatSizeResult = obj1.formatSize(closure_6 / 1024, { useKibibytes: true });
  const callback = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(outer1_2[8]);
    obj = { screen: outer1_8.COLLECTIBLES_SHOP };
    obj = { analyticsSource: outer1_1(outer1_2[9]).PREMIUM_MARKETING_PERK_CARD };
    obj.params = obj;
    obj.openUserSettings(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(outer1_2[8]);
    obj = { screen: outer1_8.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  }, []);
  const items = [subscriptionPlansLoaded];
  const callback2 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(outer1_2[8]);
    obj = { screen: outer1_8.APPEARANCE_THEME_PICKER };
    obj.openUserSettings(obj);
  }, []);
  const callback3 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(outer1_2[8]);
    obj = { screen: outer1_8.GUILD_BOOSTING, params: obj };
    obj = { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded };
    obj.openUserSettings(obj);
  }, items);
  obj = {};
  obj = {};
  const callback4 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(outer1_2[8]);
    obj = { screen: outer1_8.APP_ICONS };
    obj.openUserSettings(obj);
  }, []);
  const intl = subscriptionPlansLoaded(1212).intl;
  obj.title = intl.string(subscriptionPlansLoaded(1212).t.KcyDwF);
  const intl2 = subscriptionPlansLoaded(1212).intl;
  obj.description = intl2.string(subscriptionPlansLoaded(1212).t.Mt3U1W);
  obj.imageSrc = importDefault(12405);
  obj.buttonOnPress = callback1;
  obj.customProfile = obj;
  obj1 = {};
  const intl3 = subscriptionPlansLoaded(1212).intl;
  obj1.title = intl3.string(subscriptionPlansLoaded(1212).t.kWM48G);
  const intl4 = subscriptionPlansLoaded(1212).intl;
  obj1.description = intl4.string(subscriptionPlansLoaded(1212).t.CjRASJ);
  obj1.imageSrc = importDefault(12406);
  obj1.buttonOnPress = callback2;
  obj.clientThemes = obj1;
  const obj2 = {};
  const intl5 = subscriptionPlansLoaded(1212).intl;
  obj2.title = intl5.string(subscriptionPlansLoaded(1212).t["NyDu/6"]);
  const intl6 = subscriptionPlansLoaded(1212).intl;
  obj2.description = intl6.string(subscriptionPlansLoaded(1212).t["4pEwXL"]);
  obj2.imageSrc = importDefault(12407);
  obj2.buttonOnPress = callback3;
  obj.serverBoosts = obj2;
  const obj3 = {};
  const intl7 = subscriptionPlansLoaded(1212).intl;
  obj3.title = intl7.string(subscriptionPlansLoaded(1212).t["NyDu/6"]);
  const intl8 = subscriptionPlansLoaded(1212).intl;
  obj3.description = intl8.string(subscriptionPlansLoaded(1212).t["4pEwXL"]);
  obj3.imageSrc = importDefault(12408);
  const intl9 = subscriptionPlansLoaded(1212).intl;
  obj3.imageOverlayText = intl9.string(subscriptionPlansLoaded(1212).t["/VzCKE"]);
  obj.greyServerBoosts = obj3;
  const obj4 = {};
  const intl10 = subscriptionPlansLoaded(1212).intl;
  obj4.title = intl10.string(subscriptionPlansLoaded(1212).t.OuItFi);
  const intl11 = subscriptionPlansLoaded(1212).intl;
  obj4.description = intl11.string(subscriptionPlansLoaded(1212).t.mPyrE6);
  obj4.imageSrc = importDefault(12409);
  obj4.buttonOnPress = callback4;
  obj.customAppIcons = obj4;
  const obj5 = {};
  const intl12 = subscriptionPlansLoaded(1212).intl;
  obj5.title = intl12.string(subscriptionPlansLoaded(1212).t["R2IV/Q"]);
  const intl13 = subscriptionPlansLoaded(1212).intl;
  obj5.description = intl13.string(subscriptionPlansLoaded(1212).t.R5Xag2);
  obj5.imageSrc = importDefault(12410);
  obj.emoji = obj5;
  const obj6 = {};
  const intl14 = subscriptionPlansLoaded(1212).intl;
  obj6.title = intl14.string(subscriptionPlansLoaded(1212).t.LWsArT);
  const intl15 = subscriptionPlansLoaded(1212).intl;
  obj6.description = intl15.string(subscriptionPlansLoaded(1212).t["4lSyCY"]);
  obj6.imageSrc = importDefault(12411);
  obj.customSounds = obj6;
  const obj7 = {};
  const intl16 = subscriptionPlansLoaded(1212).intl;
  obj7.title = intl16.string(subscriptionPlansLoaded(1212).t.tzdIwI);
  const intl17 = subscriptionPlansLoaded(1212).intl;
  obj7.description = intl17.string(subscriptionPlansLoaded(1212).t.hJG8ZN);
  obj7.imageSrc = importDefault(12412);
  obj.sticker = obj7;
  const obj8 = {};
  const intl18 = subscriptionPlansLoaded(1212).intl;
  obj8.title = intl18.string(subscriptionPlansLoaded(1212).t.EYxi0o);
  const intl19 = subscriptionPlansLoaded(1212).intl;
  obj8.description = intl19.string(subscriptionPlansLoaded(1212).t.M9AIt1);
  obj8.imageSrc = importDefault(12413);
  obj.earlyAccess = obj8;
  const obj9 = {};
  const intl20 = subscriptionPlansLoaded(1212).intl;
  obj9.title = intl20.string(subscriptionPlansLoaded(1212).t["H4/NBN"]);
  const intl21 = subscriptionPlansLoaded(1212).intl;
  obj9.description = intl21.string(subscriptionPlansLoaded(1212).t.wo3D3T);
  obj9.imageSrc = importDefault(12414);
  obj9.buttonOnPress = callback;
  obj.memberPricing = obj9;
  const obj10 = {};
  const intl22 = subscriptionPlansLoaded(1212).intl;
  obj10.title = intl22.formatToPlainString(subscriptionPlansLoaded(1212).t.jqhAdL, { premiumMaxSize: formatSizeResult });
  const intl23 = subscriptionPlansLoaded(1212).intl;
  obj10.description = intl23.formatToPlainString(subscriptionPlansLoaded(1212).t["HI+cfm"], { premiumMaxSize: formatSizeResult });
  obj10.imageSrc = importDefault(12415);
  obj.largeUploads = obj10;
  const obj11 = {};
  const intl24 = subscriptionPlansLoaded(1212).intl;
  obj11.title = intl24.string(subscriptionPlansLoaded(1212).t.RSXQYO);
  const intl25 = subscriptionPlansLoaded(1212).intl;
  obj11.description = intl25.string(subscriptionPlansLoaded(1212).t.ymCPxp);
  obj11.imageSrc = importDefault(12416);
  obj.hdVideo = obj11;
  const obj12 = {};
  const intl26 = subscriptionPlansLoaded(1212).intl;
  obj12.title = intl26.string(subscriptionPlansLoaded(1212).t["6S7kO7"]);
  const intl27 = subscriptionPlansLoaded(1212).intl;
  obj12.description = intl27.string(subscriptionPlansLoaded(1212).t.A0U9fk);
  obj12.imageSrc = importDefault(12417);
  obj.superReactions = obj12;
  const obj13 = {};
  const intl28 = subscriptionPlansLoaded(1212).intl;
  obj13.title = intl28.string(subscriptionPlansLoaded(1212).t["f4M+H9"]);
  const intl29 = subscriptionPlansLoaded(1212).intl;
  obj13.description = intl29.string(subscriptionPlansLoaded(1212).t["7ZCYvC"]);
  obj13.imageSrc = importDefault(12418);
  obj.entranceSounds = obj13;
  const obj14 = {};
  const intl30 = subscriptionPlansLoaded(1212).intl;
  obj14.title = intl30.string(subscriptionPlansLoaded(1212).t.dcFfSJ);
  const intl31 = subscriptionPlansLoaded(1212).intl;
  obj14.description = intl31.string(subscriptionPlansLoaded(1212).t["37MFFq"]);
  obj14.imageSrc = importDefault(12419);
  obj.badge = obj14;
  const obj15 = {};
  const intl32 = subscriptionPlansLoaded(1212).intl;
  obj15.title = intl32.string(subscriptionPlansLoaded(1212).t.dcFfSJ);
  const intl33 = subscriptionPlansLoaded(1212).intl;
  obj15.description = intl33.string(subscriptionPlansLoaded(1212).t["37MFFq"]);
  obj15.imageSrc = importDefault(12420);
  const intl34 = subscriptionPlansLoaded(1212).intl;
  obj15.imageOverlayText = intl34.string(subscriptionPlansLoaded(1212).t["/VzCKE"]);
  obj.greyBadge = obj15;
  const obj16 = {};
  const intl35 = subscriptionPlansLoaded(1212).intl;
  obj16.title = intl35.string(subscriptionPlansLoaded(1212).t.aJE9i1);
  obj16.imageSrc = { uri: importDefault(12421) };
  obj16.imageStyle = { aspectRatio: 1.9789473684210526 };
  const obj18 = { variant: "text-sm/normal" };
  const intl36 = subscriptionPlansLoaded(1212).intl;
  const obj19 = {};
  const obj17 = { uri: importDefault(12421) };
  obj19.termsLink = importDefault(1920).getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0);
  obj18.children = intl36.format(subscriptionPlansLoaded(1212).t["9Wv+8h"], obj19);
  obj16.bodyComponent = callback(subscriptionPlansLoaded(4126).Text, obj18);
  obj.xboxGamePass = obj16;
  return obj;
};
