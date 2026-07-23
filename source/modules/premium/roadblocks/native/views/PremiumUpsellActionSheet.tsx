// Module ID: 7950
// Function ID: 63425
// Name: getPageContent
// Dependencies: [57, 31, 27, 4122, 1278, 1280, 3947, 1849, 1851, 653, 4185, 33, 4130, 689, 3834, 3776, 7951, 4711, 4670, 1212, 3827, 1920, 7952, 7953, 7954, 7409, 668, 566, 7955, 5504, 4126, 477, 7956, 5085, 7941, 7957, 5464, 675, 7958, 3989, 4098, 7949, 5500, 4554, 7959, 5459, 4543, 7738, 2]
// Exports: default

// Module 7950 (getPageContent)
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "initialize";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import { ApplicationStreamFPS } from "makeButton";
import jsxProd from "preload";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
const require = arg1;
function getPageContent(featureName, isKestrelTreatment) {
  let tmp = null;
  if (featureName === require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const obj = { isKestrelTreatment };
    tmp = callback2(AlwaysCompressImagesSwitch, obj);
  }
  return tmp;
}
function AlwaysCompressImagesSwitch(isKestrelTreatment) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.dataSavingMode);
  const callback = React.useCallback((dataSavingMode) => {
    let obj = outer1_1(outer1_2[28]);
    obj = { dataSavingMode };
    const result = obj.updatedUnsyncedSettings(obj);
  }, []);
  let tmp4 = null;
  if (callback(React.useState(!stateFromStores), 1)[0]) {
    tmp4 = null;
    if (!isKestrelTreatment.isKestrelTreatment) {
      obj = { style: tmp.compressionContainer };
      obj = { start: true, end: true };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.label = intl.string(require(1212) /* getSystemLocale */.t.ix8XIj);
      obj.value = stateFromStores;
      obj.onValueChange = callback;
      const obj1 = { style: tmp.compressionHint, variant: "text-xs/normal" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj1.children = intl2.string(require(1212) /* getSystemLocale */.t["wC0+Ph"]);
      obj.subLabel = callback2(require(4126) /* Text */.Text, obj1);
      obj.children = callback2(require(5504) /* TableSwitchRow */.TableSwitchRow, obj);
      tmp4 = callback2(View, obj);
    }
  }
  return tmp4;
}
function PremiumUpsellImage(arg0) {
  let image;
  let style;
  let useReducedMotion;
  ({ image, style, useReducedMotion } = arg0);
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        obj = { url: image.uri, style, autoplay: true };
        let tmp5 = callback2(require(7956) /* useAPNGPlayerControls */.APNGPlayer, obj);
      }
      return tmp5;
    }
  }
  obj = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
  tmp5 = callback2(importDefault(5085), obj);
}
({ PremiumSubscriptionSKUs: closure_11, PremiumTypes: closure_12, PremiumUpsellTypes: closure_13 } = GuildFeatures);
({ AnalyticEvents: closure_14, AnalyticsPages: closure_15, HelpdeskArticles: closure_16, ThemeTypes: closure_17 } = ME);
({ Fragment: closure_19, jsx: closure_20, jsxs: closure_21 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignSelf: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, width: 240, height: 144 };
_createForOfIteratorHelperLoose.image = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { alignSelf: "center", textAlign: "center" };
_createForOfIteratorHelperLoose.betaTag = { marginLeft: 0 };
_createForOfIteratorHelperLoose.description = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.textContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_32, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_32, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.compressionContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.compressionHint = { marginTop: 2 };
_createForOfIteratorHelperLoose.imageGradientBackgroundContainer = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" };
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.imageGradientBackground = { width: "100%", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj5 = { width: "100%", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.imageInGradientBackground = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_32, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_32, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(arg0) {
  let featureName;
  let legacyProps;
  ({ featureName, legacyProps } = arg0);
  let useTier0UpsellContent;
  let onViewAllPerks;
  let c3;
  let analyticsLocations;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = legacyProps(onViewAllPerks[27]);
  let items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getCurrentUser());
  let obj1 = legacyProps(onViewAllPerks[34]);
  let initialUpsellKey;
  if (null != legacyProps) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (null == initialUpsellKey) {
    let obj2 = legacyProps(onViewAllPerks[35]);
    initialUpsellKey = obj2.getUpsellType(featureName);
  }
  const premiumUpsellConfig = obj1.usePremiumUpsellConfig(initialUpsellKey);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  let obj3 = legacyProps(onViewAllPerks[27]);
  const items1 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_7.theme);
  let obj4 = legacyProps(onViewAllPerks[27]);
  const items2 = [closure_9];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => outer1_9.getGuildId());
  const tmp11 = (function usePageConfig(arg0, TIER_0, stateFromStores1, stateFromStores2, featureName) {
    let obj = legacyProps(onViewAllPerks[14]);
    const token = obj.useToken(useTier0UpsellContent(onViewAllPerks[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
    let obj1 = legacyProps(onViewAllPerks[14]);
    let str = "dark";
    const token1 = obj1.useToken(useTier0UpsellContent(onViewAllPerks[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
    if (stateFromStores1 === outer1_17.LIGHT) {
      str = "light";
    }
    let obj2 = legacyProps(onViewAllPerks[15]);
    const premiumTypeDisplayName = obj2.getPremiumTypeDisplayName(TIER_0);
    let kestrelConfig;
    if (featureName === legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
      let obj3 = legacyProps(onViewAllPerks[17]);
      obj = { location: "native.PremiumUpsellActionSheet" };
      kestrelConfig = obj3.getKestrelConfig(obj);
    }
    let effectiveKestrelLimit;
    if (null != kestrelConfig) {
      let obj5 = legacyProps(onViewAllPerks[17]);
      let obj6 = legacyProps(onViewAllPerks[18]);
      effectiveKestrelLimit = obj5.getEffectiveKestrelLimit(kestrelConfig, obj6.maxFileSize(stateFromStores2));
    }
    obj = {};
    obj1 = {};
    const intl = legacyProps(onViewAllPerks[19]).intl;
    obj1.title = intl.string(legacyProps(onViewAllPerks[19]).t.jGDYF0);
    const intl2 = legacyProps(onViewAllPerks[19]).intl;
    obj1.description = intl2.formatToPlainString(legacyProps(onViewAllPerks[19]).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
    obj1.analyticsPage = outer1_15.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
    obj1.upsellType = outer1_13.SOUNDBOARD_EVERYWHERE_UPSELL;
    obj2 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
    obj1.image = obj2;
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj1;
    obj3 = {};
    const intl3 = legacyProps(onViewAllPerks[19]).intl;
    obj3.title = intl3.string(legacyProps(onViewAllPerks[19]).t.zY5PPb);
    const intl4 = legacyProps(onViewAllPerks[19]).intl;
    obj3.description = intl4.formatToPlainString(legacyProps(onViewAllPerks[19]).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
    obj3.analyticsPage = outer1_15.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
    obj3.upsellType = outer1_13.EMOJI_EVERYWHERE_UPSELL;
    const obj4 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
    obj3.image = obj4;
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj3;
    obj5 = {};
    const intl5 = legacyProps(onViewAllPerks[19]).intl;
    obj5.title = intl5.string(legacyProps(onViewAllPerks[19]).t["G+pngo"]);
    let enabled;
    if (null != kestrelConfig) {
      enabled = kestrelConfig.enabled;
    }
    obj5.showBetaBadge = true === enabled;
    obj6 = {};
    let obj14 = legacyProps(onViewAllPerks[18]);
    const obj7 = {
      guildId: stateFromStores2,
      maxSize: effectiveKestrelLimit,
      onClick() {
        const obj = useTier0UpsellContent(onViewAllPerks[20]);
        obj.openURL(useTier0UpsellContent(onViewAllPerks[21]).getArticleURL(outer2_16.NITRO_FAQ));
      }
    };
    obj6.children = obj14.fileUploadLimitRoadblockDescription(obj7);
    obj5.description = outer1_20(outer1_19, obj6);
    obj5.analyticsPage = outer1_15.PREMIUM_UPSELL_FILE_UPLOAD;
    obj5.upsellType = outer1_13.LARGER_FILE_UPLOAD_UPSELL;
    const obj8 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
    obj5.image = obj8;
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj5;
    const obj9 = {};
    const intl6 = legacyProps(onViewAllPerks[19]).intl;
    obj9.title = intl6.string(legacyProps(onViewAllPerks[19]).t.SI7R9I);
    const intl7 = legacyProps(onViewAllPerks[19]).intl;
    obj9.description = intl7.formatToPlainString(legacyProps(onViewAllPerks[19]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
    obj9.analyticsPage = outer1_15.PREMIUM_UPSELL_ANIMATED_EMOJI;
    obj9.upsellType = outer1_13.ANIMATED_EMOJI_UPSELL;
    const obj10 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
    obj9.image = obj10;
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj9;
    const obj11 = {};
    const intl8 = legacyProps(onViewAllPerks[19]).intl;
    obj11.title = intl8.string(legacyProps(onViewAllPerks[19]).t.p0I2Bk);
    const intl9 = legacyProps(onViewAllPerks[19]).intl;
    obj11.description = intl9.string(legacyProps(onViewAllPerks[19]).t.jBqF2k);
    obj11.analyticsPage = outer1_15.PREMIUM_UPSELL_CLIENT_THEMES;
    obj11.upsellType = outer1_13.CLIENT_THEMES_UPSELL;
    obj11.image = useTier0UpsellContent(onViewAllPerks[22]);
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.CLIENT_THEMES] = obj11;
    const obj12 = {};
    const intl10 = legacyProps(onViewAllPerks[19]).intl;
    obj12.title = intl10.string(legacyProps(onViewAllPerks[19]).t.TYFwcy);
    const intl11 = legacyProps(onViewAllPerks[19]).intl;
    obj12.description = intl11.string(legacyProps(onViewAllPerks[19]).t.HDt8ip);
    obj12.analyticsPage = outer1_15.PREMIUM_UPSELL_APP_ICONS;
    obj12.upsellType = outer1_13.APP_ICON_UPSELL;
    obj12.image = useTier0UpsellContent(onViewAllPerks[23]);
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.APP_ICONS] = obj12;
    const obj13 = {};
    const intl12 = legacyProps(onViewAllPerks[19]).intl;
    obj13.title = intl12.string(legacyProps(onViewAllPerks[19]).t.YXk6N7);
    const intl13 = legacyProps(onViewAllPerks[19]).intl;
    obj13.description = intl13.string(legacyProps(onViewAllPerks[19]).t["m/HzW8"]);
    obj13.analyticsPage = outer1_15.PREMIUM_UPSELL_FOR_LATER;
    obj13.upsellType = outer1_13.FOR_LATER_MODAL_UPSELL;
    obj13.image = useTier0UpsellContent(onViewAllPerks[24]);
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.SAVED_MESSAGES] = obj13;
    obj14 = {};
    const intl14 = legacyProps(onViewAllPerks[19]).intl;
    obj14.title = intl14.string(legacyProps(onViewAllPerks[19]).t.ETZQx5);
    const intl15 = legacyProps(onViewAllPerks[19]).intl;
    obj14.description = intl15.formatToPlainString(legacyProps(onViewAllPerks[19]).t["4nlpei"], { fps: outer1_18.FPS_60 });
    obj14.analyticsPage = outer1_15.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
    obj14.upsellType = outer1_13.STREAM_QUALITY_UPSELL;
    obj14.image = useTier0UpsellContent(onViewAllPerks[25]);
    const items = [token, token1];
    obj14.imageGradientBackground = { colors: items, start: legacyProps(onViewAllPerks[26]).HorizontalGradient.START, end: legacyProps(onViewAllPerks[26]).HorizontalGradient.END };
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj14;
    return obj;
  })(undefined, useTier0UpsellContent ? closure_12.TIER_0 : closure_12.TIER_2, stateFromStores1, stateFromStores2, featureName)[featureName];
  c3 = tmp11;
  analyticsLocations = useTier0UpsellContent(onViewAllPerks[36])().analyticsLocations;
  let obj5 = legacyProps(onViewAllPerks[27]);
  const items3 = [_isNativeReflectConstruct];
  const stateFromStores3 = obj5.useStateFromStores(items3, () => outer1_6.useReducedMotion);
  const items4 = [tmp11, analyticsLocations, useTier0UpsellContent, legacyProps];
  const effect = analyticsLocations.useEffect(() => {
    let obj = useTier0UpsellContent(onViewAllPerks[37]);
    obj = {};
    let analyticsProperties;
    if (null != legacyProps) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const merged = Object.assign(analyticsProperties);
    let upsellType;
    if (null != _undefined) {
      upsellType = _undefined.upsellType;
    }
    obj["type"] = upsellType;
    obj["location"] = location;
    obj["location_stack"] = analyticsLocations;
    obj["sku_id"] = legacyProps(onViewAllPerks[15]).castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? outer1_11.TIER_0 : outer1_11.TIER_2);
    obj.track(outer1_14.PREMIUM_UPSELL_VIEWED, obj);
  }, items4);
  const tmp14 = useTier0UpsellContent(onViewAllPerks[38])(useTier0UpsellContent, onViewAllPerks, tmp11.analyticsPage);
  const loading = tmp14.loading;
  [][0] = onViewAllPerks;
  if (null == tmp11) {
    return null;
  } else {
    obj = { startExpanded: true };
    obj = {};
    if (null == tmp11.image) {
      const items5 = [tmp22, , , ];
      obj1 = { style: tmp.textContainer };
      let tmp37 = null;
      if (true === tmp11.showBetaBadge) {
        obj2 = { size: legacyProps(onViewAllPerks[44]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
        tmp37 = callback2(useTier0UpsellContent(onViewAllPerks[44]), obj2);
        const tmp41 = useTier0UpsellContent(onViewAllPerks[44]);
      }
      const items6 = [tmp37, , ];
      obj3 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: tmp11.title };
      items6[1] = callback2(legacyProps(onViewAllPerks[30]).Text, obj3);
      obj4 = {};
      const items7 = [, ];
      ({ text: arr9[0], description: arr9[1] } = tmp);
      obj4.style = items7;
      obj4.variant = "text-sm/normal";
      obj4.children = tmp11.description;
      items6[2] = callback2(legacyProps(onViewAllPerks[45]).TextWithIOSLinkWorkaround, obj4);
      obj1.children = items6;
      items5[1] = closure_21(View, obj1);
      items5[2] = getPageContent(featureName, true === tmp11.showBetaBadge);
      obj5 = { style: tmp.buttonContainer };
      let string = callback2;
      let num7 = 46;
      let Button = legacyProps(onViewAllPerks[46]).Button;
      let obj6 = { loading };
      let onPress = null;
      if (!loading) {
        onPress = tmp14.onPress;
      }
      obj6.onPress = onPress;
      let intl = legacyProps(onViewAllPerks[19]).intl;
      let string2 = intl.string;
      let intl2 = legacyProps(onViewAllPerks[19]).t;
      if (useTier0UpsellContent) {
        let string2Result = string2(intl2.cM8bbx);
      } else {
        string2Result = string2(intl2["8x0jKT"]);
      }
      obj6.text = string2Result;
      obj6.icon = useTier0UpsellContent(onViewAllPerks[47]);
      obj6 = [, ];
      obj6[0] = string(Button, obj6);
      Button = callback2;
      string2 = legacyProps;
      let obj7 = { variant: "secondary" };
      intl2 = legacyProps(onViewAllPerks[19]).intl;
      string = intl2.string;
      obj7.text = string(legacyProps(onViewAllPerks[19]).t.PcTCB7);
      obj7.onPress = tmp15;
      num7 = callback2(legacyProps(onViewAllPerks[num7]).Button, obj7);
      obj6[1] = num7;
      obj5.children = obj6;
      obj5 = closure_21(View, obj5);
      items5[3] = obj5;
      obj.children = items5;
      obj = tmp20(tmp21, obj);
      obj.children = obj;
      tmp16(tmp19, obj);
      const stringResult = string(Button, obj6);
      const tmp35 = closure_21;
      const tmp36 = View;
      const tmp48 = closure_21;
      const tmp49 = View;
    } else if (null != tmp11.imageGradientBackground) {
      let obj8 = { style: tmp.imageGradientBackgroundContainer };
      let obj9 = { colors: tmp11.imageGradientBackground.colors, start: tmp11.imageGradientBackground.start, end: tmp11.imageGradientBackground.end, style: tmp.imageGradientBackground };
      let obj10 = { image: tmp11.image };
      const items8 = [, ];
      ({ image: arr6[0], imageInGradientBackground: arr6[1] } = tmp);
      obj10.style = items8;
      obj10.useReducedMotion = stateFromStores3;
      obj9.children = callback2(PremiumUpsellImage, obj10);
      obj8.children = callback2(useTier0UpsellContent(onViewAllPerks[43]), obj9);
      let tmp25 = callback2(View, obj8);
      const tmp31 = useTier0UpsellContent(onViewAllPerks[43]);
    } else {
      let obj11 = { image: tmp11.image, style: tmp.image, useReducedMotion: stateFromStores3 };
      tmp25 = callback2(PremiumUpsellImage, obj11);
    }
    tmp16 = callback2;
  }
};
