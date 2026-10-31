// Module ID: 9794
// Function ID: 9795
// Name: PremiumUpsellActionSheet
// Dependencies: [19, 17, 5015, 1192, 5764, 5045, 1383, 1385, 1072, 5864, 9795, 21, 5014, 575, 5596, 2047, 5073, 8231, 8216, 9796, 9797, 1113, 9801, 9805, 9806, 5258, 9793, 9807, 14586, 14590, 1092, 1375, 9504, 5717, 5587, 504, 7326, 9785, 7627, 8528, 14591, 10046, 1252, 10030, 5207, 7366, 14593, 5624, 5634, 8519, 2]
// Exports: default

// Module 9794 (PremiumUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import ChatInputUtils from "ChatInputUtils" /* 5207 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import FastImageDefault from "FastImage" /* 5717 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5864 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 9793 */;
import ScheduledMessagesConstants from "ScheduledMessagesConstants" /* 9795 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import UserStore from "UserStore" /* 1383 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
const APNGPlayer = tmp(9504);
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
  let obj10;
  let obj17;
  let obj18;
  let obj19;
  let obj21;
  let obj22;
  let obj31;
  let str3;
  let theme;
  let tmp2Result27;
  let tmp39;
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
    const tmp2Result = tmp2(tmp3[19]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = usePremiumUpsellConfig(initialUpsellKey, analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  const tmp2Result16 = tmp2(tmp3[38]);
  const premiumTrialOffer = tmp2Result16.usePremiumTrialOffer();
  tmp2(tmp3[39]);
  let mobileRoadblockButtonText = null;
  if (!useTier0UpsellContent) {
    let obj2 = { subscriptionTier: TIER_2.TIER_2, trialOffer: premiumTrialOffer, discountOffer: tmp12 };
    const tmp2Result18 = tmp2(tmp3[40]);
    mobileRoadblockButtonText = tmp2Result18.getMobileRoadblockButtonText(obj2);
  }
  const items1 = [ThemeStore];
  const tmp2Result19 = tmp2(tmp3[35]);
  const stateFromStores1 = tmp2Result19.useStateFromStores(items1, () => theme.theme);
  const items2 = [SelectedGuildStore];
  const tmp2Result20 = tmp2(tmp3[35]);
  const stateFromStores2 = tmp2Result20.useStateFromStores(items2, () => guildId.getGuildId());
  const tmp18 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
  const tmp2Result21 = tmp2(tmp3[14]);
  const token = tmp2Result21.useToken(tmp5(tmp3[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  let str = "dark";
  const tmp2Result22 = tmp2(tmp3[14]);
  const token1 = tmp2Result22.useToken(tmp5(tmp3[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants4.LIGHT) {
    str = "light";
  }
  const tmp2Result23 = tmp2(tmp3[15]);
  const premiumTypeDisplayName = tmp2Result23.getPremiumTypeDisplayName(tmp18);
  let effectiveUploadLimit;
  if (featureName === tmp2(tmp3[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const getEffectiveUploadLimit = tmp2(tmp3[17]).getEffectiveUploadLimit;
    tmp2(tmp3[17]);
    const tmp2Result25 = tmp2(tmp3[18]);
    effectiveUploadLimit = getEffectiveUploadLimit(tmp2Result25.maxFileSize(stateFromStores2));
  }
  let tmp24;
  const tmp2Result26 = tmp2(tmp3[19]);
  if (tmp2Result26.isEmojiPickerUpsellFeature(featureName)) {
    tmp24 = closure_18(tmp2(tmp3[20]).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
  }
  const obj3 = {};
  const obj4 = { title: intl.string(tmp2(tmp3[21]).t.jGDYF0), description: intl2.formatToPlainString(tmp2(tmp3[21]).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE, upsellType: constants.SOUNDBOARD_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" } };
  const SOUNDBOARD_EVERYWHERE = tmp2(tmp3[16]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  intl = tmp2(tmp3[21]).intl;
  intl2 = tmp2(tmp3[21]).intl;
  obj3[SOUNDBOARD_EVERYWHERE] = obj4;
  const obj6 = { title: intl3.string(tmp2(tmp3[21]).t.zY5PPb), description: intl4.formatToPlainString(tmp2(tmp3[21]).t["uukIF/"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE, upsellType: constants.EMOJI_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp24 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" });
  const EMOJIS_EVERYWHERE = tmp2(tmp3[16]).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  intl3 = tmp2(tmp3[21]).intl;
  intl4 = tmp2(tmp3[21]).intl;
  obj3[EMOJIS_EVERYWHERE] = obj6;
  const obj8 = { title: intl5.string(tmp2(tmp3[21]).t.Eukdgl), description: intl6.string(tmp2(tmp3[21]).t.sMmd7s), analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: closure_18(tmp2(tmp3[22]).StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const STICKERS_EVERYWHERE = tmp2(tmp3[16]).EntitlementFeatureNames.STICKERS_EVERYWHERE;
  intl5 = tmp2(tmp3[21]).intl;
  intl6 = tmp2(tmp3[21]).intl;
  obj3[STICKERS_EVERYWHERE] = obj8;
  const obj9 = { title: intl7.string(tmp2(tmp3[21]).t["G+pngo"]), description: closure_18(closure_19, obj10), analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" } };
  const INCREASED_FILE_UPLOAD_SIZE = tmp2(tmp3[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  intl7 = tmp2(tmp3[21]).intl;
  obj10 = { children: tmp2Result27.fileUploadLimitRoadblockDescription({ guildId: stateFromStores2, maxSize: effectiveUploadLimit }) };
  obj3[INCREASED_FILE_UPLOAD_SIZE] = obj9;
  tmp2Result27 = tmp2(tmp3[18]);
  const obj12 = { title: intl8.string(tmp2(tmp3[21]).t.SI7R9I), description: intl9.formatToPlainString(tmp2(tmp3[21]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp24 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" });
  const ANIMATED_EMOJIS = tmp2(tmp3[16]).EntitlementFeatureNames.ANIMATED_EMOJIS;
  intl8 = tmp2(tmp3[21]).intl;
  intl9 = tmp2(tmp3[21]).intl;
  obj3[ANIMATED_EMOJIS] = obj12;
  const obj14 = { title: intl10.string(tmp2(tmp3[21]).t.p0I2Bk), description: intl11.string(tmp2(tmp3[21]).t.jBqF2k), analyticsPage: constants3.PREMIUM_UPSELL_CLIENT_THEMES, upsellType: constants.CLIENT_THEMES_UPSELL, image: tmp5(tmp3[23]) };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const CLIENT_THEMES = tmp2(tmp3[16]).EntitlementFeatureNames.CLIENT_THEMES;
  intl10 = tmp2(tmp3[21]).intl;
  intl11 = tmp2(tmp3[21]).intl;
  obj3[CLIENT_THEMES] = obj14;
  const obj15 = { title: intl12.string(tmp2(tmp3[21]).t.TYFwcy), description: intl13.string(tmp2(tmp3[21]).t.HDt8ip), analyticsPage: constants3.PREMIUM_UPSELL_APP_ICONS, upsellType: constants.APP_ICON_UPSELL, image: tmp5(tmp3[24]) };
  const APP_ICONS = tmp2(tmp3[16]).EntitlementFeatureNames.APP_ICONS;
  intl12 = tmp2(tmp3[21]).intl;
  intl13 = tmp2(tmp3[21]).intl;
  obj3[APP_ICONS] = obj15;
  const obj16 = { title: intl14.formatToPlainString(tmp2(tmp3[21]).t.GNoaxo, obj17), showBetaBadge: true, description: closure_18(closure_19, obj18), analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, illustration: closure_18(tmp2(tmp3[28]).NitroScheduleMessageSpotIllustration, { width: 198, height: 132, accessible: false }) };
  const SCHEDULED_MESSAGES = tmp2(tmp3[16]).EntitlementFeatureNames.SCHEDULED_MESSAGES;
  intl14 = tmp2(tmp3[21]).intl;
  obj17 = { premiumMax };
  obj18 = { children: intl15.format(tmp2(tmp3[21]).t["1kFyto"], obj19) };
  intl15 = tmp2(tmp3[21]).intl;
  obj19 = {
    premiumMax,
    onClick() {
      const obj = analyticsLocations(useTier0UpsellContent[25]);
      obj.hideActionSheet(legacyProps(useTier0UpsellContent[26]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj2 = legacyProps(useTier0UpsellContent[27]);
      const result = obj2.showScheduledMessagesModal();
    }
  };
  obj3[SCHEDULED_MESSAGES] = obj16;
  const obj20 = { title: intl16.string(tmp2(tmp3[21]).t.ETZQx5), description: intl17.formatToPlainString(tmp2(tmp3[21]).t["4nlpei"], obj21), analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: tmp5(tmp3[29]), imageGradientBackground: obj22 };
  const STREAM_HIGH_QUALITY = tmp2(tmp3[16]).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
  intl16 = tmp2(tmp3[21]).intl;
  intl17 = tmp2(tmp3[21]).intl;
  obj21 = { fps: ApplicationStreamFPS.FPS_60 };
  obj22 = { colors: items3, start: tmp2(tmp3[30]).HorizontalGradient.START, end: tmp2(tmp3[30]).HorizontalGradient.END };
  items3 = [token, token1];
  obj3[STREAM_HIGH_QUALITY] = obj20;
  closure_4 = tmp27;
  const items4 = [AccessibilityStore];
  const tmp2Result28 = tmp2(tmp3[35]);
  const stateFromStores3 = tmp2Result28.useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const tmp2Result29 = tmp2(tmp3[19]);
  let result = tmp2Result29.isEmojiPickerUpsellFeature(featureName);
  if (!result) {
    const tmp2Result30 = tmp2(tmp3[41]);
    result = tmp2Result30.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  }
  const items5 = [obj3[featureName], analyticsLocations, useTier0UpsellContent, legacyProps];
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
  const tmp31 = tmp5(tmp3[43])(useTier0UpsellContent, onViewAllPerks, obj3[featureName].analyticsPage, undefined, tmp7);
  const loading = tmp31.loading;
  [][0] = onViewAllPerks;
  const onPress = tmp31.onPress;
  let tmp26Result2 = null;
  if (null != obj3[featureName]) {
    const obj23 = { startExpanded: true, onDismiss, children: closure_20(closure_4, obj31) };
    const obj24 = { pageConfig: obj3[featureName], styles: tmp, useReducedMotion: stateFromStores3 };
    const ActionSheet = tmp2(tmp3[45]).ActionSheet;
    const items6 = [closure_18(PremiumUpsellHero, obj24), , ];
    let tmp26Result = null;
    const obj25 = { style: tmp.textContainer, children: items7 };
    if (true === obj3[featureName].showBetaBadge) {
      const obj26 = { size: tmp2(tmp3[46]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      const tmp5Result = tmp5(tmp3[46]);
      tmp26Result = tmp26(tmp5Result, obj26);
    }
    items7 = [tmp26Result, , ];
    const obj27 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: obj3[featureName].title };
    items7[1] = closure_18(tmp2(tmp3[47]).Text, obj27);
    const obj28 = { style: items8, variant: "text-sm/normal", children: obj3[featureName].description };
    items8 = [, ];
    ({ text: arr10[0], description: arr10[1] } = tmp);
    items7[2] = closure_18(tmp2(tmp3[47]).Text, obj28);
    items6[1] = closure_20(closure_4, obj25);
    const obj29 = { style: tmp.buttonContainer, children: items9 };
    const obj30 = { loading, onPress: tmp39, text: mobileRoadblockButtonText, icon: tmp5(tmp3[49]), variant: str3 };
    tmp39 = null;
    const Button = tmp2(tmp3[48]).Button;
    if (!loading) {
      tmp39 = onPress;
    }
    if (useTier0UpsellContent) {
      const intl19 = tmp2(tmp3[21]).intl;
      mobileRoadblockButtonText = intl19.string(tmp2(tmp3[21]).t.cM8bbx);
    } else if (mobileRoadblockButtonText == null) {
      const intl18 = tmp2(tmp3[21]).intl;
      mobileRoadblockButtonText = intl18.string(tmp2(tmp3[21]).t["8x0jKT"]);
    }
    str3 = "primary";
    if (result) {
      let str4 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str4 = "experimental_premium-basic";
      }
      str3 = str4;
    }
    obj31 = { children: items6 };
    items9 = [closure_18(Button, obj30), ];
    const obj32 = { variant: "secondary", text: intl20.string(tmp2(tmp3[21]).t.PcTCB7), onPress: tmp32 };
    const Button2 = tmp2(tmp3[48]).Button;
    intl20 = tmp2(tmp3[21]).intl;
    items9[1] = closure_18(Button2, obj32);
    items6[2] = closure_20(closure_4, obj29);
    tmp26Result2 = tmp26(ActionSheet, obj23);
  }
  return tmp26Result2;
};
