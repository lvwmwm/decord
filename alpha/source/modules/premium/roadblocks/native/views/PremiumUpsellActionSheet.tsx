// Module ID: 9944
// Function ID: 9945
// Name: PremiumUpsellActionSheet
// Dependencies: [19, 17, 5142, 1192, 5898, 5172, 1385, 1387, 1072, 5998, 9945, 21, 5141, 575, 5732, 2176, 5200, 8371, 8356, 1113, 9946, 9950, 9954, 9955, 5382, 9943, 9956, 14811, 14815, 1092, 10152, 1377, 9651, 5851, 5723, 504, 7462, 9935, 7767, 8669, 14816, 1252, 10209, 5331, 7502, 14818, 5761, 5768, 8660, 2]
// Exports: default

// Module 9944 (PremiumUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import PremiumUtils from "PremiumUtils" /* 2176 */;
import ChatInputUtils from "ChatInputUtils" /* 5331 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import LinearGradientDefault from "LinearGradient" /* 5723 */;
import FastImageDefault from "FastImage" /* 5851 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5998 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 9943 */;
import ScheduledMessagesConstants from "ScheduledMessagesConstants" /* 9945 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;
import UserStore from "UserStore" /* 1385 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let guildId;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let tmp;
let unpackModuleId;
const APNGPlayer = tmp(9651);
function PremiumUpsellImage(arg0) {
  let image;
  let style;
  let useReducedMotion;
  ({ image, style, useReducedMotion } = arg0);
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      let tmp5;
      if (null != image.uri) {
        const obj2 = { url: image.uri, style, autoplay: true };
        tmp5 = authStore5(APNGPlayer.APNGPlayer, obj2);
      }
      return tmp5;
    }
  }
  const obj3 = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
  tmp5 = authStore5(FastImageDefault, obj3);
}
function PremiumUpsellHero(arg0) {
  let items;
  let items1;
  let obj4;
  let obj5;
  let pageConfig;
  let styles;
  let tmp10;
  let tmp8;
  let useReducedMotion;
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    tmp10 = authStore5(View, obj2);
  } else {
    tmp10 = null;
    if (null != pageConfig.image) {
      let tmp3;
      if (null != pageConfig.imageGradientBackground) {
        const obj3 = { style: styles.imageGradientBackgroundContainer, children: authStore5(tmp8, obj4) };
        obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: authStore5(PremiumUpsellImage, obj5) };
        obj5 = { image: pageConfig.image, style: items, useReducedMotion };
        items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        tmp8 = LinearGradientDefault;
        tmp3 = authStore5(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: items1, useReducedMotion };
        items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        tmp3 = authStore5(PremiumUpsellImage, obj);
      }
      tmp10 = tmp3;
    }
  }
  return tmp10;
}
const View = react_native.View;
({ PremiumSubscriptionSKUs: c10, PremiumTypes: unpackModuleId, PremiumUpsellTypes: closure_12 } = PremiumConstants);
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ThemeTypes: closure_15 } = Constants);
const ApplicationStreamFPS = StreamSettingsConstants.ApplicationStreamFPS;
const premiumMax = ScheduledMessagesConstants.MAX_SCHEDULED_MESSAGES_PER_USER;
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = { hero: obj2, image: { width: 240, height: 144 }, text: { alignSelf: "center", textAlign: "center" }, betaTag: { marginLeft: 0 }, description: obj3, textContainer: obj4, buttonContainer: obj5, imageGradientBackgroundContainer: { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }, imageGradientBackground: obj6, imageInGradientBackground: obj7 };
obj2 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj6 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
obj7 = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
let closure_21 = createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(analyticsLocations) {
  let currentUser;
  let featureName;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl2;
  let intl20;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items3;
  let items7;
  let items8;
  let items9;
  let legacyProps;
  let obj15;
  let obj16;
  let obj17;
  let obj19;
  let obj20;
  let obj29;
  let obj9;
  let str2;
  let theme;
  let tmp2Result24;
  let tmp36;
  let useReducedMotion;
  ({ featureName, legacyProps } = analyticsLocations);
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  analyticsLocations = undefined;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let closure_4;
  const onDismiss = analyticsLocations.onDismiss;
  const tmp = closure_21();
  const tmp2 = legacyProps;
  const tmp3 = useTier0UpsellContent;
  let obj = legacyProps(useTier0UpsellContent[35]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp5 = analyticsLocations;
  analyticsLocations = analyticsLocations(useTier0UpsellContent[36])(analyticsLocations1).analyticsLocations;
  let initialUpsellKey;
  const usePremiumUpsellConfig = legacyProps(useTier0UpsellContent[37]).usePremiumUpsellConfig;
  legacyProps(useTier0UpsellContent[37]);
  const tmp7 = analyticsLocations1;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    const tmp2Result = tmp2(tmp3[30]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = usePremiumUpsellConfig(initialUpsellKey, analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  const tmp2Result14 = tmp2(tmp3[38]);
  const premiumTrialOffer = tmp2Result14.usePremiumTrialOffer();
  tmp2(tmp3[39]);
  let mobileRoadblockButtonText = null;
  if (!useTier0UpsellContent) {
    let obj2 = { subscriptionTier: TIER_2.TIER_2, trialOffer: premiumTrialOffer, discountOffer: tmp12 };
    const tmp2Result16 = tmp2(tmp3[40]);
    mobileRoadblockButtonText = tmp2Result16.getMobileRoadblockButtonText(obj2);
  }
  const items1 = [ThemeStore];
  const tmp2Result17 = tmp2(tmp3[35]);
  const stateFromStores1 = tmp2Result17.useStateFromStores(items1, () => theme.theme);
  const items2 = [SelectedGuildStore];
  const tmp2Result18 = tmp2(tmp3[35]);
  const stateFromStores2 = tmp2Result18.useStateFromStores(items2, () => guildId.getGuildId());
  const tmp18 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
  const tmp2Result19 = tmp2(tmp3[14]);
  const token = tmp2Result19.useToken(tmp5(tmp3[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  let str = "dark";
  const tmp2Result20 = tmp2(tmp3[14]);
  const token1 = tmp2Result20.useToken(tmp5(tmp3[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants4.LIGHT) {
    str = "light";
  }
  const tmp2Result21 = tmp2(tmp3[15]);
  const premiumTypeDisplayName = tmp2Result21.getPremiumTypeDisplayName(tmp18);
  let effectiveUploadLimit;
  if (featureName === tmp2(tmp3[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const getEffectiveUploadLimit = tmp2(tmp3[17]).getEffectiveUploadLimit;
    tmp2(tmp3[17]);
    const tmp2Result23 = tmp2(tmp3[18]);
    effectiveUploadLimit = getEffectiveUploadLimit(tmp2Result23.maxFileSize(stateFromStores2));
  }
  const obj3 = {};
  const obj4 = { title: intl.string(tmp2(tmp3[19]).t.jGDYF0), description: intl2.formatToPlainString(tmp2(tmp3[19]).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE, upsellType: constants.SOUNDBOARD_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" } };
  const SOUNDBOARD_EVERYWHERE = tmp2(tmp3[16]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  intl = tmp2(tmp3[19]).intl;
  intl2 = tmp2(tmp3[19]).intl;
  obj3[SOUNDBOARD_EVERYWHERE] = obj4;
  const obj6 = { title: intl3.string(tmp2(tmp3[19]).t.zY5PPb), description: intl4.formatToPlainString(tmp2(tmp3[19]).t["uukIF/"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE, upsellType: constants.EMOJI_EVERYWHERE_UPSELL, illustration: closure_18(tmp2(tmp3[20]).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false }) };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" });
  const EMOJIS_EVERYWHERE = tmp2(tmp3[16]).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  intl3 = tmp2(tmp3[19]).intl;
  intl4 = tmp2(tmp3[19]).intl;
  obj3[EMOJIS_EVERYWHERE] = obj6;
  const obj7 = { title: intl5.string(tmp2(tmp3[19]).t.Eukdgl), description: intl6.string(tmp2(tmp3[19]).t.sMmd7s), analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: closure_18(tmp2(tmp3[21]).StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
  const STICKERS_EVERYWHERE = tmp2(tmp3[16]).EntitlementFeatureNames.STICKERS_EVERYWHERE;
  intl5 = tmp2(tmp3[19]).intl;
  intl6 = tmp2(tmp3[19]).intl;
  obj3[STICKERS_EVERYWHERE] = obj7;
  const obj8 = { title: intl7.string(tmp2(tmp3[19]).t["G+pngo"]), description: closure_18(closure_19, obj9), analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" } };
  const INCREASED_FILE_UPLOAD_SIZE = tmp2(tmp3[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  intl7 = tmp2(tmp3[19]).intl;
  obj9 = { children: tmp2Result24.fileUploadLimitRoadblockDescription({ guildId: stateFromStores2, maxSize: effectiveUploadLimit }) };
  obj3[INCREASED_FILE_UPLOAD_SIZE] = obj8;
  tmp2Result24 = tmp2(tmp3[18]);
  const obj11 = { title: intl8.string(tmp2(tmp3[19]).t.SI7R9I), description: intl9.formatToPlainString(tmp2(tmp3[19]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, illustration: closure_18(tmp2(tmp3[20]).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false }) };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" });
  const ANIMATED_EMOJIS = tmp2(tmp3[16]).EntitlementFeatureNames.ANIMATED_EMOJIS;
  intl8 = tmp2(tmp3[19]).intl;
  intl9 = tmp2(tmp3[19]).intl;
  obj3[ANIMATED_EMOJIS] = obj11;
  const obj12 = { title: intl10.string(tmp2(tmp3[19]).t.p0I2Bk), description: intl11.string(tmp2(tmp3[19]).t.jBqF2k), analyticsPage: constants3.PREMIUM_UPSELL_CLIENT_THEMES, upsellType: constants.CLIENT_THEMES_UPSELL, image: tmp5(tmp3[22]) };
  const CLIENT_THEMES = tmp2(tmp3[16]).EntitlementFeatureNames.CLIENT_THEMES;
  intl10 = tmp2(tmp3[19]).intl;
  intl11 = tmp2(tmp3[19]).intl;
  obj3[CLIENT_THEMES] = obj12;
  const obj13 = { title: intl12.string(tmp2(tmp3[19]).t.TYFwcy), description: intl13.string(tmp2(tmp3[19]).t.HDt8ip), analyticsPage: constants3.PREMIUM_UPSELL_APP_ICONS, upsellType: constants.APP_ICON_UPSELL, image: tmp5(tmp3[23]) };
  const APP_ICONS = tmp2(tmp3[16]).EntitlementFeatureNames.APP_ICONS;
  intl12 = tmp2(tmp3[19]).intl;
  intl13 = tmp2(tmp3[19]).intl;
  obj3[APP_ICONS] = obj13;
  const obj14 = { title: intl14.formatToPlainString(tmp2(tmp3[19]).t.GNoaxo, obj15), showBetaBadge: true, description: closure_18(closure_19, obj16), analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, illustration: closure_18(tmp2(tmp3[27]).NitroScheduleMessageSpotIllustration, { width: 198, height: 132, accessible: false }) };
  const SCHEDULED_MESSAGES = tmp2(tmp3[16]).EntitlementFeatureNames.SCHEDULED_MESSAGES;
  intl14 = tmp2(tmp3[19]).intl;
  obj15 = { premiumMax };
  obj16 = { children: intl15.format(tmp2(tmp3[19]).t["1kFyto"], obj17) };
  intl15 = tmp2(tmp3[19]).intl;
  obj17 = {
    premiumMax,
    onClick() {
      const obj = analyticsLocations(useTier0UpsellContent[24]);
      obj.hideActionSheet(legacyProps(useTier0UpsellContent[25]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj2 = legacyProps(useTier0UpsellContent[26]);
      const result = obj2.showScheduledMessagesModal();
    }
  };
  obj3[SCHEDULED_MESSAGES] = obj14;
  const obj18 = { title: intl16.string(tmp2(tmp3[19]).t.ETZQx5), description: intl17.formatToPlainString(tmp2(tmp3[19]).t["4nlpei"], obj19), analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: tmp5(tmp3[28]), imageGradientBackground: obj20 };
  const STREAM_HIGH_QUALITY = tmp2(tmp3[16]).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
  intl16 = tmp2(tmp3[19]).intl;
  intl17 = tmp2(tmp3[19]).intl;
  obj19 = { fps: ApplicationStreamFPS.FPS_60 };
  obj20 = { colors: items3, start: tmp2(tmp3[29]).HorizontalGradient.START, end: tmp2(tmp3[29]).HorizontalGradient.END };
  items3 = [token, token1];
  obj3[STREAM_HIGH_QUALITY] = obj18;
  closure_4 = tmp25;
  const items4 = [AccessibilityStore];
  const items5 = [obj3[featureName], analyticsLocations, useTier0UpsellContent, legacyProps];
  const tmp2Result25 = tmp2(tmp3[35]);
  const stateFromStores3 = tmp2Result25.useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const effect = onViewAllPerks.useEffect(() => {
    let analyticsPage;
    let obj2;
    let upsellType;
    let analyticsProperties;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_UPSELL_VIEWED = map1.PREMIUM_UPSELL_VIEWED;
    AnalyticsUtilsDefault;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj = { type: upsellType, location: { page: analyticsPage }, location_stack: analyticsLocations, sku_id: obj2.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? c10.TIER_0 : c10.TIER_2), voice_guild_id: guildId };
    const merged = Object.assign(analyticsProperties);
    upsellType = undefined;
    if (closure_4 != null) {
      upsellType = tmp5.upsellType;
    }
    analyticsPage = undefined;
    if (closure_4 != null) {
      analyticsPage = tmp5.analyticsPage;
    }
    obj2 = PremiumUtils;
    guildId = RTCConnectionStore.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    track(PREMIUM_UPSELL_VIEWED, obj);
  }, items5);
  const tmp28 = tmp5(tmp3[42])(useTier0UpsellContent, onViewAllPerks, obj3[featureName].analyticsPage, undefined, tmp7);
  const loading = tmp28.loading;
  [][0] = onViewAllPerks;
  const onPress = tmp28.onPress;
  let tmp24Result2 = null;
  if (null != obj3[featureName]) {
    const obj21 = { startExpanded: true, onDismiss, children: closure_20(closure_4, obj29) };
    const obj22 = { pageConfig: obj3[featureName], styles: tmp, useReducedMotion: stateFromStores3 };
    const ActionSheet = tmp2(tmp3[44]).ActionSheet;
    const items6 = [closure_18(PremiumUpsellHero, obj22), , ];
    let tmp24Result = null;
    const obj23 = { style: tmp.textContainer, children: items7 };
    if (true === obj3[featureName].showBetaBadge) {
      const obj24 = { size: tmp2(tmp3[45]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      const tmp5Result = tmp5(tmp3[45]);
      tmp24Result = tmp24(tmp5Result, obj24);
    }
    items7 = [tmp24Result, , ];
    const obj25 = { style: tmp.text, variant: "heading-lg/semibold", accessibilityRole: "header", children: obj3[featureName].title };
    items7[1] = closure_18(tmp2(tmp3[46]).Text, obj25);
    const obj26 = { style: items8, variant: "body-sm/normal", children: obj3[featureName].description };
    items8 = [, ];
    ({ text: arr10[0], description: arr10[1] } = tmp);
    items7[2] = closure_18(tmp2(tmp3[46]).Text, obj26);
    items6[1] = closure_20(closure_4, obj23);
    const obj27 = { style: tmp.buttonContainer, children: items9 };
    const obj28 = { loading, onPress: tmp36, text: mobileRoadblockButtonText, icon: tmp5(tmp3[48]), variant: str2 };
    tmp36 = null;
    const Button = tmp2(tmp3[47]).Button;
    if (!loading) {
      tmp36 = onPress;
    }
    if (useTier0UpsellContent) {
      const intl19 = tmp2(tmp3[19]).intl;
      mobileRoadblockButtonText = intl19.string(tmp2(tmp3[19]).t.cM8bbx);
    } else if (mobileRoadblockButtonText == null) {
      const intl18 = tmp2(tmp3[19]).intl;
      mobileRoadblockButtonText = intl18.string(tmp2(tmp3[19]).t["8x0jKT"]);
    }
    str2 = "primary";
    const tmp2Result26 = tmp2(tmp3[30]);
    if (tmp2Result26.isExpressionPickerUpsellFeature(featureName)) {
      let str3 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str3 = "experimental_premium-basic";
      }
      str2 = str3;
    }
    obj29 = { children: items6 };
    items9 = [closure_18(Button, obj28), ];
    const obj30 = { variant: "secondary", text: intl20.string(tmp2(tmp3[19]).t.PcTCB7), onPress: tmp29 };
    const Button2 = tmp2(tmp3[47]).Button;
    intl20 = tmp2(tmp3[19]).intl;
    items9[1] = closure_18(Button2, obj30);
    items6[2] = closure_20(closure_4, obj27);
    tmp24Result2 = tmp24(ActionSheet, obj21);
  }
  return tmp24Result2;
};
