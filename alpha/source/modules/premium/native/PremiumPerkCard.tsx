// Module ID: 15243
// Function ID: 15244
// Name: PremiumPerkCard
// Dependencies: [19, 17, 1386, 1072, 21, 5637, 15244, 2048, 7557, 7345, 1114, 15245, 15246, 15247, 15248, 15249, 15250, 15251, 15252, 15253, 15254, 15255, 15256, 15257, 15258, 15259, 15260, 15261, 5619, 2062, 5009, 575, 5712, 15262, 5629, 2]
// Exports: default, usePerkCardHeight, usePremiumPerkCard

// Module 15243 (PremiumPerkCard)
import nativeDefault from "native" /* 575 */;
import intl37 from "intl" /* 1114 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import useFontScale from "useFontScale" /* 5637 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import AssetRegistryDefault from "AssetRegistry" /* 15245 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15246 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 15247 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 15248 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 15249 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 15250 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 15251 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 15252 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 15253 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 15254 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 15255 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 15256 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 15257 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 15258 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 15259 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 15260 */;
import _modDef15261 from "module_15261" /* 15261 */;
import PillTextDefault from "PillText" /* 15262 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const PremiumTypes = PremiumConstants.PremiumTypes;
({ HelpdeskArticles: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
const PerkCardVariant = { NARROW: 0, [0]: "NARROW", WIDE: 1, [1]: "WIDE" };
const frozen = Object.freeze({ [PerkCardVariant.NARROW]: { width: 300, height: 364, scaledFontHeight: 440 }, [PerkCardVariant.WIDE]: { width: 320, height: 364, scaledFontHeight: 440 } });
let closure_13 = createStyles.createStyles((arg0) => {
  let obj2;
  let obj5;
  const obj = { container: obj2, headerComponent: { width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, overflow: "hidden" }, image: { width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm }, title: { marginTop: 16, marginHorizontal: 16 }, description: obj5, button: { marginTop: "auto", marginHorizontal: 16, marginBottom: 16 }, imageContainer: { position: "relative", alignItems: "center", justifyContent: "center" }, imageOverlayText: { color: nativeDefault.colors.WHITE, fontSize: 14 }, imageOverlayTextContainer: { position: "absolute", bottom: "10%", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: 12, paddingVertical: 4, justifyContent: "center", alignItems: "center" }, pillTextContainer: { position: "absolute", width: "auto", top: -8, left: 10 } };
  obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, width: frozen[arg0].width };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  ({ width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, overflow: "hidden" });
  let num = 8;
  ({ width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm });
  const tmp4 = obj;
  if (arg0 === obj.WIDE) {
    num = 24;
  }
  obj5 = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  const tmp5 = arg0 === tmp4.NARROW && { height: "100%" };
  const merged1 = Object.assign(tmp5);
  ({ color: nativeDefault.colors.WHITE, fontSize: 14 });
  ({ position: "absolute", bottom: "10%", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: 12, paddingVertical: 4, justifyContent: "center", alignItems: "center" });
  return obj;
});
const result = size.fileFinishedImporting("modules/premium/native/PremiumPerkCard.tsx");

export default function PremiumPerkCard(variant) {
  let Text;
  let bodyComponent;
  let buttonOnPress;
  let cta;
  let description;
  let headerComponent;
  let imageOverlayText;
  let imageSrc;
  let imageStyle;
  let items;
  let items1;
  let items2;
  let items4;
  let items5;
  let obj;
  let obj15;
  let obj5;
  let pillText;
  let style;
  let title;
  let titleStyle;
  let tmp10;
  let tmp20;
  ({ description, bodyComponent, headerComponent, imageSrc, imageStyle, buttonOnPress, cta } = variant);
  ({ style, title, titleStyle } = variant);
  if (cta === undefined) {
    const intl = intl37.intl;
    cta = intl.string(intl37.t.jVcuVY);
  }
  let WIDE = variant.variant;
  if (WIDE === undefined) {
    WIDE = obj.WIDE;
  }
  ({ imageOverlayText, pillText } = variant);
  const tmp4 = closure_13(WIDE);
  const NARROW = obj.NARROW;
  const tmp5 = obj;
  obj = useFontScale;
  const tmp9 = obj.useFontScale() > 1 ? frozen[NARROW].scaledFontHeight : frozen[NARROW].height;
  if (null != imageSrc) {
    let tmp15;
    if (null != imageOverlayText) {
      const obj3 = { style: items, source: imageSrc };
      items = [tmp4.image, imageStyle];
      const obj2 = { style: tmp4.imageContainer, children: items1 };
      items1 = [React4(FastImageDefault, obj3), ];
      const obj4 = { style: tmp4.imageOverlayTextContainer, children: React4(Text, obj5) };
      obj5 = { style: tmp4.imageOverlayText, variant: "text-md/bold", children: imageOverlayText.toUpperCase() };
      Text = tmp6(5619).Text;
      items1[1] = React4(React3, obj4);
      tmp15 = authStore(React3, obj2);
    } else {
      const obj6 = { style: items2, source: imageSrc };
      items2 = [tmp4.image, imageStyle];
      tmp15 = React4(FastImageDefault, obj6);
    }
    tmp10 = tmp15;
  } else {
    tmp10 = null;
    if (null != headerComponent) {
      const obj7 = { style: tmp4.headerComponent, children: headerComponent };
      tmp10 = React4(React3, obj7);
    }
  }
  if (null != description) {
    const obj8 = { variant: "text-sm/normal", children: description };
    tmp20 = React4(tmp6(5619).Text, obj8);
  } else {
    tmp20 = null;
    if (null != bodyComponent) {
      tmp20 = bodyComponent;
    }
  }
  const items3 = [tmp4.container, , ];
  let tmp24 = WIDE === tmp5.NARROW;
  const tmp22 = authStore;
  if (tmp24) {
    tmp24 = { height: tmp9 };
    const obj9 = { height: tmp9 };
  }
  const obj10 = { style: items3, children: items4 };
  items3[1] = tmp24;
  items3[2] = style;
  let tmp25 = null != pillText;
  if (tmp25) {
    const obj11 = { pillText, style: tmp4.pillTextContainer };
    tmp25 = React4(PillTextDefault, obj11);
  }
  items4 = [tmp25, tmp10, , , ];
  const obj12 = { style: items5, variant: "heading-lg/extrabold", accessibilityRole: "header", children: title };
  items5 = [tmp4.title, titleStyle];
  items4[2] = React4(Text_Text.Text, obj12);
  const obj13 = { style: tmp4.description, children: tmp20 };
  items4[3] = React4(hasOwnProperty, obj13);
  let tmp28Result = null != buttonOnPress;
  if (tmp28Result) {
    const obj14 = { style: tmp4.button, children: React4(components_Button_Button.Button, obj15) };
    obj15 = { size: "sm", variant: "secondary", text: cta, onPress: buttonOnPress };
    tmp28Result = tmp28(tmp23, obj14);
  }
  items4[4] = tmp28Result;
  return tmp22(React3, obj10);
};
export const PerkCardTypes = { CUSTOM_PROFILE: "customProfile", CLIENT_THEMES: "clientThemes", SERVER_BOOSTS: "serverBoosts", GREYED_SERVER_BOOSTS: "greyServerBoosts", CUSTOM_APP_ICONS: "customAppIcons", EMOJI: "emoji", CUSTOM_SOUNDS: "customSounds", STICKER: "sticker", EARLY_ACCESS: "earlyAccess", MEMBER_PRICING: "memberPricing", LARGE_UPLOADS: "largeUploads", HD_VIDEO: "hdVideo", SUPER_REACTIONS: "superReactions", ENTRACE_SOUNDS: "entranceSounds", BADGE: "badge", GREYED_BADGE: "greyBadge", XBOX_GAME_PASS: "xboxGamePass" };
export { PerkCardVariant };
export const PERK_CARD_SIZES = frozen;
export function usePerkCardHeight(NARROW) {
  const obj = useFontScale;
  return obj.useFontScale() > 1 ? frozen[NARROW].scaledFontHeight : frozen[NARROW].height;
}
export function usePremiumPerkCard() {
  let Text;
  let format;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj10;
  let obj11;
  let obj12;
  let obj13;
  let obj14;
  let obj15;
  let obj16;
  let obj17;
  let obj18;
  let obj19;
  let obj20;
  let obj22;
  let obj23;
  let obj24;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let prop;
  let subscriptionPlansLoaded;
  let obj = subscriptionPlansLoaded(15244);
  subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  let obj2 = subscriptionPlansLoaded(2048);
  const maxFileSizeForPremiumType = obj2.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2);
  const callback = react.useCallback(() => {
    const obj2 = { screen: constants.COLLECTIBLES_SHOP, params: { analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD } };
    const obj = subscriptionPlansLoaded(dependencyMap[8]);
    ({ analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD });
    obj.openUserSettings(obj2);
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = subscriptionPlansLoaded(dependencyMap[8]);
    const obj2 = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj2);
  }, []);
  const items = [subscriptionPlansLoaded];
  const callback2 = react.useCallback(() => {
    const obj = subscriptionPlansLoaded(dependencyMap[8]);
    const obj2 = { screen: constants.APPEARANCE_THEME_PICKER };
    obj.openUserSettings(obj2);
  }, []);
  const callback3 = react.useCallback(() => {
    let obj3;
    const obj2 = { screen: metroImportAll.GUILD_BOOSTING, params: obj3 };
    obj3 = { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded };
    const obj = openUserSettings;
    obj.openUserSettings(obj2);
  }, items);
  let obj3 = { customProfile: obj4, clientThemes: obj5, serverBoosts: obj6, greyServerBoosts: obj7, customAppIcons: obj8, emoji: obj9, customSounds: obj10, sticker: obj11, earlyAccess: obj12, memberPricing: obj13, largeUploads: obj14, hdVideo: obj15, superReactions: obj16, entranceSounds: obj17, badge: obj18, greyBadge: obj19, xboxGamePass: obj20 };
  obj4 = { title: intl.string(subscriptionPlansLoaded(1114).t.KcyDwF), description: intl2.string(subscriptionPlansLoaded(1114).t.Mt3U1W), imageSrc: AssetRegistryDefault, buttonOnPress: callback1 };
  const callback4 = react.useCallback(() => {
    const obj = subscriptionPlansLoaded(dependencyMap[8]);
    const obj2 = { screen: constants.APP_ICONS };
    obj.openUserSettings(obj2);
  }, []);
  intl = subscriptionPlansLoaded(1114).intl;
  intl2 = subscriptionPlansLoaded(1114).intl;
  obj5 = { title: intl3.string(subscriptionPlansLoaded(1114).t.kWM48G), description: intl4.string(subscriptionPlansLoaded(1114).t.CjRASJ), imageSrc: AssetRegistryDefault2, buttonOnPress: callback2 };
  intl3 = subscriptionPlansLoaded(1114).intl;
  intl4 = subscriptionPlansLoaded(1114).intl;
  obj6 = { title: intl5.string(subscriptionPlansLoaded(1114).t["NyDu/6"]), description: intl6.string(subscriptionPlansLoaded(1114).t["4pEwXL"]), imageSrc: AssetRegistryDefault3, buttonOnPress: callback3 };
  intl5 = subscriptionPlansLoaded(1114).intl;
  intl6 = subscriptionPlansLoaded(1114).intl;
  obj7 = { title: intl7.string(subscriptionPlansLoaded(1114).t["NyDu/6"]), description: intl8.string(subscriptionPlansLoaded(1114).t["4pEwXL"]), imageSrc: AssetRegistryDefault4, imageOverlayText: intl9.string(subscriptionPlansLoaded(1114).t["/VzCKE"]) };
  intl7 = subscriptionPlansLoaded(1114).intl;
  intl8 = subscriptionPlansLoaded(1114).intl;
  intl9 = subscriptionPlansLoaded(1114).intl;
  obj8 = { title: intl10.string(subscriptionPlansLoaded(1114).t.OuItFi), description: intl11.string(subscriptionPlansLoaded(1114).t.mPyrE6), imageSrc: AssetRegistryDefault5, buttonOnPress: callback4 };
  intl10 = subscriptionPlansLoaded(1114).intl;
  intl11 = subscriptionPlansLoaded(1114).intl;
  obj9 = { title: intl12.string(subscriptionPlansLoaded(1114).t["R2IV/Q"]), description: intl13.string(subscriptionPlansLoaded(1114).t.R5Xag2), imageSrc: AssetRegistryDefault6 };
  intl12 = subscriptionPlansLoaded(1114).intl;
  intl13 = subscriptionPlansLoaded(1114).intl;
  obj10 = { title: intl14.string(subscriptionPlansLoaded(1114).t.LWsArT), description: intl15.string(subscriptionPlansLoaded(1114).t["4lSyCY"]), imageSrc: AssetRegistryDefault7 };
  intl14 = subscriptionPlansLoaded(1114).intl;
  intl15 = subscriptionPlansLoaded(1114).intl;
  obj11 = { title: intl16.string(subscriptionPlansLoaded(1114).t.tzdIwI), description: intl17.string(subscriptionPlansLoaded(1114).t.hJG8ZN), imageSrc: AssetRegistryDefault8 };
  intl16 = subscriptionPlansLoaded(1114).intl;
  intl17 = subscriptionPlansLoaded(1114).intl;
  obj12 = { title: intl18.string(subscriptionPlansLoaded(1114).t.EYxi0o), description: intl19.string(subscriptionPlansLoaded(1114).t.M9AIt1), imageSrc: AssetRegistryDefault9 };
  intl18 = subscriptionPlansLoaded(1114).intl;
  intl19 = subscriptionPlansLoaded(1114).intl;
  obj13 = { title: intl20.string(subscriptionPlansLoaded(1114).t["H4/NBN"]), description: intl21.string(subscriptionPlansLoaded(1114).t.wo3D3T), imageSrc: AssetRegistryDefault10, buttonOnPress: callback };
  intl20 = subscriptionPlansLoaded(1114).intl;
  intl21 = subscriptionPlansLoaded(1114).intl;
  obj14 = { title: intl22.formatToPlainString(subscriptionPlansLoaded(1114).t.jqhAdL, { premiumMaxSize: maxFileSizeForPremiumType }), description: intl23.formatToPlainString(subscriptionPlansLoaded(1114).t["HI+cfm"], { premiumMaxSize: maxFileSizeForPremiumType }), imageSrc: AssetRegistryDefault11 };
  intl22 = subscriptionPlansLoaded(1114).intl;
  intl23 = subscriptionPlansLoaded(1114).intl;
  obj15 = { title: intl24.string(subscriptionPlansLoaded(1114).t.RSXQYO), description: intl25.string(subscriptionPlansLoaded(1114).t.ymCPxp), imageSrc: AssetRegistryDefault12 };
  intl24 = subscriptionPlansLoaded(1114).intl;
  intl25 = subscriptionPlansLoaded(1114).intl;
  obj16 = { title: intl26.string(subscriptionPlansLoaded(1114).t["6S7kO7"]), description: intl27.string(subscriptionPlansLoaded(1114).t.A0U9fk), imageSrc: AssetRegistryDefault13 };
  intl26 = subscriptionPlansLoaded(1114).intl;
  intl27 = subscriptionPlansLoaded(1114).intl;
  obj17 = { title: intl28.string(subscriptionPlansLoaded(1114).t["f4M+H9"]), description: intl29.string(subscriptionPlansLoaded(1114).t["7ZCYvC"]), imageSrc: AssetRegistryDefault14 };
  intl28 = subscriptionPlansLoaded(1114).intl;
  intl29 = subscriptionPlansLoaded(1114).intl;
  obj18 = { title: intl30.string(subscriptionPlansLoaded(1114).t.dcFfSJ), description: intl31.string(subscriptionPlansLoaded(1114).t["37MFFq"]), imageSrc: AssetRegistryDefault15 };
  intl30 = subscriptionPlansLoaded(1114).intl;
  intl31 = subscriptionPlansLoaded(1114).intl;
  obj19 = { title: intl32.string(subscriptionPlansLoaded(1114).t.dcFfSJ), description: intl33.string(subscriptionPlansLoaded(1114).t["37MFFq"]), imageSrc: AssetRegistryDefault16, imageOverlayText: intl34.string(subscriptionPlansLoaded(1114).t["/VzCKE"]) };
  intl32 = subscriptionPlansLoaded(1114).intl;
  intl33 = subscriptionPlansLoaded(1114).intl;
  intl34 = subscriptionPlansLoaded(1114).intl;
  obj20 = { title: intl35.string(subscriptionPlansLoaded(1114).t.aJE9i1), imageSrc: { uri: _modDef15261 }, imageStyle: { aspectRatio: 1.9789473684210526 }, bodyComponent: closure_9(Text, obj22) };
  intl35 = subscriptionPlansLoaded(1114).intl;
  obj22 = { variant: "text-sm/normal", children: format(prop, obj23) };
  ({ uri: _modDef15261 });
  Text = subscriptionPlansLoaded(5619).Text;
  const intl36 = subscriptionPlansLoaded(1114).intl;
  format = intl36.format;
  obj23 = { termsLink: obj24.getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0) };
  prop = subscriptionPlansLoaded(1114).t["9Wv+8h"];
  obj24 = HelpdeskUtilsDefault;
  return obj3;
}
