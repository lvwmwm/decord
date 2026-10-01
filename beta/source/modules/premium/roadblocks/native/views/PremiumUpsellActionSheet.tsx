// Module ID: 7271
// Function ID: 7272
// Name: PremiumUpsellActionSheet
// Dependencies: [19, 17, 4825, 1182, 4859, 4655, 1372, 1374, 1074, 4883, 7272, 7266, 21, 4836, 576, 4531, 4488, 7273, 5474, 5446, 7274, 7275, 7277, 7278, 1115, 7280, 7282, 7283, 4800, 7270, 7284, 7285, 12869, 12870, 11693, 11702, 12873, 1094, 1364, 8271, 5899, 5293, 504, 6583, 8614, 9421, 6867, 8671, 8622, 1241, 9422, 4701, 6618, 12874, 4832, 5281, 7495, 2]
// Exports: default

// Module 7271 (PremiumUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4883 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ScheduledMessagesConstants from "ScheduledMessagesConstants" /* 7266 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 7270 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import UserStore from "UserStore" /* 1372 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Constants from "Constants" /* 1074 */;
import SavedMessagesConstants from "SavedMessagesConstants" /* 7272 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let guildId;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let tmp;
let unpackModuleId;
const APNGPlayer = tmp(8271);
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
        tmp5 = closure_20(APNGPlayer.APNGPlayer, obj2);
      }
      return tmp5;
    }
  }
  const obj3 = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
  tmp5 = closure_20(FastImageDefault, obj3);
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
    tmp10 = closure_20(View, obj2);
  } else {
    tmp10 = null;
    if (null != pageConfig.image) {
      let tmp3;
      if (null != pageConfig.imageGradientBackground) {
        const obj3 = { style: styles.imageGradientBackgroundContainer, children: closure_20(tmp8, obj4) };
        obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: closure_20(PremiumUpsellImage, obj5) };
        obj5 = { image: pageConfig.image, style: items, useReducedMotion };
        items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        tmp8 = LinearGradientDefault;
        tmp3 = closure_20(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: items1, useReducedMotion };
        items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        tmp3 = closure_20(PremiumUpsellImage, obj);
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
({ SAVED_BOOKMARKS_MAX: closure_17, SAVED_REMINDERS_MAX: closure_18 } = SavedMessagesConstants);
const premiumMax = ScheduledMessagesConstants.MAX_SCHEDULED_MESSAGES_PER_USER;
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = { hero: obj2, image: { width: 240, height: 144 }, text: { alignSelf: "center", textAlign: "center" }, betaTag: { marginLeft: 0 }, description: obj3, textContainer: obj4, buttonContainer: obj5, imageGradientBackgroundContainer: { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }, imageGradientBackground: obj6, imageInGradientBackground: obj7 };
obj2 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj6 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
obj7 = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
let closure_23 = createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(onDismiss) {
  let analyticsLocations;
  let currentUser;
  let featureName;
  let forLaterLimit;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl24;
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
  let obj18;
  let obj20;
  let obj21;
  let obj22;
  let obj24;
  let obj25;
  let obj34;
  let obj9;
  let str3;
  let stringResult;
  let stringResult1;
  let subfeatureName;
  let theme;
  let tmp2Result27;
  let tmp46;
  let useReducedMotion;
  ({ featureName, legacyProps } = onDismiss);
  ({ subfeatureName, analyticsLocations } = onDismiss);
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  let analyticsLocations2;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let upsellType;
  onDismiss = onDismiss.onDismiss;
  const tmp = closure_23();
  const tmp2 = legacyProps;
  const tmp3 = useTier0UpsellContent;
  let obj = legacyProps(useTier0UpsellContent[42]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations2 = analyticsLocations2(useTier0UpsellContent[43])(analyticsLocations).analyticsLocations;
  let initialUpsellKey;
  const usePremiumUpsellConfig = legacyProps(useTier0UpsellContent[44]).usePremiumUpsellConfig;
  const tmp6 = legacyProps(useTier0UpsellContent[44]);
  const tmp7 = analyticsLocations;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    const tmp2Result = tmp2(tmp3[45]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  tmp2(tmp3[46]);
  let trialCtaOverride = null;
  if (!useTier0UpsellContent) {
    const tmp2Result17 = tmp2(tmp3[47]);
    trialCtaOverride = tmp2Result17.getTrialCtaOverride(tmp11, TIER_2.TIER_2);
  }
  const items1 = [ThemeStore];
  const tmp2Result18 = tmp2(tmp3[42]);
  const stateFromStores1 = tmp2Result18.useStateFromStores(items1, () => theme.theme);
  const items2 = [SelectedGuildStore];
  const tmp2Result19 = tmp2(tmp3[42]);
  const stateFromStores2 = tmp2Result19.useStateFromStores(items2, () => guildId.getGuildId());
  const tmp17 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
  const tmp2Result20 = tmp2(tmp3[15]);
  const token = tmp2Result20.useToken(tmp5(tmp3[14]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  let str = "dark";
  const tmp2Result21 = tmp2(tmp3[15]);
  const token1 = tmp2Result21.useToken(tmp5(tmp3[14]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants4.LIGHT) {
    str = "light";
  }
  const tmp2Result22 = tmp2(tmp3[16]);
  const premiumTypeDisplayName = tmp2Result22.getPremiumTypeDisplayName(tmp17);
  let effectiveUploadLimit;
  if (featureName === tmp2(tmp3[17]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const getEffectiveUploadLimit = tmp2(tmp3[18]).getEffectiveUploadLimit;
    tmp2(tmp3[18]);
    const tmp2Result24 = tmp2(tmp3[19]);
    effectiveUploadLimit = getEffectiveUploadLimit(tmp2Result24.maxFileSize(stateFromStores2));
  }
  const tmp23 = subfeatureName === tmp2(tmp3[20]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  let closure_0 = tmp23;
  if (subfeatureName === tmp2(tmp3[20]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const tmp2Result25 = tmp2(tmp3[21]);
    forLaterLimit = tmp2Result25.getForLaterLimit("native.PremiumUpsellActionSheet", tmp23);
  }
  const tmp25 = tmp23 ? closure_18 : closure_17;
  let tmp26;
  const tmp2Result26 = tmp2(tmp3[22]);
  if (tmp2Result26.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
    tmp26 = closure_20(tmp2(tmp3[23]).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
  }
  let obj2 = {};
  const obj3 = { title: intl.string(tmp2(tmp3[24]).t.jGDYF0), description: intl2.formatToPlainString(tmp2(tmp3[24]).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE, upsellType: constants.SOUNDBOARD_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" } };
  const SOUNDBOARD_EVERYWHERE = tmp2(tmp3[17]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  intl = tmp2(tmp3[24]).intl;
  intl2 = tmp2(tmp3[24]).intl;
  obj2[SOUNDBOARD_EVERYWHERE] = obj3;
  const obj5 = { title: intl3.string(tmp2(tmp3[24]).t.zY5PPb), description: intl4.formatToPlainString(tmp2(tmp3[24]).t["uukIF/"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE, upsellType: constants.EMOJI_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp26 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" });
  const EMOJIS_EVERYWHERE = tmp2(tmp3[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  intl3 = tmp2(tmp3[24]).intl;
  intl4 = tmp2(tmp3[24]).intl;
  obj2[EMOJIS_EVERYWHERE] = obj5;
  const obj7 = { title: intl5.string(tmp2(tmp3[24]).t.Eukdgl), description: intl6.string(tmp2(tmp3[24]).t.sMmd7s), analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: closure_20(tmp2(tmp3[25]).StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const STICKERS_EVERYWHERE = tmp2(tmp3[17]).EntitlementFeatureNames.STICKERS_EVERYWHERE;
  intl5 = tmp2(tmp3[24]).intl;
  intl6 = tmp2(tmp3[24]).intl;
  obj2[STICKERS_EVERYWHERE] = obj7;
  const obj8 = { title: intl7.string(tmp2(tmp3[24]).t["G+pngo"]), description: closure_20(closure_21, obj9), analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" } };
  const INCREASED_FILE_UPLOAD_SIZE = tmp2(tmp3[17]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  intl7 = tmp2(tmp3[24]).intl;
  obj9 = { children: tmp2Result27.fileUploadLimitRoadblockDescription({ guildId: stateFromStores2, maxSize: effectiveUploadLimit }) };
  obj2[INCREASED_FILE_UPLOAD_SIZE] = obj8;
  tmp2Result27 = tmp2(tmp3[19]);
  const obj11 = { title: intl8.string(tmp2(tmp3[24]).t.SI7R9I), description: intl9.formatToPlainString(tmp2(tmp3[24]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp26 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" });
  const ANIMATED_EMOJIS = tmp2(tmp3[17]).EntitlementFeatureNames.ANIMATED_EMOJIS;
  intl8 = tmp2(tmp3[24]).intl;
  intl9 = tmp2(tmp3[24]).intl;
  obj2[ANIMATED_EMOJIS] = obj11;
  const obj13 = { title: intl10.string(tmp2(tmp3[24]).t.p0I2Bk), description: intl11.string(tmp2(tmp3[24]).t.jBqF2k), analyticsPage: constants3.PREMIUM_UPSELL_CLIENT_THEMES, upsellType: constants.CLIENT_THEMES_UPSELL, image: analyticsLocations2(tmp3[26]) };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const CLIENT_THEMES = tmp2(tmp3[17]).EntitlementFeatureNames.CLIENT_THEMES;
  intl10 = tmp2(tmp3[24]).intl;
  intl11 = tmp2(tmp3[24]).intl;
  obj2[CLIENT_THEMES] = obj13;
  const obj14 = { title: intl12.string(tmp2(tmp3[24]).t.TYFwcy), description: intl13.string(tmp2(tmp3[24]).t.HDt8ip), analyticsPage: constants3.PREMIUM_UPSELL_APP_ICONS, upsellType: constants.APP_ICON_UPSELL, image: analyticsLocations2(tmp3[27]) };
  const APP_ICONS = tmp2(tmp3[17]).EntitlementFeatureNames.APP_ICONS;
  intl12 = tmp2(tmp3[24]).intl;
  intl13 = tmp2(tmp3[24]).intl;
  obj2[APP_ICONS] = obj14;
  const SAVED_MESSAGES = tmp2(tmp3[17]).EntitlementFeatureNames.SAVED_MESSAGES;
  if (null == forLaterLimit) {
    const intl15 = tmp2(tmp3[24]).intl;
    stringResult = intl15.string(tmp2(tmp3[24]).t.YXk6N7);
  } else {
    const intl14 = tmp2(tmp3[24]).intl;
    const formatToPlainString = intl14.formatToPlainString;
    const t = tmp2(tmp3[24]).t;
    const obj15 = { premiumMax: tmp25 };
    stringResult = formatToPlainString(tmp23 ? t["cpj9o/"] : t.Oxm3Sq, obj15);
  }
  const obj16 = { title: stringResult, showBetaBadge: true, description: stringResult1, analyticsPage: constants3.PREMIUM_UPSELL_FOR_LATER, upsellType: constants.FOR_LATER_MODAL_UPSELL, image: analyticsLocations2(tmp23 ? tmp3[32] : tmp3[33]) };
  if (null == forLaterLimit) {
    const intl17 = tmp2(tmp3[24]).intl;
    stringResult1 = intl17.string(tmp2(tmp3[24]).t["m/HzW8"]);
  } else {
    const intl16 = tmp2(tmp3[24]).intl;
    const format = intl16.format;
    const t2 = tmp2(tmp3[24]).t;
    const obj17 = { children: format(tmp23 ? t2.NRF0Wh : t2.o5OLyw, obj18) };
    obj18 = {
      max: forLaterLimit,
      premiumMax: tmp25,
      onClick() {
          const obj = analyticsLocations2(useTier0UpsellContent[28]);
          obj.hideActionSheet(legacyProps(useTier0UpsellContent[29]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
          const showForLaterModal = legacyProps(useTier0UpsellContent[30]).showForLaterModal;
          legacyProps(useTier0UpsellContent[30]);
          const SavedMessageSortTypes = legacyProps(useTier0UpsellContent[31]).SavedMessageSortTypes;
          showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
        }
    };
    stringResult1 = tmp30(tmp31, obj17);
  }
  obj2[SAVED_MESSAGES] = obj16;
  const obj19 = { title: intl18.formatToPlainString(tmp2(tmp3[24]).t.GNoaxo, obj20), showBetaBadge: true, description: closure_20(closure_21, obj21), analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, image: analyticsLocations2(tmp3[35]) };
  const SCHEDULED_MESSAGES = tmp2(tmp3[17]).EntitlementFeatureNames.SCHEDULED_MESSAGES;
  intl18 = tmp2(tmp3[24]).intl;
  obj20 = { premiumMax };
  obj21 = { children: intl19.format(tmp2(tmp3[24]).t["1kFyto"], obj22) };
  intl19 = tmp2(tmp3[24]).intl;
  obj22 = {
    premiumMax,
    onClick() {
      const obj = analyticsLocations2(useTier0UpsellContent[28]);
      obj.hideActionSheet(legacyProps(useTier0UpsellContent[29]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj2 = legacyProps(useTier0UpsellContent[34]);
      const result = obj2.showScheduledMessagesModal();
    }
  };
  obj2[SCHEDULED_MESSAGES] = obj19;
  const obj23 = { title: intl20.string(tmp2(tmp3[24]).t.ETZQx5), description: intl21.formatToPlainString(tmp2(tmp3[24]).t["4nlpei"], obj24), analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: analyticsLocations2(tmp3[36]), imageGradientBackground: obj25 };
  const STREAM_HIGH_QUALITY = tmp2(tmp3[17]).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
  intl20 = tmp2(tmp3[24]).intl;
  intl21 = tmp2(tmp3[24]).intl;
  obj24 = { fps: ApplicationStreamFPS.FPS_60 };
  obj25 = { colors: items3, start: tmp2(tmp3[37]).HorizontalGradient.START, end: tmp2(tmp3[37]).HorizontalGradient.END };
  items3 = [token, token1];
  obj2[STREAM_HIGH_QUALITY] = obj23;
  upsellType = tmp34;
  const items4 = [AccessibilityStore];
  const tmp2Result28 = tmp2(tmp3[42]);
  const stateFromStores3 = tmp2Result28.useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const tmp2Result29 = tmp2(tmp3[22]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2Result29.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    const tmp2Result30 = tmp2(tmp3[48]);
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2Result30.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  }
  const items5 = [obj2[featureName], analyticsLocations2, useTier0UpsellContent, legacyProps];
  const effect = onViewAllPerks.useEffect(() => {
    let obj2;
    let analyticsProperties;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_UPSELL_VIEWED = map1.PREMIUM_UPSELL_VIEWED;
    AnalyticsUtilsDefault;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj = { type: upsellType, location: location, location_stack: analyticsLocations2, sku_id: obj2.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? c10.TIER_0 : c10.TIER_2), voice_guild_id: guildId };
    const merged = Object.assign(analyticsProperties);
    upsellType = undefined;
    if (upsellType != null) {
      upsellType = upsellType.upsellType;
    }
    obj2 = PremiumUtils;
    guildId = RTCConnectionStore.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    track(PREMIUM_UPSELL_VIEWED, obj);
  }, items5);
  const tmp38 = analyticsLocations2(tmp3[50])(useTier0UpsellContent, onViewAllPerks, obj2[featureName].analyticsPage, undefined, tmp7);
  const loading = tmp38.loading;
  [][0] = onViewAllPerks;
  const onPress = tmp38.onPress;
  let tmp30Result2 = null;
  if (null != obj2[featureName]) {
    const obj26 = { startExpanded: true, onDismiss, children: closure_22(upsellType, obj34) };
    const obj27 = { pageConfig: obj2[featureName], styles: tmp, useReducedMotion: stateFromStores3 };
    const ActionSheet = tmp2(tmp3[52]).ActionSheet;
    const items6 = [closure_20(PremiumUpsellHero, obj27), , ];
    let tmp30Result = null;
    const obj28 = { style: tmp.textContainer, children: items7 };
    if (true === obj2[featureName].showBetaBadge) {
      const obj29 = { size: tmp2(tmp3[53]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      const tmp5Result = analyticsLocations2(tmp3[53]);
      tmp30Result = tmp30(tmp5Result, obj29);
    }
    items7 = [tmp30Result, , ];
    const obj30 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: obj2[featureName].title };
    items7[1] = closure_20(tmp2(tmp3[54]).Text, obj30);
    const obj31 = { style: items8, variant: "text-sm/normal", children: obj2[featureName].description };
    items8 = [, ];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    items7[2] = closure_20(tmp2(tmp3[54]).Text, obj31);
    items6[1] = closure_22(upsellType, obj28);
    const obj32 = { style: tmp.buttonContainer, children: items9 };
    const obj33 = { loading, onPress: tmp46, text: trialCtaOverride, icon: analyticsLocations2(tmp3[56]), variant: str3 };
    tmp46 = null;
    const Button = tmp2(tmp3[55]).Button;
    if (!loading) {
      tmp46 = onPress;
    }
    if (useTier0UpsellContent) {
      const intl23 = tmp2(tmp3[24]).intl;
      trialCtaOverride = intl23.string(tmp2(tmp3[24]).t.cM8bbx);
    } else if (trialCtaOverride == null) {
      const intl22 = tmp2(tmp3[24]).intl;
      trialCtaOverride = intl22.string(tmp2(tmp3[24]).t["8x0jKT"]);
    }
    str3 = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str4 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str4 = "experimental_premium-basic";
      }
      str3 = str4;
    }
    obj34 = { children: items6 };
    items9 = [closure_20(Button, obj33), ];
    const obj35 = { variant: "secondary", text: intl24.string(tmp2(tmp3[24]).t.PcTCB7), onPress: tmp39 };
    const Button2 = tmp2(tmp3[55]).Button;
    intl24 = tmp2(tmp3[24]).intl;
    items9[1] = closure_20(Button2, obj35);
    items6[2] = closure_22(upsellType, obj32);
    tmp30Result2 = tmp30(ActionSheet, obj26);
  }
  return tmp30Result2;
};
