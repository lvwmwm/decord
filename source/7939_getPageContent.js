// Module ID: 7939
// Function ID: 63353
// Name: getPageContent
// Dependencies: [4580, 7940, 668, 44, 2, 57, 31, 3780, 6677, 1851, 653, 5460, 6650, 4443, 7364, 3828, 1212, 3987, 2, 31, 27, 6660, 33, 4126, 689, 4546, 668, 4124, 1212, 2, 57, 6, 7, 15, 17, 18, 31, 27, 1280, 1849, 653, 7950, 1851, 33, 4126, 689, 4124, 3840, 6675]
// Exports: default

// Module 7939 (getPageContent)
import SoundButtonOverlay from "SoundButtonOverlay";
import EntitlementFeatureNames from "EntitlementFeatureNames";
import { View } from "DrawerSourceTypes";
import invariant from "invariant";
import keys from "keys";
import _slicedToArray from "_slicedToArray";
import module_31 from "module_31";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import GuildFeatures from "GuildFeatures";
import { ApplicationStreamFPS } from "ME";
import mergeLocations from "mergeLocations";
import openPremiumPlanSelectionActionSheet from "openPremiumPlanSelectionActionSheet";
import useGetTrialOffer from "useGetTrialOffer";

function getPageContent(featureName, isKestrelTreatment) {
  let tmp = null;
  if (featureName === isKestrelTreatment(dependencyMap[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const obj = { isKestrelTreatment };
    tmp = callback2(AlwaysCompressImagesSwitch, obj);
  }
  return tmp;
}
function AlwaysCompressImagesSwitch(isKestrelTreatment) {
  const tmp = openPremiumPlanSelectionActionSheet();
  let obj = arg1(dependencyMap[27]);
  const items = [_slicedToArray];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const callback = React.useCallback((dataSavingMode) => {
    let obj = callback(closure_2[28]);
    obj = { dataSavingMode };
    const result = obj.updatedUnsyncedSettings(obj);
  }, []);
  let tmp4 = null;
  if (callback(React.useState(!stateFromStores), 1)[0]) {
    tmp4 = null;
    if (!isKestrelTreatment.isKestrelTreatment) {
      obj = { style: tmp.compressionContainer };
      obj = { 1726238916: null, 607091733: null };
      const intl = arg1(dependencyMap[19]).intl;
      obj.label = intl.string(arg1(dependencyMap[19]).t.ix8XIj);
      obj.value = stateFromStores;
      obj.onValueChange = callback;
      const obj1 = { style: tmp.compressionHint, variant: "text-xs/normal" };
      const intl2 = arg1(dependencyMap[19]).intl;
      obj1.children = intl2.string(arg1(dependencyMap[19]).t.wC0+Ph);
      obj.subLabel = callback2(arg1(dependencyMap[30]).Text, obj1);
      obj.children = callback2(arg1(dependencyMap[29]).TableSwitchRow, obj);
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
  let obj = arg1(dependencyMap[31]);
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        obj = { url: image.uri, style, autoplay: true };
        let tmp5 = callback2(arg1(dependencyMap[32]).APNGPlayer, obj);
      }
      return tmp5;
    }
  }
  obj = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
  tmp5 = callback2(importDefault(dependencyMap[33]), obj);
}
({ PremiumSubscriptionSKUs: closure_11, PremiumTypes: closure_12, PremiumUpsellTypes: closure_13 } = _createForOfIteratorHelperLoose);
({ AnalyticEvents: closure_14, AnalyticsPages: closure_15, HelpdeskArticles: closure_16, ThemeTypes: closure_17 } = GuildFeatures);
({ Fragment: closure_19, jsx: closure_20, jsxs: closure_21 } = mergeLocations);
openPremiumPlanSelectionActionSheet = {};
openPremiumPlanSelectionActionSheet = { marginTop: require("_deletePaymentSource").space.PX_16 };
openPremiumPlanSelectionActionSheet.image = openPremiumPlanSelectionActionSheet;
openPremiumPlanSelectionActionSheet.text = {};
openPremiumPlanSelectionActionSheet.betaTag = { marginLeft: 0 };
openPremiumPlanSelectionActionSheet.description = { marginHorizontal: require("_deletePaymentSource").space.PX_16 };
const obj1 = { marginHorizontal: require("_deletePaymentSource").space.PX_16 };
openPremiumPlanSelectionActionSheet.textContainer = { marginTop: require("_deletePaymentSource").space.PX_24, marginHorizontal: require("_deletePaymentSource").space.PX_8, alignItems: "center", gap: require("_deletePaymentSource").space.PX_8 };
const obj2 = { marginTop: require("_deletePaymentSource").space.PX_24, marginHorizontal: require("_deletePaymentSource").space.PX_8, alignItems: "center", gap: require("_deletePaymentSource").space.PX_8 };
openPremiumPlanSelectionActionSheet.buttonContainer = { marginTop: require("_deletePaymentSource").space.PX_32, gap: require("_deletePaymentSource").space.PX_8 };
const obj3 = { marginTop: require("_deletePaymentSource").space.PX_32, gap: require("_deletePaymentSource").space.PX_8 };
openPremiumPlanSelectionActionSheet.compressionContainer = { marginTop: require("_deletePaymentSource").space.PX_24 };
openPremiumPlanSelectionActionSheet.compressionHint = { marginTop: 2 };
openPremiumPlanSelectionActionSheet.imageGradientBackgroundContainer = {};
const obj4 = { marginTop: require("_deletePaymentSource").space.PX_24 };
openPremiumPlanSelectionActionSheet.imageGradientBackground = { width: "100%", marginHorizontal: require("_deletePaymentSource").space.PX_16, borderRadius: require("_deletePaymentSource").space.PX_12 };
const obj5 = { width: "100%", marginHorizontal: require("_deletePaymentSource").space.PX_16, borderRadius: require("_deletePaymentSource").space.PX_12 };
openPremiumPlanSelectionActionSheet.imageInGradientBackground = { marginTop: require("_deletePaymentSource").space.PX_32, marginBottom: require("_deletePaymentSource").space.PX_32 };
openPremiumPlanSelectionActionSheet = openPremiumPlanSelectionActionSheet.createStyles(openPremiumPlanSelectionActionSheet);
const result = useGetTrialOffer.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(arg0) {
  let featureName;
  let legacyProps;
  ({ featureName, legacyProps } = arg0);
  const arg1 = legacyProps;
  let importDefault;
  let dependencyMap;
  let SoundButtonOverlay;
  let React;
  const tmp = openPremiumPlanSelectionActionSheet();
  let obj = arg1(dependencyMap[27]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = arg1(dependencyMap[34]);
  let initialUpsellKey;
  if (null != legacyProps) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (null == initialUpsellKey) {
    let obj2 = arg1(dependencyMap[35]);
    initialUpsellKey = obj2.getUpsellType(featureName);
  }
  const premiumUpsellConfig = obj1.usePremiumUpsellConfig(initialUpsellKey);
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  importDefault = useTier0UpsellContent;
  const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  dependencyMap = onViewAllPerks;
  let obj3 = arg1(dependencyMap[27]);
  const items1 = [keys];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => theme.theme);
  let obj4 = arg1(dependencyMap[27]);
  const items2 = [module_31];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => guildId.getGuildId());
  const tmp11 = function usePageConfig(arg0, TIER_0, stateFromStores1, stateFromStores2, featureName) {
    let obj = legacyProps(onViewAllPerks[14]);
    const token = obj.useToken(useTier0UpsellContent(onViewAllPerks[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
    let obj1 = legacyProps(onViewAllPerks[14]);
    let str = "dark";
    const token1 = obj1.useToken(useTier0UpsellContent(onViewAllPerks[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
    if (stateFromStores1 === constants4.LIGHT) {
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
    obj1.description = intl2.formatToPlainString(legacyProps(onViewAllPerks[19]).t.fc+8uy, { nitroTierName: premiumTypeDisplayName });
    obj1.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
    obj1.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
    obj2 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
    obj1.image = obj2;
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj1;
    obj3 = {};
    const intl3 = legacyProps(onViewAllPerks[19]).intl;
    obj3.title = intl3.string(legacyProps(onViewAllPerks[19]).t.zY5PPb);
    const intl4 = legacyProps(onViewAllPerks[19]).intl;
    obj3.description = intl4.formatToPlainString(legacyProps(onViewAllPerks[19]).t.uukIF/, { nitroTierName: premiumTypeDisplayName });
    obj3.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
    obj3.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
    const obj4 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
    obj3.image = obj4;
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj3;
    obj5 = {};
    const intl5 = legacyProps(onViewAllPerks[19]).intl;
    obj5.title = intl5.string(legacyProps(onViewAllPerks[19]).t.G+pngo);
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
        const obj = callback(closure_2[20]);
        obj.openURL(callback(closure_2[21]).getArticleURL(constants.NITRO_FAQ));
      }
    };
    obj6.children = obj14.fileUploadLimitRoadblockDescription(obj7);
    obj5.description = callback(closure_19, obj6);
    obj5.analyticsPage = constants3.PREMIUM_UPSELL_FILE_UPLOAD;
    obj5.upsellType = constants.LARGER_FILE_UPLOAD_UPSELL;
    const obj8 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
    obj5.image = obj8;
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj5;
    const obj9 = {};
    const intl6 = legacyProps(onViewAllPerks[19]).intl;
    obj9.title = intl6.string(legacyProps(onViewAllPerks[19]).t.SI7R9I);
    const intl7 = legacyProps(onViewAllPerks[19]).intl;
    obj9.description = intl7.formatToPlainString(legacyProps(onViewAllPerks[19]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
    obj9.analyticsPage = constants3.PREMIUM_UPSELL_ANIMATED_EMOJI;
    obj9.upsellType = constants.ANIMATED_EMOJI_UPSELL;
    const obj10 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
    obj9.image = obj10;
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj9;
    const obj11 = {};
    const intl8 = legacyProps(onViewAllPerks[19]).intl;
    obj11.title = intl8.string(legacyProps(onViewAllPerks[19]).t.p0I2Bk);
    const intl9 = legacyProps(onViewAllPerks[19]).intl;
    obj11.description = intl9.string(legacyProps(onViewAllPerks[19]).t.jBqF2k);
    obj11.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
    obj11.upsellType = constants.CLIENT_THEMES_UPSELL;
    obj11.image = useTier0UpsellContent(onViewAllPerks[22]);
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.CLIENT_THEMES] = obj11;
    const obj12 = {};
    const intl10 = legacyProps(onViewAllPerks[19]).intl;
    obj12.title = intl10.string(legacyProps(onViewAllPerks[19]).t.TYFwcy);
    const intl11 = legacyProps(onViewAllPerks[19]).intl;
    obj12.description = intl11.string(legacyProps(onViewAllPerks[19]).t.HDt8ip);
    obj12.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
    obj12.upsellType = constants.APP_ICON_UPSELL;
    obj12.image = useTier0UpsellContent(onViewAllPerks[23]);
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.APP_ICONS] = obj12;
    const obj13 = {};
    const intl12 = legacyProps(onViewAllPerks[19]).intl;
    obj13.title = intl12.string(legacyProps(onViewAllPerks[19]).t.YXk6N7);
    const intl13 = legacyProps(onViewAllPerks[19]).intl;
    obj13.description = intl13.string(legacyProps(onViewAllPerks[19]).t.m/HzW8);
    obj13.analyticsPage = constants3.PREMIUM_UPSELL_FOR_LATER;
    obj13.upsellType = constants.FOR_LATER_MODAL_UPSELL;
    obj13.image = useTier0UpsellContent(onViewAllPerks[24]);
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.SAVED_MESSAGES] = obj13;
    obj14 = {};
    const intl14 = legacyProps(onViewAllPerks[19]).intl;
    obj14.title = intl14.string(legacyProps(onViewAllPerks[19]).t.ETZQx5);
    const intl15 = legacyProps(onViewAllPerks[19]).intl;
    obj14.description = intl15.formatToPlainString(legacyProps(onViewAllPerks[19]).t.4nlpei, { fps: FPS_60.FPS_60 });
    obj14.analyticsPage = constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
    obj14.upsellType = constants.STREAM_QUALITY_UPSELL;
    obj14.image = useTier0UpsellContent(onViewAllPerks[25]);
    const items = [token, token1];
    obj14.imageGradientBackground = { colors: items, start: legacyProps(onViewAllPerks[26]).HorizontalGradient.START, end: legacyProps(onViewAllPerks[26]).HorizontalGradient.END };
    obj[legacyProps(onViewAllPerks[16]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj14;
    return obj;
  }(undefined, useTier0UpsellContent ? closure_12.TIER_0 : closure_12.TIER_2, stateFromStores1, stateFromStores2, featureName)[featureName];
  SoundButtonOverlay = tmp11;
  const analyticsLocations = importDefault(dependencyMap[36])().analyticsLocations;
  React = analyticsLocations;
  let obj5 = arg1(dependencyMap[27]);
  const items3 = [invariant];
  const stateFromStores3 = obj5.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const items4 = [tmp11, analyticsLocations, useTier0UpsellContent, legacyProps];
  const effect = React.useEffect(() => {
    let obj = useTier0UpsellContent(onViewAllPerks[37]);
    obj = {};
    let analyticsProperties;
    if (null != legacyProps) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const merged = Object.assign(analyticsProperties);
    let upsellType;
    if (null != tmp11) {
      upsellType = tmp11.upsellType;
    }
    obj["type"] = upsellType;
    obj["location"] = location;
    obj["location_stack"] = analyticsLocations;
    obj["sku_id"] = legacyProps(onViewAllPerks[15]).castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2);
    obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj);
  }, items4);
  const tmp14 = importDefault(dependencyMap[38])(useTier0UpsellContent, onViewAllPerks, tmp11.analyticsPage);
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
        obj2 = { size: arg1(dependencyMap[44]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
        tmp37 = callback2(importDefault(dependencyMap[44]), obj2);
        const tmp41 = importDefault(dependencyMap[44]);
      }
      const items6 = [tmp37, , ];
      obj3 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, style: tmp.text, children: tmp11.title };
      items6[1] = callback2(arg1(dependencyMap[30]).Text, obj3);
      obj4 = {};
      const items7 = [, ];
      ({ text: arr9[0], description: arr9[1] } = tmp);
      obj4.style = items7;
      obj4.variant = "text-sm/normal";
      obj4.children = tmp11.description;
      items6[2] = callback2(arg1(dependencyMap[45]).TextWithIOSLinkWorkaround, obj4);
      obj1.children = items6;
      items5[1] = closure_21(View, obj1);
      items5[2] = getPageContent(featureName, true === tmp11.showBetaBadge);
      obj5 = { style: tmp.buttonContainer };
      let string = callback2;
      let num7 = 46;
      let Button = arg1(dependencyMap[46]).Button;
      let obj6 = { loading };
      let onPress = null;
      if (!loading) {
        onPress = tmp14.onPress;
      }
      obj6.onPress = onPress;
      const intl = arg1(dependencyMap[19]).intl;
      let string2 = intl.string;
      let intl2 = arg1(dependencyMap[19]).t;
      if (useTier0UpsellContent) {
        let string2Result = string2(intl2.cM8bbx);
      } else {
        string2Result = string2(intl2.8x0jKT);
      }
      obj6.text = string2Result;
      obj6.icon = importDefault(dependencyMap[47]);
      obj6 = [, ];
      obj6[0] = string(Button, obj6);
      Button = callback2;
      string2 = arg1;
      const obj7 = { variant: "secondary" };
      intl2 = arg1(dependencyMap[19]).intl;
      string = intl2.string;
      obj7.text = string(arg1(dependencyMap[19]).t.PcTCB7);
      obj7.onPress = tmp15;
      num7 = callback2(arg1(dependencyMap[num7]).Button, obj7);
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
      const obj8 = { style: tmp.imageGradientBackgroundContainer };
      const obj9 = { colors: tmp11.imageGradientBackground.colors, start: tmp11.imageGradientBackground.start, end: tmp11.imageGradientBackground.end, style: tmp.imageGradientBackground };
      const obj10 = { image: tmp11.image };
      const items8 = [, ];
      ({ image: arr6[0], imageInGradientBackground: arr6[1] } = tmp);
      obj10.style = items8;
      obj10.useReducedMotion = stateFromStores3;
      obj9.children = callback2(PremiumUpsellImage, obj10);
      obj8.children = callback2(importDefault(dependencyMap[43]), obj9);
      let tmp25 = callback2(View, obj8);
      const tmp31 = importDefault(dependencyMap[43]);
    } else {
      const obj11 = { image: tmp11.image, style: tmp.image, useReducedMotion: stateFromStores3 };
      tmp25 = callback2(PremiumUpsellImage, obj11);
    }
    const tmp16 = callback2;
  }
};
