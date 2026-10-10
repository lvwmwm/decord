// Module ID: 9278
// Function ID: 9279
// Name: PremiumUpsellActionSheet
// Dependencies: [19, 17, 5081, 1205, 5110, 4939, 1390, 1392, 1085, 5212, 9279, 21, 5092, 587, 558, 576, 4818, 4769, 9280, 7779, 7764, 9281, 9282, 1126, 9286, 9290, 9291, 5056, 9277, 9292, 12881, 12885, 1105, 1382, 9011, 6156, 5391, 504, 6851, 9461, 9269, 7169, 8089, 12886, 9535, 1265, 9518, 4985, 6898, 12888, 5088, 5379, 8080, 2]

// Module 9278 (PremiumUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useToken from "useToken" /* 4818 */;
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5212 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import FastImageDefault from "FastImage" /* 6156 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 9277 */;
import ScheduledMessagesConstants from "ScheduledMessagesConstants" /* 9279 */;
import AssetRegistryDefault from "AssetRegistry" /* 9290 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9291 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 9292 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12885 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import UserStore from "UserStore" /* 1390 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
const ConstantsIOS = tmp(1105);
const intl18 = tmp(1126);
const PremiumUtils = tmp(4769);
const FileUtils = tmp(7764);
const UploadLimits = tmp(7779);
const APNGPlayer = tmp(9011);
const EntitlementFeatureNames = tmp(9280);
const MobileEmojiPickerUpsellRestyleExperiment = tmp(9281);
const ReactionsSpotIllustration = tmp(9282);
const StickersSpotIllustration = tmp(9286);
const NitroScheduleMessageSpotIllustration = tmp(12881);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePageConfig(arg0) {
  let featureName;
  let guildId;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl15;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj14;
  let obj9;
  let premiumType;
  let theme;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp22;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp33;
  let tmp36;
  let tmp41;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(59);
  ({ premiumType, guildId, featureName, theme } = arg0);
  let obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  let str = "dark";
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  if (cResult[0] === featureName) {
    if (cResult[1] === guildId) {
      if (cResult[2] === str) {
        let tmp48;
        if (cResult[3] === premiumType) {
          tmp7 = cResult[4];
          tmp8 = cResult[5];
          tmp9 = cResult[6];
          tmp10 = cResult[7];
          tmp11 = cResult[8];
          tmp12 = cResult[9];
          tmp13 = cResult[10];
          tmp14 = cResult[11];
          tmp15 = cResult[12];
          tmp16 = cResult[13];
          tmp17 = cResult[14];
          tmp18 = cResult[15];
        }
        const _HermesInternal = HermesInternal;
        const combined = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png";
        if (cResult[30] !== combined) {
          const obj4 = { uri: combined };
          cResult[30] = combined;
          cResult[31] = obj4;
          tmp48 = obj4;
        } else {
          tmp48 = cResult[31];
        }
        if (cResult[32] === tmp7) {
          if (cResult[33] === tmp8) {
            if (cResult[34] === tmp48) {
              let tmp49;
              let tmp52;
              let tmp55;
              let tmp58;
              let tmp61;
              let tmp66;
              let tmp71;
              let tmp70;
              if (cResult[35] === tmp11) {
                tmp49 = cResult[36];
              }
              const _Symbol2 = Symbol;
              if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { title: intl10.string(intl18.t.p0I2Bk), description: intl11.string(intl18.t.jBqF2k), analyticsPage: constants3.PREMIUM_UPSELL_CLIENT_THEMES, upsellType: constants.CLIENT_THEMES_UPSELL, image: AssetRegistryDefault };
                intl10 = intl18.intl;
                intl11 = intl18.intl;
                cResult[37] = obj5;
                tmp52 = obj5;
              } else {
                tmp52 = cResult[37];
              }
              const _Symbol3 = Symbol;
              if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { title: intl12.string(intl18.t.TYFwcy), description: intl13.string(intl18.t.HDt8ip), analyticsPage: constants3.PREMIUM_UPSELL_APP_ICONS, upsellType: constants.APP_ICON_UPSELL, image: AssetRegistryDefault2 };
                intl12 = intl18.intl;
                intl13 = intl18.intl;
                cResult[38] = obj6;
                tmp55 = obj6;
              } else {
                tmp55 = cResult[38];
              }
              const _Symbol4 = Symbol;
              if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                const intl14 = intl18.intl;
                const obj7 = { premiumMax };
                const formatToPlainStringResult = intl14.formatToPlainString(intl18.t.GNoaxo, obj7);
                cResult[39] = formatToPlainStringResult;
                tmp58 = formatToPlainStringResult;
              } else {
                tmp58 = cResult[39];
              }
              const _Symbol5 = Symbol;
              if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                const obj8 = { children: intl15.format(intl18.t["1kFyto"], obj9) };
                intl15 = intl18.intl;
                obj9 = {
                  premiumMax,
                  onClick() {
                                  const obj = ActionSheetActionCreatorsDefault;
                                  obj.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
                                  const obj2 = ScheduledMessagesUtils;
                                  const result = obj2.showScheduledMessagesModal();
                                }
                };
                const tmp65 = authStore5(closure_19, obj8);
                cResult[40] = tmp65;
                tmp61 = tmp65;
              } else {
                tmp61 = cResult[40];
              }
              const _Symbol6 = Symbol;
              if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                const obj10 = { title: tmp58, showBetaBadge: true, description: tmp61, analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, illustration: authStore5(NitroScheduleMessageSpotIllustration.NitroScheduleMessageSpotIllustration, { width: 198, height: 132, accessible: false }) };
                cResult[41] = obj10;
                tmp66 = obj10;
              } else {
                tmp66 = cResult[41];
              }
              const _Symbol7 = Symbol;
              if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                const intl16 = intl18.intl;
                const stringResult = intl16.string(intl18.t.ETZQx5);
                const intl17 = intl18.intl;
                const obj11 = { fps: ApplicationStreamFPS.FPS_60 };
                const formatToPlainStringResult1 = intl17.formatToPlainString(intl18.t["4nlpei"], obj11);
                cResult[42] = stringResult;
                cResult[43] = formatToPlainStringResult1;
                tmp71 = formatToPlainStringResult1;
                tmp70 = stringResult;
              } else {
                tmp70 = cResult[42];
                tmp71 = cResult[43];
              }
              if (cResult[44] === token1) {
                let tmp75;
                if (cResult[45] === token) {
                  tmp75 = cResult[46];
                }
                if (cResult[47] === tmp9) {
                  if (cResult[48] === tmp10) {
                    if (cResult[49] === tmp49) {
                      if (cResult[50] === tmp75) {
                        if (cResult[51] === tmp12) {
                          if (cResult[52] === tmp13) {
                            if (cResult[53] === tmp14) {
                              if (cResult[54] === tmp15) {
                                if (cResult[55] === tmp16) {
                                  if (cResult[56] === tmp17) {
                                    let tmp78;
                                    if (cResult[57] === tmp18) {
                                      tmp78 = cResult[58];
                                    }
                                    return tmp78;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj12 = {};
                obj12[tmp12] = tmp13;
                obj12[tmp14] = tmp15;
                obj12[tmp16] = tmp17;
                obj12[tmp18] = tmp9;
                obj12[tmp10] = tmp49;
                obj12[EntitlementFeatureNames.EntitlementFeatureNames.CLIENT_THEMES] = tmp52;
                obj12[EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS] = tmp55;
                obj12[EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES] = tmp66;
                obj12[EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY] = tmp75;
                cResult[47] = tmp9;
                cResult[48] = tmp10;
                cResult[49] = tmp49;
                cResult[50] = tmp75;
                cResult[51] = tmp12;
                cResult[52] = tmp13;
                cResult[53] = tmp14;
                cResult[54] = tmp15;
                cResult[55] = tmp16;
                cResult[56] = tmp17;
                cResult[57] = tmp18;
                cResult[58] = obj12;
                tmp78 = obj12;
              }
              const obj13 = { title: tmp70, description: tmp71, analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: AssetRegistryDefault3, imageGradientBackground: obj14 };
              obj14 = { colors: items, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END };
              items = [token, token1];
              cResult[44] = token1;
              cResult[45] = token;
              cResult[46] = obj13;
              tmp75 = obj13;
            }
          }
        }
        const obj15 = { title: tmp8, description: tmp11, analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, image: tmp48, illustration: tmp7 };
        cResult[32] = tmp7;
        cResult[33] = tmp8;
        cResult[34] = tmp48;
        cResult[35] = tmp11;
        cResult[36] = obj15;
        tmp49 = obj15;
      }
    }
  }
  const tmpResult = PremiumUtils;
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const getEffectiveUploadLimit = UploadLimits.getEffectiveUploadLimit;
    UploadLimits;
    const tmpResult6 = FileUtils;
    effectiveUploadLimit = getEffectiveUploadLimit(tmpResult6.maxFileSize(guildId));
  }
  if (cResult[16] !== featureName) {
    let tmp23;
    const tmpResult7 = MobileEmojiPickerUpsellRestyleExperiment;
    if (tmpResult7.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
      tmp23 = authStore5(ReactionsSpotIllustration.ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
    }
    cResult[16] = featureName;
    cResult[17] = tmp23;
    tmp22 = tmp23;
  } else {
    tmp22 = cResult[17];
  }
  const SOUNDBOARD_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  const obj16 = { title: intl.string(intl18.t.jGDYF0), description: intl2.formatToPlainString(intl18.t["fc+8uy"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE, upsellType: constants.SOUNDBOARD_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" } };
  intl = intl18.intl;
  intl2 = intl18.intl;
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" });
  const EMOJIS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  const obj18 = { title: intl3.string(intl18.t.zY5PPb), description: intl4.formatToPlainString(intl18.t["uukIF/"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE, upsellType: constants.EMOJI_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp22 };
  intl3 = intl18.intl;
  intl4 = intl18.intl;
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const STICKERS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = intl18.intl;
    const stringResult1 = intl5.string(intl18.t.Eukdgl);
    const intl6 = intl18.intl;
    const stringResult2 = intl6.string(intl18.t.sMmd7s);
    cResult[18] = stringResult1;
    cResult[19] = stringResult2;
    tmp28 = stringResult2;
    tmp27 = stringResult1;
  } else {
    tmp27 = cResult[18];
    tmp28 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const obj20 = { title: tmp27, description: tmp28, analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: authStore5(StickersSpotIllustration.StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
    cResult[20] = obj20;
    tmp31 = obj20;
  } else {
    tmp31 = cResult[20];
  }
  const INCREASED_FILE_UPLOAD_SIZE = EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const intl7 = intl18.intl;
    const stringResult3 = intl7.string(intl18.t["G+pngo"]);
    cResult[21] = stringResult3;
    tmp33 = stringResult3;
  } else {
    tmp33 = cResult[21];
  }
  const tmpResult8 = FileUtils;
  let result = tmpResult8.fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit });
  if (cResult[22] !== result) {
    const obj21 = { children: result };
    const tmp39 = authStore5(closure_19, obj21);
    cResult[22] = result;
    cResult[23] = tmp39;
    tmp36 = tmp39;
  } else {
    tmp36 = cResult[23];
  }
  const combined1 = "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png";
  if (cResult[24] !== combined1) {
    const obj22 = { uri: combined1 };
    cResult[24] = combined1;
    cResult[25] = obj22;
    tmp41 = obj22;
  } else {
    tmp41 = cResult[25];
  }
  if (cResult[26] === tmp36) {
    let tmp42;
    let tmp43;
    if (cResult[27] === tmp41) {
      tmp42 = cResult[28];
    }
    const ANIMATED_EMOJIS = EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS;
    const _Symbol = Symbol;
    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
      const intl8 = intl18.intl;
      const stringResult4 = intl8.string(intl18.t.SI7R9I);
      cResult[29] = stringResult4;
      tmp43 = stringResult4;
    } else {
      tmp43 = cResult[29];
    }
    const intl9 = intl18.intl;
    const obj23 = { nitroTierName: premiumTypeDisplayName };
    const formatToPlainStringResult2 = intl9.formatToPlainString(intl18.t.uGkSY2, obj23);
    cResult[0] = featureName;
    cResult[1] = guildId;
    cResult[2] = str;
    cResult[3] = premiumType;
    cResult[4] = tmp22;
    cResult[5] = tmp43;
    cResult[6] = tmp42;
    cResult[7] = ANIMATED_EMOJIS;
    cResult[8] = formatToPlainStringResult2;
    cResult[9] = SOUNDBOARD_EVERYWHERE;
    cResult[10] = obj16;
    cResult[11] = EMOJIS_EVERYWHERE;
    cResult[12] = obj18;
    cResult[13] = STICKERS_EVERYWHERE;
    cResult[14] = tmp31;
    cResult[15] = INCREASED_FILE_UPLOAD_SIZE;
    tmp8 = tmp43;
    tmp18 = INCREASED_FILE_UPLOAD_SIZE;
    tmp17 = tmp31;
    tmp16 = STICKERS_EVERYWHERE;
    tmp15 = obj18;
    tmp14 = EMOJIS_EVERYWHERE;
    tmp13 = obj16;
    tmp12 = SOUNDBOARD_EVERYWHERE;
    tmp11 = formatToPlainStringResult2;
    tmp10 = ANIMATED_EMOJIS;
    tmp9 = tmp42;
    tmp7 = tmp22;
  }
  const obj24 = { title: tmp33, description: tmp36, analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: tmp41 };
  cResult[26] = tmp36;
  cResult[27] = tmp41;
  cResult[28] = obj24;
  tmp42 = obj24;
}) : (function usePageConfig(arg0) {
  let featureName;
  let guildId;
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
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let obj10;
  let obj17;
  let obj18;
  let obj19;
  let obj21;
  let obj22;
  let premiumType;
  let theme;
  let tmpResult8;
  ({ guildId, featureName } = arg0);
  ({ premiumType, theme } = arg0);
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  let obj2 = useToken;
  let str = "dark";
  const token1 = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  const tmpResult = PremiumUtils;
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const getEffectiveUploadLimit = UploadLimits.getEffectiveUploadLimit;
    UploadLimits;
    const tmpResult6 = FileUtils;
    effectiveUploadLimit = getEffectiveUploadLimit(tmpResult6.maxFileSize(guildId));
  }
  let tmp9;
  const tmpResult7 = MobileEmojiPickerUpsellRestyleExperiment;
  if (tmpResult7.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
    tmp9 = authStore5(ReactionsSpotIllustration.ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
  }
  const obj3 = {};
  const obj4 = { title: intl.string(intl18.t.jGDYF0), description: intl2.formatToPlainString(intl18.t["fc+8uy"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE, upsellType: constants.SOUNDBOARD_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" } };
  const SOUNDBOARD_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  intl = intl18.intl;
  intl2 = intl18.intl;
  obj3[SOUNDBOARD_EVERYWHERE] = obj4;
  const obj6 = { title: intl3.string(intl18.t.zY5PPb), description: intl4.formatToPlainString(intl18.t["uukIF/"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE, upsellType: constants.EMOJI_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp9 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" });
  const EMOJIS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  intl3 = intl18.intl;
  intl4 = intl18.intl;
  obj3[EMOJIS_EVERYWHERE] = obj6;
  const obj8 = { title: intl5.string(intl18.t.Eukdgl), description: intl6.string(intl18.t.sMmd7s), analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: authStore5(StickersSpotIllustration.StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const STICKERS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
  intl5 = intl18.intl;
  intl6 = intl18.intl;
  obj3[STICKERS_EVERYWHERE] = obj8;
  const obj9 = { title: intl7.string(intl18.t["G+pngo"]), description: authStore5(closure_19, obj10), analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" } };
  const INCREASED_FILE_UPLOAD_SIZE = EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  intl7 = intl18.intl;
  obj10 = { children: tmpResult8.fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit }) };
  obj3[INCREASED_FILE_UPLOAD_SIZE] = obj9;
  tmpResult8 = FileUtils;
  const obj12 = { title: intl8.string(intl18.t.SI7R9I), description: intl9.formatToPlainString(intl18.t.uGkSY2, { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp9 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" });
  const ANIMATED_EMOJIS = EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS;
  intl8 = intl18.intl;
  intl9 = intl18.intl;
  obj3[ANIMATED_EMOJIS] = obj12;
  const obj14 = { title: intl10.string(intl18.t.p0I2Bk), description: intl11.string(intl18.t.jBqF2k), analyticsPage: constants3.PREMIUM_UPSELL_CLIENT_THEMES, upsellType: constants.CLIENT_THEMES_UPSELL, image: AssetRegistryDefault };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const CLIENT_THEMES = EntitlementFeatureNames.EntitlementFeatureNames.CLIENT_THEMES;
  intl10 = intl18.intl;
  intl11 = intl18.intl;
  obj3[CLIENT_THEMES] = obj14;
  const obj15 = { title: intl12.string(intl18.t.TYFwcy), description: intl13.string(intl18.t.HDt8ip), analyticsPage: constants3.PREMIUM_UPSELL_APP_ICONS, upsellType: constants.APP_ICON_UPSELL, image: AssetRegistryDefault2 };
  const APP_ICONS = EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS;
  intl12 = intl18.intl;
  intl13 = intl18.intl;
  obj3[APP_ICONS] = obj15;
  const obj16 = { title: intl14.formatToPlainString(intl18.t.GNoaxo, obj17), showBetaBadge: true, description: authStore5(closure_19, obj18), analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, illustration: authStore5(NitroScheduleMessageSpotIllustration.NitroScheduleMessageSpotIllustration, { width: 198, height: 132, accessible: false }) };
  const SCHEDULED_MESSAGES = EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES;
  intl14 = intl18.intl;
  obj17 = { premiumMax };
  obj18 = { children: intl15.format(intl18.t["1kFyto"], obj19) };
  intl15 = intl18.intl;
  obj19 = {
    premiumMax,
    onClick() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj2 = ScheduledMessagesUtils;
      const result = obj2.showScheduledMessagesModal();
    }
  };
  obj3[SCHEDULED_MESSAGES] = obj16;
  const obj20 = { title: intl16.string(intl18.t.ETZQx5), description: intl17.formatToPlainString(intl18.t["4nlpei"], obj21), analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: AssetRegistryDefault3, imageGradientBackground: obj22 };
  const STREAM_HIGH_QUALITY = EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY;
  intl16 = intl18.intl;
  intl17 = intl18.intl;
  obj21 = { fps: ApplicationStreamFPS.FPS_60 };
  obj22 = { colors: items, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END };
  items = [token, token1];
  obj3[STREAM_HIGH_QUALITY] = obj20;
  return obj3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellImage(arg0) {
  let image;
  let style;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(7);
  ({ image, style, useReducedMotion } = arg0);
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        if (cResult[0] === image.uri) {
          let tmp5;
          if (cResult[1] === style) {
            tmp5 = cResult[2];
          }
          return tmp5;
        }
        const obj3 = { url: image.uri, style, autoplay: true };
        const tmp7 = authStore5(APNGPlayer.APNGPlayer, obj3);
        cResult[0] = image.uri;
        cResult[1] = style;
        cResult[2] = tmp7;
        tmp5 = tmp7;
      }
    }
  }
  if (cResult[3] === image) {
    if (cResult[4] === style) {
      let tmp9;
      if (cResult[5] === !useReducedMotion) {
        tmp9 = cResult[6];
      }
      return tmp9;
    }
  }
  const tmp10 = authStore5(FastImageDefault, { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false });
  cResult[3] = image;
  cResult[4] = style;
  cResult[5] = !useReducedMotion;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : (function PremiumUpsellImage(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellHero(arg0) {
  let pageConfig;
  let styles;
  let tmp21;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(27);
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    if (cResult[0] === pageConfig.illustration) {
      let tmp22;
      if (cResult[1] === styles.hero) {
        tmp22 = cResult[2];
      }
      tmp21 = tmp22;
    }
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    const tmp25 = authStore5(View, obj2);
    cResult[0] = pageConfig.illustration;
    cResult[1] = styles.hero;
    cResult[2] = tmp25;
    tmp22 = tmp25;
  } else {
    tmp21 = null;
    if (null != pageConfig.image) {
      let tmp4;
      if (null != pageConfig.imageGradientBackground) {
        if (cResult[3] === styles.hero) {
          if (cResult[4] === styles.image) {
            let tmp8;
            if (cResult[5] === styles.imageInGradientBackground) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === pageConfig.image) {
              if (cResult[8] === tmp8) {
                let tmp9;
                if (cResult[9] === useReducedMotion) {
                  tmp9 = cResult[10];
                }
                if (cResult[11] === pageConfig.imageGradientBackground.colors) {
                  if (cResult[12] === pageConfig.imageGradientBackground.end) {
                    if (cResult[13] === pageConfig.imageGradientBackground.start) {
                      if (cResult[14] === styles.imageGradientBackground) {
                        let tmp13;
                        if (cResult[15] === tmp9) {
                          tmp13 = cResult[16];
                        }
                        if (cResult[17] === styles.imageGradientBackgroundContainer) {
                          let tmp17;
                          if (cResult[18] === tmp13) {
                            tmp17 = cResult[19];
                          }
                          tmp4 = tmp17;
                        }
                        const obj3 = { style: styles.imageGradientBackgroundContainer, children: tmp13 };
                        const tmp20 = authStore5(View, obj3);
                        cResult[17] = styles.imageGradientBackgroundContainer;
                        cResult[18] = tmp13;
                        cResult[19] = tmp20;
                        tmp17 = tmp20;
                      }
                    }
                  }
                }
                const obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: tmp9 };
                const tmp16 = authStore5(LinearGradientDefault, obj4);
                cResult[11] = pageConfig.imageGradientBackground.colors;
                cResult[12] = pageConfig.imageGradientBackground.end;
                cResult[13] = pageConfig.imageGradientBackground.start;
                cResult[14] = styles.imageGradientBackground;
                cResult[15] = tmp9;
                cResult[16] = tmp16;
                tmp13 = tmp16;
              }
            }
            const obj5 = { image: pageConfig.image, style: tmp8, useReducedMotion };
            const tmp12 = authStore5(closure_23, obj5);
            cResult[7] = pageConfig.image;
            cResult[8] = tmp8;
            cResult[9] = useReducedMotion;
            cResult[10] = tmp12;
            tmp9 = tmp12;
          }
        }
        const items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        cResult[3] = styles.hero;
        cResult[4] = styles.image;
        cResult[5] = styles.imageInGradientBackground;
        cResult[6] = items;
        tmp8 = items;
      } else {
        if (cResult[20] === styles.hero) {
          let tmp3;
          if (cResult[21] === styles.image) {
            tmp3 = cResult[22];
          }
          if (cResult[23] === pageConfig.image) {
            if (cResult[24] === tmp3) {
              if (cResult[25] === useReducedMotion) {
                tmp4 = cResult[26];
              }
            }
          }
          const obj6 = { image: pageConfig.image, style: tmp3, useReducedMotion };
          const tmp7 = authStore5(closure_23, obj6);
          cResult[23] = pageConfig.image;
          cResult[24] = tmp3;
          cResult[25] = useReducedMotion;
          cResult[26] = tmp7;
          tmp4 = tmp7;
        }
        const items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        cResult[20] = styles.hero;
        cResult[21] = styles.image;
        cResult[22] = items1;
        tmp3 = items1;
      }
      tmp21 = tmp4;
    }
  }
  return tmp21;
}) : (function PremiumUpsellHero(arg0) {
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
        obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: authStore5(closure_23, obj5) };
        obj5 = { image: pageConfig.image, style: items, useReducedMotion };
        items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        tmp8 = LinearGradientDefault;
        tmp3 = authStore5(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: items1, useReducedMotion };
        items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        tmp3 = authStore5(closure_23, obj);
      }
      tmp10 = tmp3;
    }
  }
  return tmp10;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellActionSheet(arg0) {
  let analyticsLocations;
  let analyticsLocations2;
  let currentUser;
  let featureName;
  let items6;
  let legacyProps;
  let loading;
  let onDismiss;
  let onPress;
  let theme;
  let tmp4;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let useTier0UpsellContent;
  const tmp2 = useTier0UpsellContent;
  let obj = legacyProps(useTier0UpsellContent[15]);
  const cResult = obj.c(83);
  ({ featureName, legacyProps } = arg0);
  ({ analyticsLocations, onDismiss } = arg0);
  if (cResult[0] !== analyticsLocations) {
    let items = analyticsLocations;
    if (undefined === analyticsLocations) {
      items = [];
    }
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = closure_21();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn;
    tmp7 = fn;
    tmp6 = items1;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = legacyProps(tmp2[37]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  analyticsLocations2 = analyticsLocations2(tmp2[38])(tmp4).analyticsLocations;
  if (cResult[4] === featureName) {
    let tmp14;
    let initialUpsellKey;
    const tmp11 = cResult[5];
    if (legacyProps != null) {
      initialUpsellKey = legacyProps.initialUpsellKey;
    }
    if (tmp11 === initialUpsellKey) {
      tmp14 = cResult[6];
    }
    const tmpResult11 = legacyProps(tmp2[40]);
    const premiumUpsellConfig = tmpResult11.usePremiumUpsellConfig(tmp14, analyticsLocations2);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
    const tmpResult12 = legacyProps(tmp2[41]);
    const premiumTrialOffer = tmpResult12.usePremiumTrialOffer();
    const tmpResult13 = legacyProps(tmp2[42]);
    const premiumDiscountOffer = tmpResult13.usePremiumDiscountOffer();
    if (cResult[7] === premiumDiscountOffer) {
      if (cResult[8] === premiumTrialOffer) {
        let tmp20;
        let tmp24;
        let tmp23;
        let tmp28;
        let tmp27;
        if (cResult[9] === useTier0UpsellContent) {
          tmp20 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ThemeStore];
          const fn2 = function w() {
            return theme.theme;
          };
          cResult[11] = items2;
          cResult[12] = fn2;
          tmp24 = fn2;
          tmp23 = items2;
        } else {
          tmp23 = cResult[11];
          tmp24 = cResult[12];
        }
        const tmpResult14 = legacyProps(tmp2[37]);
        const stateFromStores1 = tmpResult14.useStateFromStores(tmp23, tmp24);
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [SelectedGuildStore];
          const fn3 = function z() {
            return guildId.getGuildId();
          };
          cResult[13] = fn3;
          cResult[14] = items3;
          tmp28 = items3;
          tmp27 = fn3;
        } else {
          tmp27 = cResult[13];
          tmp28 = cResult[14];
        }
        const tmpResult15 = legacyProps(tmp2[37]);
        const stateFromStores2 = tmpResult15.useStateFromStores(tmp28, tmp27);
        const tmp32 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
        if (cResult[15] === featureName) {
          if (cResult[16] === stateFromStores2) {
            if (cResult[17] === tmp32) {
              if (cResult[18] === stateFromStores1) {
                let tmp33;
                let tmp37;
                let tmp36;
                if (cResult[19] === stateFromStores) {
                  tmp33 = cResult[20];
                }
                const tmp35 = closure_22(tmp33)[featureName];
                let upsellType = tmp35;
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const items4 = [AccessibilityStore];
                  class Z {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  cResult[21] = items4;
                  cResult[22] = Z;
                  tmp37 = Z;
                  tmp36 = items4;
                } else {
                  tmp36 = cResult[21];
                  tmp37 = cResult[22];
                }
                const tmpResult16 = legacyProps(tmp2[37]);
                const stateFromStores3 = tmpResult16.useStateFromStores(tmp36, tmp37);
                const tmpResult17 = legacyProps(tmp2[21]);
                let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmpResult17.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
                if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
                  const tmpResult18 = legacyProps(tmp2[44]);
                  mobileEmojiPickerUpsellRestyleEnabledForFeature = tmpResult18.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
                }
                if (cResult[23] === analyticsLocations2) {
                  const tmp41 = cResult[24];
                  class Z {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  if (tmp41 === undefined) {
                    if (cResult[25] === tmp35.upsellType) {
                      let tmp44;
                      if (cResult[26] === useTier0UpsellContent) {
                        tmp44 = cResult[27];
                      }
                      if (cResult[28] === analyticsLocations2) {
                        if (cResult[29] === legacyProps) {
                          if (cResult[30] === tmp35) {
                            let tmp47;
                            let tmp54;
                            if (cResult[31] === useTier0UpsellContent) {
                              tmp47 = cResult[32];
                            }
                            const effect = onViewAllPerks.useEffect(tmp44, tmp47);
                            class Z {
                              constructor() {
                                return useReducedMotion.useReducedMotion;
                              }
                            }
                            ({ loading, onPress } = analyticsLocations2(tmp2[46])(useTier0UpsellContent, onViewAllPerks, tmp35.analyticsPage, undefined, tmp4));
                            analyticsLocations2(tmp2[46])(useTier0UpsellContent, onViewAllPerks, tmp35.analyticsPage, undefined, tmp4);
                            if (cResult[33] !== onViewAllPerks) {
                              function ne() {
                                const obj = ChatInputUtils;
                                obj.dismissKeyboard();
                                const obj2 = ActionSheetActionCreatorsDefault;
                                obj2.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
                                onViewAllPerks();
                              }
                              cResult[33] = onViewAllPerks;
                              class Z {
                                constructor() {
                                  return useReducedMotion.useReducedMotion;
                                }
                              }
                              cResult[34] = ne;
                              tmp54 = ne;
                            } else {
                              tmp54 = cResult[34];
                            }
                            if (null == tmp35) {
                              return null;
                            } else {
                              const ActionSheet = tmp(tmp2[48]).ActionSheet;
                              if (cResult[35] === tmp35) {
                                if (cResult[36] === tmp5) {
                                  let tmp56;
                                  let tmp60;
                                  if (cResult[37] === stateFromStores3) {
                                    tmp56 = cResult[38];
                                  }
                                  if (cResult[39] === tmp35.showBetaBadge) {
                                    let tmp59;
                                    if (cResult[40] === tmp5.betaTag) {
                                      tmp59 = cResult[41];
                                    }
                                    if (cResult[42] === tmp35.title) {
                                      let tmp63;
                                      if (cResult[43] === tmp5.text) {
                                        tmp63 = cResult[44];
                                      }
                                      if (cResult[45] === tmp5.description) {
                                        let tmp67;
                                        if (cResult[46] === tmp5.text) {
                                          tmp67 = cResult[47];
                                        }
                                        if (cResult[48] === tmp35.description) {
                                          let tmp68;
                                          if (cResult[49] === tmp67) {
                                            tmp68 = cResult[50];
                                          }
                                          if (cResult[51] === tmp5.textContainer) {
                                            if (cResult[52] === tmp59) {
                                              if (cResult[53] === tmp63) {
                                                let tmp72;
                                                let stringResult;
                                                if (cResult[54] === tmp68) {
                                                  tmp72 = cResult[55];
                                                }
                                                const buttonContainer = tmp5.buttonContainer;
                                                const Button = tmp(tmp2[51]).Button;
                                                class Z {
                                                  constructor() {
                                                    return useReducedMotion.useReducedMotion;
                                                  }
                                                }
                                                if (cResult[56] === tmp20) {
                                                  let tmp77;
                                                  if (cResult[57] === useTier0UpsellContent) {
                                                    tmp77 = cResult[58];
                                                  }
                                                  const tmp10Result = analyticsLocations2(tmp2[52]);
                                                  class Z {
                                                    constructor() {
                                                      return useReducedMotion.useReducedMotion;
                                                    }
                                                  }
                                                  if (cResult[59] === Button) {
                                                    if (cResult[60] === loading) {
                                                      if (cResult[61] === tmp76) {
                                                        if (cResult[62] === tmp77) {
                                                          if (cResult[63] === tmp10Result) {
                                                            let tmp80;
                                                            let tmp85;
                                                            if (cResult[64] === "primary") {
                                                              tmp80 = cResult[65];
                                                            }
                                                            const _Symbol4 = Symbol;
                                                            class Z {
                                                              constructor() {
                                                                return useReducedMotion.useReducedMotion;
                                                              }
                                                            }
                                                            if (cResult[67] !== tmp54) {
                                                              let obj2 = { variant: "secondary", text: tmp84, onPress: null };
                                                              class Z {
                                                                constructor() {
                                                                  return useReducedMotion.useReducedMotion;
                                                                }
                                                              }
                                                              const tmp87 = closure_18(legacyProps(tmp2[51]).Button, obj2);
                                                              cResult[67] = tmp54;
                                                              cResult[68] = tmp87;
                                                              tmp85 = tmp87;
                                                            } else {
                                                              tmp85 = cResult[68];
                                                            }
                                                            if (cResult[69] === upsellType) {
                                                              if (cResult[70] === tmp5.buttonContainer) {
                                                                if (cResult[71] === tmp80) {
                                                                  let tmp88;
                                                                  if (cResult[72] === tmp85) {
                                                                    tmp88 = cResult[73];
                                                                  }
                                                                  if (cResult[74] === upsellType) {
                                                                    if (cResult[75] === tmp56) {
                                                                      if (cResult[76] === tmp72) {
                                                                        let tmp91;
                                                                        if (cResult[77] === tmp88) {
                                                                          tmp91 = cResult[78];
                                                                        }
                                                                        if (cResult[79] === ActionSheet) {
                                                                          if (cResult[80] === onDismiss) {
                                                                            let tmp95;
                                                                            if (cResult[81] === tmp91) {
                                                                              tmp95 = cResult[82];
                                                                            }
                                                                            return tmp95;
                                                                          }
                                                                        }
                                                                        class Z {
                                                                          constructor() {
                                                                            return useReducedMotion.useReducedMotion;
                                                                          }
                                                                        }
                                                                        tmp97[1] = onDismiss;
                                                                        tmp97[2] = tmp91;
                                                                        const tmp98 = closure_18(ActionSheet, tmp97);
                                                                        cResult[79] = ActionSheet;
                                                                        cResult[80] = onDismiss;
                                                                        cResult[81] = tmp91;
                                                                        cResult[82] = tmp98;
                                                                        tmp95 = tmp98;
                                                                      }
                                                                    }
                                                                  }
                                                                  class Z {
                                                                    constructor() {
                                                                      return useReducedMotion.useReducedMotion;
                                                                    }
                                                                  }
                                                                  const items5 = [tmp56, tmp72, tmp88];
                                                                  tmp93[0] = items5;
                                                                  const tmp94 = closure_20(upsellType, tmp93);
                                                                  cResult[74] = upsellType;
                                                                  cResult[75] = tmp56;
                                                                  cResult[76] = tmp72;
                                                                  cResult[77] = tmp88;
                                                                  cResult[78] = tmp94;
                                                                  tmp91 = tmp94;
                                                                }
                                                              }
                                                            }
                                                            const obj3 = { style: buttonContainer, children: items6 };
                                                            items6 = [tmp80, tmp85];
                                                            const tmp90 = closure_20(upsellType, obj3);
                                                            cResult[69] = upsellType;
                                                            cResult[70] = tmp5.buttonContainer;
                                                            cResult[71] = tmp80;
                                                            cResult[72] = tmp85;
                                                            cResult[73] = tmp90;
                                                            tmp88 = tmp90;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj4 = { loading, onPress: tmp76, text: tmp77, icon: tmp10Result, variant: "primary" };
                                                  const tmp82 = closure_18(Button, obj4);
                                                  cResult[59] = Button;
                                                  cResult[60] = loading;
                                                  cResult[61] = tmp76;
                                                  cResult[62] = tmp77;
                                                  cResult[63] = tmp10Result;
                                                  cResult[64] = "primary";
                                                  cResult[65] = tmp82;
                                                  tmp80 = tmp82;
                                                }
                                                if (useTier0UpsellContent) {
                                                  const intl2 = tmp(tmp2[23]).intl;
                                                  stringResult = intl2.string(tmp(tmp2[23]).t.cM8bbx);
                                                } else {
                                                  stringResult = tmp20;
                                                  if (tmp20 == null) {
                                                    const intl = tmp(tmp2[23]).intl;
                                                    stringResult = intl.string(tmp(tmp2[23]).t["8x0jKT"]);
                                                  }
                                                }
                                                cResult[56] = tmp20;
                                                cResult[57] = useTier0UpsellContent;
                                                cResult[58] = stringResult;
                                                tmp77 = stringResult;
                                              }
                                            }
                                          }
                                          class Z {
                                            constructor() {
                                              return useReducedMotion.useReducedMotion;
                                            }
                                          }
                                          tmp74[0] = tmp5.textContainer;
                                          const items7 = [tmp59, tmp63, tmp68];
                                          tmp74[1] = items7;
                                          const tmp75 = closure_20(upsellType, tmp74);
                                          cResult[51] = tmp5.textContainer;
                                          cResult[52] = tmp59;
                                          cResult[53] = tmp63;
                                          cResult[54] = tmp68;
                                          cResult[55] = tmp75;
                                          tmp72 = tmp75;
                                        }
                                        class Z {
                                          constructor() {
                                            return useReducedMotion.useReducedMotion;
                                          }
                                        }
                                        tmp70[0] = tmp67;
                                        tmp70[2] = tmp35.description;
                                        const tmp71 = closure_18(legacyProps(tmp2[50]).Text, tmp70);
                                        cResult[48] = tmp35.description;
                                        cResult[49] = tmp67;
                                        cResult[50] = tmp71;
                                        tmp68 = tmp71;
                                      }
                                      const items8 = [, ];
                                      class Z {
                                        constructor() {
                                          return useReducedMotion.useReducedMotion;
                                        }
                                      }
                                      items8[1] = tmp5.description;
                                      cResult[45] = tmp5.description;
                                      cResult[46] = tmp5.text;
                                      cResult[47] = items8;
                                      tmp67 = items8;
                                    }
                                    class Z {
                                      constructor() {
                                        return useReducedMotion.useReducedMotion;
                                      }
                                    }
                                    tmp65[0] = tmp5.text;
                                    tmp65[3] = tmp35.title;
                                    const tmp66 = closure_18(legacyProps(tmp2[50]).Text, tmp65);
                                    cResult[42] = tmp35.title;
                                    cResult[43] = tmp5.text;
                                    cResult[44] = tmp66;
                                    tmp63 = tmp66;
                                  }
                                  class Z {
                                    constructor() {
                                      return useReducedMotion.useReducedMotion;
                                    }
                                  }
                                  if (true === tmp35.showBetaBadge) {
                                    const obj5 = { size: null, gradient: true, style: tmp5.betaTag };
                                    const tmp10Result2 = analyticsLocations2(tmp2[49]);
                                    class Z {
                                      constructor() {
                                        return useReducedMotion.useReducedMotion;
                                      }
                                    }
                                    tmp60 = closure_18(tmp10Result2, obj5);
                                  }
                                  cResult[39] = tmp35.showBetaBadge;
                                  cResult[40] = tmp5.betaTag;
                                  cResult[41] = tmp60;
                                  tmp59 = tmp60;
                                }
                              }
                              class Z {
                                constructor() {
                                  return useReducedMotion.useReducedMotion;
                                }
                              }
                              const obj6 = { pageConfig: tmp35, styles: tmp5, useReducedMotion: stateFromStores3 };
                              const tmp58 = closure_18(closure_24, obj6);
                              cResult[35] = tmp35;
                              cResult[36] = tmp5;
                              cResult[37] = stateFromStores3;
                              cResult[38] = tmp58;
                              tmp56 = tmp58;
                            }
                          }
                        }
                      }
                      const items9 = [, , , ];
                      class Z {
                        constructor() {
                          return useReducedMotion.useReducedMotion;
                        }
                      }
                      items9[1] = analyticsLocations2;
                      items9[2] = useTier0UpsellContent;
                      items9[3] = legacyProps;
                      cResult[28] = analyticsLocations2;
                      cResult[29] = legacyProps;
                      cResult[30] = tmp35;
                      cResult[31] = useTier0UpsellContent;
                      cResult[32] = items9;
                      tmp47 = items9;
                    }
                  }
                }
                cResult[23] = analyticsLocations2;
                let analyticsProperties;
                if (legacyProps != null) {
                  analyticsProperties = legacyProps.analyticsProperties;
                }
                function ee() {
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
                }
                cResult[24] = analyticsProperties;
                cResult[25] = tmp35.upsellType;
                cResult[26] = useTier0UpsellContent;
                cResult[27] = ee;
                tmp44 = ee;
              }
            }
          }
        }
        const obj7 = { user: stateFromStores, premiumType: tmp32, theme: stateFromStores1, guildId: stateFromStores2, featureName };
        cResult[15] = featureName;
        cResult[16] = stateFromStores2;
        cResult[17] = tmp32;
        cResult[18] = stateFromStores1;
        cResult[19] = stateFromStores;
        cResult[20] = obj7;
        tmp33 = obj7;
      }
    }
    let mobileRoadblockButtonText = null;
    if (!useTier0UpsellContent) {
      const obj8 = { subscriptionTier: null, trialOffer: premiumTrialOffer, discountOffer: premiumDiscountOffer };
      const tmpResult19 = legacyProps(tmp2[43]);
      class Z {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      mobileRoadblockButtonText = tmpResult19.getMobileRoadblockButtonText(obj8);
    }
    cResult[7] = premiumDiscountOffer;
    cResult[8] = premiumTrialOffer;
    cResult[9] = useTier0UpsellContent;
    cResult[10] = mobileRoadblockButtonText;
    tmp20 = mobileRoadblockButtonText;
  }
  let initialUpsellKey1;
  if (legacyProps != null) {
    initialUpsellKey1 = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey1 == null) {
    const tmpResult20 = legacyProps(tmp2[39]);
    initialUpsellKey1 = tmpResult20.getUpsellType(featureName);
  }
  cResult[4] = featureName;
  let initialUpsellKey2;
  if (legacyProps != null) {
    initialUpsellKey2 = legacyProps.initialUpsellKey;
  }
  cResult[5] = initialUpsellKey2;
  cResult[6] = initialUpsellKey1;
  tmp14 = initialUpsellKey1;
}) : (function PremiumUpsellActionSheet(analyticsLocations) {
  let currentUser;
  let featureName;
  let intl3;
  let items6;
  let items7;
  let items8;
  let legacyProps;
  let obj12;
  let str;
  let theme;
  let tmp30;
  let useReducedMotion;
  ({ featureName, legacyProps } = analyticsLocations);
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  analyticsLocations = undefined;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let upsellType;
  const onDismiss = analyticsLocations.onDismiss;
  const tmp = closure_21();
  const tmp2 = legacyProps;
  let obj = legacyProps(useTier0UpsellContent[37]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations = analyticsLocations(useTier0UpsellContent[38])(analyticsLocations1).analyticsLocations;
  let initialUpsellKey;
  const usePremiumUpsellConfig = legacyProps(useTier0UpsellContent[40]).usePremiumUpsellConfig;
  const tmp6 = legacyProps(useTier0UpsellContent[40]);
  const tmp7 = analyticsLocations1;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    const tmp2Result = tmp2(useTier0UpsellContent[39]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = usePremiumUpsellConfig(initialUpsellKey, analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  const tmp2Result9 = tmp2(useTier0UpsellContent[41]);
  const premiumTrialOffer = tmp2Result9.usePremiumTrialOffer();
  tmp2(useTier0UpsellContent[42]);
  let mobileRoadblockButtonText = null;
  if (!useTier0UpsellContent) {
    let obj2 = { subscriptionTier: TIER_2.TIER_2, trialOffer: premiumTrialOffer, discountOffer: tmp12 };
    const tmp2Result11 = tmp2(useTier0UpsellContent[43]);
    mobileRoadblockButtonText = tmp2Result11.getMobileRoadblockButtonText(obj2);
  }
  const items1 = [ThemeStore];
  const tmp2Result12 = tmp2(useTier0UpsellContent[37]);
  const stateFromStores1 = tmp2Result12.useStateFromStores(items1, () => theme.theme);
  const items2 = [SelectedGuildStore];
  const tmp2Result13 = tmp2(useTier0UpsellContent[37]);
  const obj3 = { user: stateFromStores, premiumType: useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2, theme: stateFromStores1, guildId: tmp2Result13.useStateFromStores(items2, () => guildId.getGuildId()), featureName };
  const tmp17 = closure_22(obj3)[featureName];
  upsellType = tmp17;
  const items3 = [AccessibilityStore];
  const tmp2Result14 = tmp2(useTier0UpsellContent[37]);
  const stateFromStores2 = tmp2Result14.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result15 = tmp2(useTier0UpsellContent[21]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2Result15.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    const tmp2Result16 = tmp2(useTier0UpsellContent[44]);
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2Result16.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  }
  const items4 = [tmp17, analyticsLocations, useTier0UpsellContent, legacyProps];
  const effect = onViewAllPerks.useEffect(() => {
    let obj2;
    let analyticsProperties;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_UPSELL_VIEWED = map1.PREMIUM_UPSELL_VIEWED;
    AnalyticsUtilsDefault;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj = { type: upsellType, location: location, location_stack: analyticsLocations, sku_id: obj2.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? c10.TIER_0 : c10.TIER_2), voice_guild_id: guildId };
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
  }, items4);
  const tmp21 = analyticsLocations(useTier0UpsellContent[46])(useTier0UpsellContent, onViewAllPerks, tmp17.analyticsPage, undefined, tmp7);
  const loading = tmp21.loading;
  [][0] = onViewAllPerks;
  const onPress = tmp21.onPress;
  let tmp24Result2 = null;
  if (null != tmp17) {
    const obj4 = { startExpanded: true, onDismiss, children: closure_20(upsellType, obj12) };
    const obj5 = { pageConfig: tmp17, styles: tmp, useReducedMotion: stateFromStores2 };
    const ActionSheet = tmp2(tmp3[48]).ActionSheet;
    const items5 = [closure_18(closure_24, obj5), , ];
    let tmp24Result = null;
    const obj6 = { style: tmp.textContainer, children: items6 };
    if (true === tmp17.showBetaBadge) {
      const obj7 = { size: tmp2(useTier0UpsellContent[49]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      const tmp5Result = analyticsLocations(useTier0UpsellContent[49]);
      tmp24Result = tmp24(tmp5Result, obj7);
    }
    items6 = [tmp24Result, , ];
    const obj8 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: tmp17.title };
    items6[1] = closure_18(tmp2(useTier0UpsellContent[50]).Text, obj8);
    const obj9 = { style: items7, variant: "text-sm/normal", children: tmp17.description };
    items7 = [, ];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    items6[2] = closure_18(tmp2(useTier0UpsellContent[50]).Text, obj9);
    items5[1] = closure_20(upsellType, obj6);
    const obj10 = { style: tmp.buttonContainer, children: items8 };
    const obj11 = { loading, onPress: tmp30, text: mobileRoadblockButtonText, icon: analyticsLocations(useTier0UpsellContent[52]), variant: str };
    tmp30 = null;
    const Button = tmp2(tmp3[51]).Button;
    if (!loading) {
      tmp30 = onPress;
    }
    if (useTier0UpsellContent) {
      const intl2 = tmp2(tmp3[23]).intl;
      mobileRoadblockButtonText = intl2.string(tmp2(tmp3[23]).t.cM8bbx);
    } else if (mobileRoadblockButtonText == null) {
      const intl = tmp2(tmp3[23]).intl;
      mobileRoadblockButtonText = intl.string(tmp2(tmp3[23]).t["8x0jKT"]);
    }
    str = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str2 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str2 = "experimental_premium-basic";
      }
      str = str2;
    }
    obj12 = { children: items5 };
    items8 = [closure_18(Button, obj11), ];
    const obj13 = { variant: "secondary", text: intl3.string(tmp2(useTier0UpsellContent[23]).t.PcTCB7), onPress: tmp22 };
    const Button2 = tmp2(tmp3[51]).Button;
    intl3 = tmp2(tmp3[23]).intl;
    items8[1] = closure_18(Button2, obj13);
    items5[2] = closure_20(upsellType, obj10);
    tmp24Result2 = tmp24(ActionSheet, obj4);
  }
  return tmp24Result2;
});
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default tmp6;
