// Module ID: 7275
// Function ID: 7276
// Name: PremiumUpsellActionSheet
// Dependencies: [19, 17, 4826, 1194, 4860, 4657, 1378, 1380, 1086, 4884, 7276, 7270, 21, 4837, 588, 558, 576, 4535, 4491, 7277, 5475, 5447, 7278, 7279, 7281, 7282, 1127, 7284, 7286, 7287, 4801, 7274, 7288, 7289, 12871, 12872, 11585, 11594, 12875, 1106, 1370, 8268, 5896, 5292, 504, 6584, 9417, 8611, 6871, 8668, 8619, 1253, 9418, 4703, 6624, 12876, 4833, 5282, 7499, 2]

// Module 7275 (PremiumUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import PremiumUtils from "PremiumUtils" /* 4491 */;
import ChatInputUtils from "ChatInputUtils" /* 4703 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4884 */;
import LinearGradientDefault from "LinearGradient" /* 5292 */;
import FastImageDefault from "FastImage" /* 5896 */;
import ScheduledMessagesConstants from "ScheduledMessagesConstants" /* 7270 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 7274 */;
import AssetRegistryDefault from "AssetRegistry" /* 7286 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7287 */;
import showForLaterModal2 from "showForLaterModal" /* 7288 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7289 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11594 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12875 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import UserStore from "UserStore" /* 1378 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import Constants from "Constants" /* 1086 */;
import SavedMessagesConstants from "SavedMessagesConstants" /* 7276 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

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
const APNGPlayer = tmp(8268);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let featureName;
  let flag;
  let forLaterLimit;
  let guildId;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl19;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj11;
  let obj26;
  let obj6;
  let obj7;
  let premiumType;
  let subfeatureName;
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
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp31;
  let tmp36;
  let tmp37;
  let tmp40;
  let tmp42;
  let tmp45;
  let tmp50;
  let tmp7;
  let tmp8;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(76);
  ({ premiumType, guildId, featureName, subfeatureName, theme } = arg0);
  let obj2 = require("useToken");
  const token = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const obj3 = require("useToken");
  const token1 = obj3.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  let str = "dark";
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  if (cResult[0] === featureName) {
    if (cResult[1] === guildId) {
      if (cResult[2] === str) {
        if (cResult[3] === premiumType) {
          if (cResult[4] === subfeatureName) {
            _require = cResult[5];
            tmp8 = cResult[6];
            tmp9 = cResult[7];
            tmp10 = cResult[8];
            tmp11 = cResult[9];
            tmp12 = cResult[10];
            tmp13 = cResult[11];
            tmp14 = cResult[12];
            tmp15 = cResult[13];
            tmp16 = cResult[14];
            tmp17 = cResult[15];
            flag = cResult[16];
            tmp18 = cResult[17];
            tmp19 = cResult[18];
            tmp20 = cResult[19];
            tmp21 = cResult[20];
            tmp22 = cResult[21];
            tmp23 = cResult[22];
            tmp24 = cResult[23];
          }
          const tmp4Result = importDefault(tmp7 ? 12871 : 12872);
          if (cResult[46] === tmp8) {
            if (cResult[47] === tmp4Result) {
              if (cResult[48] === flag) {
                let tmp66;
                let tmp70;
                let tmp73;
                let tmp80;
                let tmp79;
                if (cResult[49] === tmp18) {
                  tmp66 = cResult[50];
                }
                const _Symbol4 = Symbol;
                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl18 = tmp(1127).intl;
                  const obj4 = { premiumMax };
                  const formatToPlainStringResult = intl18.formatToPlainString(tmp(1127).t.GNoaxo, obj4);
                  cResult[51] = formatToPlainStringResult;
                  tmp70 = formatToPlainStringResult;
                } else {
                  tmp70 = cResult[51];
                }
                const _Symbol5 = Symbol;
                if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { title: tmp70, showBetaBadge: true, description: closure_20(closure_21, obj6), analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, image: AssetRegistryDefault3 };
                  obj6 = { children: intl19.format(tmp(1127).t["1kFyto"], obj7) };
                  intl19 = tmp(1127).intl;
                  obj7 = {
                    premiumMax,
                    onClick() {
                                      const obj = ActionSheetActionCreatorsDefault;
                                      obj.hideActionSheet(closure_0(dependencyMap[31]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
                                      const obj2 = closure_0(dependencyMap[36]);
                                      const result = obj2.showScheduledMessagesModal();
                                    }
                  };
                  cResult[52] = obj5;
                  tmp73 = obj5;
                } else {
                  tmp73 = cResult[52];
                }
                const _Symbol6 = Symbol;
                if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl20 = tmp(1127).intl;
                  const stringResult = intl20.string(tmp(1127).t.ETZQx5);
                  const intl21 = tmp(1127).intl;
                  const obj8 = { fps: ApplicationStreamFPS.FPS_60 };
                  const formatToPlainStringResult1 = intl21.formatToPlainString(tmp(1127).t["4nlpei"], obj8);
                  cResult[53] = stringResult;
                  cResult[54] = formatToPlainStringResult1;
                  tmp80 = formatToPlainStringResult1;
                  tmp79 = stringResult;
                } else {
                  tmp79 = cResult[53];
                  tmp80 = cResult[54];
                }
                if (cResult[55] === token1) {
                  let tmp84;
                  if (cResult[56] === token) {
                    tmp84 = cResult[57];
                  }
                  if (cResult[58] === tmp9) {
                    if (cResult[59] === tmp10) {
                      if (cResult[60] === tmp11) {
                        if (cResult[61] === tmp12) {
                          if (cResult[62] === tmp13) {
                            if (cResult[63] === tmp14) {
                              if (cResult[64] === tmp15) {
                                if (cResult[65] === tmp16) {
                                  if (cResult[66] === tmp17) {
                                    if (cResult[67] === tmp66) {
                                      if (cResult[68] === tmp84) {
                                        if (cResult[69] === tmp19) {
                                          if (cResult[70] === tmp20) {
                                            if (cResult[71] === tmp21) {
                                              if (cResult[72] === tmp22) {
                                                if (cResult[73] === tmp23) {
                                                  let tmp87;
                                                  if (cResult[74] === tmp24) {
                                                    tmp87 = cResult[75];
                                                  }
                                                  return tmp87;
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
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj9 = {};
                  obj9[tmp19] = tmp20;
                  obj9[tmp21] = tmp22;
                  obj9[tmp23] = tmp24;
                  obj9[tmp9] = tmp10;
                  obj9[tmp11] = tmp12;
                  obj9[tmp13] = tmp14;
                  obj9[tmp15] = tmp16;
                  obj9[tmp17] = tmp66;
                  obj9[tmp(7277).EntitlementFeatureNames.SCHEDULED_MESSAGES] = tmp73;
                  obj9[tmp(7277).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = tmp84;
                  cResult[58] = tmp9;
                  cResult[59] = tmp10;
                  cResult[60] = tmp11;
                  cResult[61] = tmp12;
                  cResult[62] = tmp13;
                  cResult[63] = tmp14;
                  cResult[64] = tmp15;
                  cResult[65] = tmp16;
                  cResult[66] = tmp17;
                  cResult[67] = tmp66;
                  cResult[68] = tmp84;
                  cResult[69] = tmp19;
                  cResult[70] = tmp20;
                  cResult[71] = tmp21;
                  cResult[72] = tmp22;
                  cResult[73] = tmp23;
                  cResult[74] = tmp24;
                  cResult[75] = obj9;
                  tmp87 = obj9;
                }
                const obj10 = { title: tmp79, description: tmp80, analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: AssetRegistryDefault4, imageGradientBackground: obj11 };
                obj11 = { colors: items, start: tmp(1106).HorizontalGradient.START, end: tmp(1106).HorizontalGradient.END };
                items = [token, token1];
                cResult[55] = token1;
                cResult[56] = token;
                cResult[57] = obj10;
                tmp84 = obj10;
              }
            }
          }
          const obj12 = { title: tmp8, showBetaBadge: flag, description: tmp18, analyticsPage: constants3.PREMIUM_UPSELL_FOR_LATER, upsellType: constants.FOR_LATER_MODAL_UPSELL, image: tmp4Result };
          cResult[46] = tmp8;
          cResult[47] = tmp4Result;
          cResult[48] = flag;
          cResult[49] = tmp18;
          cResult[50] = obj12;
          tmp66 = obj12;
        }
      }
    }
  }
  const tmpResult = tmp(4491);
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === tmp(7277).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const getEffectiveUploadLimit = tmp(5475).getEffectiveUploadLimit;
    tmp(5475);
    const tmpResult7 = tmp(5447);
    effectiveUploadLimit = getEffectiveUploadLimit(tmpResult7.maxFileSize(guildId));
  }
  const tmp28 = subfeatureName === tmp(7278).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  _require = tmp28;
  if (subfeatureName === tmp(7278).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const tmpResult8 = tmp(7279);
    forLaterLimit = tmpResult8.getForLaterLimit("native.PremiumUpsellActionSheet", tmp28);
  }
  const tmp30 = tmp28 ? closure_18 : closure_17;
  if (cResult[24] !== featureName) {
    let tmp32;
    const tmpResult9 = tmp(7281);
    if (tmpResult9.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
      tmp32 = closure_20(tmp(7282).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
    }
    cResult[24] = featureName;
    cResult[25] = tmp32;
    tmp31 = tmp32;
  } else {
    tmp31 = cResult[25];
  }
  const SOUNDBOARD_EVERYWHERE = tmp(7277).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  const obj13 = { title: intl.string(tmp(1127).t.jGDYF0), description: intl2.formatToPlainString(tmp(1127).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE, upsellType: constants.SOUNDBOARD_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" } };
  intl = tmp(1127).intl;
  intl2 = tmp(1127).intl;
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" });
  const EMOJIS_EVERYWHERE = tmp(7277).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  const obj15 = { title: intl3.string(tmp(1127).t.zY5PPb), description: intl4.formatToPlainString(tmp(1127).t["uukIF/"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE, upsellType: constants.EMOJI_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp31 };
  intl3 = tmp(1127).intl;
  intl4 = tmp(1127).intl;
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const STICKERS_EVERYWHERE = tmp(7277).EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1127).intl;
    const stringResult1 = intl5.string(tmp(1127).t.Eukdgl);
    const intl6 = tmp(1127).intl;
    const stringResult2 = intl6.string(tmp(1127).t.sMmd7s);
    cResult[26] = stringResult1;
    cResult[27] = stringResult2;
    tmp37 = stringResult2;
    tmp36 = stringResult1;
  } else {
    tmp36 = cResult[26];
    tmp37 = cResult[27];
  }
  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
    const obj17 = { title: tmp36, description: tmp37, analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: closure_20(tmp(7284).StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
    cResult[28] = obj17;
    tmp40 = obj17;
  } else {
    tmp40 = cResult[28];
  }
  const INCREASED_FILE_UPLOAD_SIZE = tmp(7277).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
    const intl7 = tmp(1127).intl;
    const stringResult3 = intl7.string(tmp(1127).t["G+pngo"]);
    cResult[29] = stringResult3;
    tmp42 = stringResult3;
  } else {
    tmp42 = cResult[29];
  }
  const tmpResult10 = tmp(5447);
  let result = tmpResult10.fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit });
  if (cResult[30] !== result) {
    const obj18 = { children: result };
    const tmp48 = closure_20(closure_21, obj18);
    cResult[30] = result;
    cResult[31] = tmp48;
    tmp45 = tmp48;
  } else {
    tmp45 = cResult[31];
  }
  const combined = "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png";
  if (cResult[32] !== combined) {
    const obj19 = { uri: combined };
    cResult[32] = combined;
    cResult[33] = obj19;
    tmp50 = obj19;
  } else {
    tmp50 = cResult[33];
  }
  if (cResult[34] === tmp45) {
    let tmp51;
    let tmp52;
    let tmp56;
    if (cResult[35] === tmp50) {
      tmp51 = cResult[36];
    }
    const ANIMATED_EMOJIS = tmp(7277).EntitlementFeatureNames.ANIMATED_EMOJIS;
    const _Symbol = Symbol;
    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
      const intl8 = tmp(1127).intl;
      const stringResult4 = intl8.string(tmp(1127).t.SI7R9I);
      cResult[37] = stringResult4;
      tmp52 = stringResult4;
    } else {
      tmp52 = cResult[37];
    }
    const intl9 = tmp(1127).intl;
    const obj20 = { nitroTierName: premiumTypeDisplayName };
    const formatToPlainStringResult2 = intl9.formatToPlainString(tmp(1127).t.uGkSY2, obj20);
    const _HermesInternal = HermesInternal;
    const combined1 = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png";
    if (cResult[38] !== combined1) {
      const obj21 = { uri: combined1 };
      cResult[38] = combined1;
      cResult[39] = obj21;
      tmp56 = obj21;
    } else {
      tmp56 = cResult[39];
    }
    if (cResult[40] === tmp31) {
      if (cResult[41] === formatToPlainStringResult2) {
        let tmp57;
        let tmp58;
        let tmp59;
        let stringResult5;
        let stringResult6;
        if (cResult[42] === tmp56) {
          tmp57 = cResult[43];
        }
        const CLIENT_THEMES = tmp(7277).EntitlementFeatureNames.CLIENT_THEMES;
        const _Symbol2 = Symbol;
        if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
          const obj22 = { title: intl10.string(tmp(1127).t.p0I2Bk), description: intl11.string(tmp(1127).t.jBqF2k), analyticsPage: constants3.PREMIUM_UPSELL_CLIENT_THEMES, upsellType: constants.CLIENT_THEMES_UPSELL, image: AssetRegistryDefault };
          intl10 = tmp(1127).intl;
          intl11 = tmp(1127).intl;
          cResult[44] = obj22;
          tmp58 = obj22;
        } else {
          tmp58 = cResult[44];
        }
        const APP_ICONS = tmp(7277).EntitlementFeatureNames.APP_ICONS;
        const _Symbol3 = Symbol;
        if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
          const obj23 = { title: intl12.string(tmp(1127).t.TYFwcy), description: intl13.string(tmp(1127).t.HDt8ip), analyticsPage: constants3.PREMIUM_UPSELL_APP_ICONS, upsellType: constants.APP_ICON_UPSELL, image: AssetRegistryDefault2 };
          intl12 = tmp(1127).intl;
          intl13 = tmp(1127).intl;
          cResult[45] = obj23;
          tmp59 = obj23;
        } else {
          tmp59 = cResult[45];
        }
        const SAVED_MESSAGES = tmp(7277).EntitlementFeatureNames.SAVED_MESSAGES;
        if (null == forLaterLimit) {
          const intl15 = tmp(1127).intl;
          stringResult5 = intl15.string(tmp(1127).t.YXk6N7);
        } else {
          const intl14 = tmp(1127).intl;
          const formatToPlainString = intl14.formatToPlainString;
          const t = tmp(1127).t;
          const obj24 = { premiumMax: tmp30 };
          stringResult5 = formatToPlainString(tmp28 ? t["cpj9o/"] : t.Oxm3Sq, obj24);
        }
        if (null == forLaterLimit) {
          const intl17 = tmp(1127).intl;
          stringResult6 = intl17.string(tmp(1127).t["m/HzW8"]);
        } else {
          const intl16 = tmp(1127).intl;
          const format = intl16.format;
          const t2 = tmp(1127).t;
          const obj25 = { children: format(tmp28 ? t2.NRF0Wh : t2.o5OLyw, obj26) };
          obj26 = {
            max: forLaterLimit,
            premiumMax: tmp30,
            onClick() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
                      const showForLaterModal = showForLaterModal2.showForLaterModal;
                      showForLaterModal2;
                      const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
                      showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
                    }
          };
          stringResult6 = closure_20(closure_21, obj25);
        }
        cResult[0] = featureName;
        cResult[1] = guildId;
        cResult[2] = str;
        cResult[3] = premiumType;
        cResult[4] = subfeatureName;
        cResult[5] = tmp28;
        cResult[6] = stringResult5;
        cResult[7] = INCREASED_FILE_UPLOAD_SIZE;
        cResult[8] = tmp51;
        cResult[9] = ANIMATED_EMOJIS;
        cResult[10] = tmp57;
        cResult[11] = CLIENT_THEMES;
        cResult[12] = tmp58;
        cResult[13] = APP_ICONS;
        cResult[14] = tmp59;
        cResult[15] = SAVED_MESSAGES;
        cResult[16] = true;
        cResult[17] = stringResult6;
        cResult[18] = SOUNDBOARD_EVERYWHERE;
        cResult[19] = obj13;
        cResult[20] = EMOJIS_EVERYWHERE;
        cResult[21] = obj15;
        cResult[22] = STICKERS_EVERYWHERE;
        cResult[23] = tmp40;
        tmp18 = stringResult6;
        tmp24 = tmp40;
        tmp23 = STICKERS_EVERYWHERE;
        tmp22 = obj15;
        tmp21 = EMOJIS_EVERYWHERE;
        tmp20 = obj13;
        tmp19 = SOUNDBOARD_EVERYWHERE;
        flag = true;
        tmp17 = SAVED_MESSAGES;
        tmp16 = tmp59;
        tmp15 = APP_ICONS;
        tmp14 = tmp58;
        tmp13 = CLIENT_THEMES;
        tmp12 = tmp57;
        tmp11 = ANIMATED_EMOJIS;
        tmp10 = tmp51;
        tmp9 = INCREASED_FILE_UPLOAD_SIZE;
        tmp8 = stringResult5;
        tmp7 = tmp28;
      }
    }
    const obj27 = { title: tmp52, description: formatToPlainStringResult2, analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, image: tmp56, illustration: tmp31 };
    cResult[40] = tmp31;
    cResult[41] = formatToPlainStringResult2;
    cResult[42] = tmp56;
    cResult[43] = obj27;
    tmp57 = obj27;
  }
  const obj28 = { title: tmp42, description: tmp45, analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: tmp50 };
  cResult[34] = tmp45;
  cResult[35] = tmp50;
  cResult[36] = obj28;
  tmp51 = obj28;
}) : ((arg0) => {
  let closure_0;
  let featureName;
  let forLaterLimit;
  let guildId;
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
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let obj10;
  let obj19;
  let obj21;
  let obj22;
  let obj23;
  let obj25;
  let obj26;
  let premiumType;
  let stringResult;
  let stringResult1;
  let subfeatureName;
  let theme;
  let tmpResult10;
  ({ guildId, featureName, subfeatureName } = arg0);
  _require = undefined;
  const tmp = _require;
  ({ premiumType, theme } = arg0);
  let obj = require("useToken");
  const token = obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  let obj2 = require("useToken");
  let str = "dark";
  const token1 = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  const tmpResult = tmp(4491);
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === tmp(7277).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const getEffectiveUploadLimit = tmp(5475).getEffectiveUploadLimit;
    tmp(5475);
    const tmpResult7 = tmp(5447);
    effectiveUploadLimit = getEffectiveUploadLimit(tmpResult7.maxFileSize(guildId));
  }
  const tmp9 = subfeatureName === tmp(7278).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  _require = tmp9;
  if (subfeatureName === tmp(7278).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const tmpResult8 = tmp(7279);
    forLaterLimit = tmpResult8.getForLaterLimit("native.PremiumUpsellActionSheet", tmp9);
  }
  const tmp11 = tmp9 ? closure_18 : closure_17;
  let tmp12;
  const tmpResult9 = tmp(7281);
  if (tmpResult9.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
    tmp12 = closure_20(tmp(7282).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
  }
  const obj3 = {};
  const obj4 = { title: intl.string(tmp(1127).t.jGDYF0), description: intl2.formatToPlainString(tmp(1127).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE, upsellType: constants.SOUNDBOARD_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" } };
  const SOUNDBOARD_EVERYWHERE = tmp(7277).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  intl = tmp(1127).intl;
  intl2 = tmp(1127).intl;
  obj3[SOUNDBOARD_EVERYWHERE] = obj4;
  const obj6 = { title: intl3.string(tmp(1127).t.zY5PPb), description: intl4.formatToPlainString(tmp(1127).t["uukIF/"], { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE, upsellType: constants.EMOJI_EVERYWHERE_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp12 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" });
  const EMOJIS_EVERYWHERE = tmp(7277).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  intl3 = tmp(1127).intl;
  intl4 = tmp(1127).intl;
  obj3[EMOJIS_EVERYWHERE] = obj6;
  const obj8 = { title: intl5.string(tmp(1127).t.Eukdgl), description: intl6.string(tmp(1127).t.sMmd7s), analyticsPage: constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: constants.STICKERS_EVERYWHERE_UPSELL, illustration: closure_20(tmp(7284).StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const STICKERS_EVERYWHERE = tmp(7277).EntitlementFeatureNames.STICKERS_EVERYWHERE;
  intl5 = tmp(1127).intl;
  intl6 = tmp(1127).intl;
  obj3[STICKERS_EVERYWHERE] = obj8;
  const obj9 = { title: intl7.string(tmp(1127).t["G+pngo"]), description: closure_20(closure_21, obj10), analyticsPage: constants3.PREMIUM_UPSELL_FILE_UPLOAD, upsellType: constants.LARGER_FILE_UPLOAD_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" } };
  const INCREASED_FILE_UPLOAD_SIZE = tmp(7277).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  intl7 = tmp(1127).intl;
  obj10 = { children: tmpResult10.fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit }) };
  obj3[INCREASED_FILE_UPLOAD_SIZE] = obj9;
  tmpResult10 = tmp(5447);
  const obj12 = { title: intl8.string(tmp(1127).t.SI7R9I), description: intl9.formatToPlainString(tmp(1127).t.uGkSY2, { nitroTierName: premiumTypeDisplayName }), analyticsPage: constants3.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: constants.ANIMATED_EMOJI_UPSELL, image: { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" }, illustration: tmp12 };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" });
  const ANIMATED_EMOJIS = tmp(7277).EntitlementFeatureNames.ANIMATED_EMOJIS;
  intl8 = tmp(1127).intl;
  intl9 = tmp(1127).intl;
  obj3[ANIMATED_EMOJIS] = obj12;
  const obj14 = { title: intl10.string(tmp(1127).t.p0I2Bk), description: intl11.string(tmp(1127).t.jBqF2k), analyticsPage: constants3.PREMIUM_UPSELL_CLIENT_THEMES, upsellType: constants.CLIENT_THEMES_UPSELL, image: AssetRegistryDefault };
  ({ uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" });
  const CLIENT_THEMES = tmp(7277).EntitlementFeatureNames.CLIENT_THEMES;
  intl10 = tmp(1127).intl;
  intl11 = tmp(1127).intl;
  obj3[CLIENT_THEMES] = obj14;
  const obj15 = { title: intl12.string(tmp(1127).t.TYFwcy), description: intl13.string(tmp(1127).t.HDt8ip), analyticsPage: constants3.PREMIUM_UPSELL_APP_ICONS, upsellType: constants.APP_ICON_UPSELL, image: AssetRegistryDefault2 };
  const APP_ICONS = tmp(7277).EntitlementFeatureNames.APP_ICONS;
  intl12 = tmp(1127).intl;
  intl13 = tmp(1127).intl;
  obj3[APP_ICONS] = obj15;
  const SAVED_MESSAGES = tmp(7277).EntitlementFeatureNames.SAVED_MESSAGES;
  if (null == forLaterLimit) {
    const intl15 = tmp(1127).intl;
    stringResult = intl15.string(tmp(1127).t.YXk6N7);
  } else {
    const intl14 = tmp(1127).intl;
    const formatToPlainString = intl14.formatToPlainString;
    const t = tmp(1127).t;
    const obj16 = { premiumMax: tmp11 };
    stringResult = formatToPlainString(tmp9 ? t["cpj9o/"] : t.Oxm3Sq, obj16);
  }
  const obj17 = { title: stringResult, showBetaBadge: true, description: stringResult1, analyticsPage: constants3.PREMIUM_UPSELL_FOR_LATER, upsellType: constants.FOR_LATER_MODAL_UPSELL, image: importDefault(tmp9 ? 12871 : 12872) };
  if (null == forLaterLimit) {
    const intl17 = tmp(1127).intl;
    stringResult1 = intl17.string(tmp(1127).t["m/HzW8"]);
  } else {
    const intl16 = tmp(1127).intl;
    const format = intl16.format;
    const t2 = tmp(1127).t;
    const obj18 = { children: format(tmp9 ? t2.NRF0Wh : t2.o5OLyw, obj19) };
    obj19 = {
      max: forLaterLimit,
      premiumMax: tmp11,
      onClick() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
          const showForLaterModal = showForLaterModal2.showForLaterModal;
          showForLaterModal2;
          const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
          showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
        }
    };
    stringResult1 = tmp16(tmp17, obj18);
  }
  obj3[SAVED_MESSAGES] = obj17;
  const obj20 = { title: intl18.formatToPlainString(tmp(1127).t.GNoaxo, obj21), showBetaBadge: true, description: closure_20(closure_21, obj22), analyticsPage: constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES, upsellType: constants.SCHEDULED_MESSAGES_MODAL_UPSELL, image: AssetRegistryDefault3 };
  const SCHEDULED_MESSAGES = tmp(7277).EntitlementFeatureNames.SCHEDULED_MESSAGES;
  intl18 = tmp(1127).intl;
  obj21 = { premiumMax };
  obj22 = { children: intl19.format(tmp(1127).t["1kFyto"], obj23) };
  intl19 = tmp(1127).intl;
  obj23 = {
    premiumMax,
    onClick() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_0(dependencyMap[31]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj2 = closure_0(dependencyMap[36]);
      const result = obj2.showScheduledMessagesModal();
    }
  };
  obj3[SCHEDULED_MESSAGES] = obj20;
  const obj24 = { title: intl20.string(tmp(1127).t.ETZQx5), description: intl21.formatToPlainString(tmp(1127).t["4nlpei"], obj25), analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: AssetRegistryDefault4, imageGradientBackground: obj26 };
  const STREAM_HIGH_QUALITY = tmp(7277).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
  intl20 = tmp(1127).intl;
  intl21 = tmp(1127).intl;
  obj25 = { fps: ApplicationStreamFPS.FPS_60 };
  obj26 = { colors: items, start: tmp(1106).HorizontalGradient.START, end: tmp(1106).HorizontalGradient.END };
  items = [token, token1];
  obj3[STREAM_HIGH_QUALITY] = obj24;
  return obj3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
        const tmp7 = closure_20(APNGPlayer.APNGPlayer, obj3);
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
  const tmp10 = closure_20(FastImageDefault, { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false });
  cResult[3] = image;
  cResult[4] = style;
  cResult[5] = !useReducedMotion;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
    const tmp25 = closure_20(View, obj2);
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
                        const tmp20 = closure_20(View, obj3);
                        cResult[17] = styles.imageGradientBackgroundContainer;
                        cResult[18] = tmp13;
                        cResult[19] = tmp20;
                        tmp17 = tmp20;
                      }
                    }
                  }
                }
                const obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: tmp9 };
                const tmp16 = closure_20(LinearGradientDefault, obj4);
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
            const tmp12 = closure_20(closure_25, obj5);
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
          const tmp7 = closure_20(closure_25, obj6);
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
}) : ((arg0) => {
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
        obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: closure_20(closure_25, obj5) };
        obj5 = { image: pageConfig.image, style: items, useReducedMotion };
        items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        tmp8 = LinearGradientDefault;
        tmp3 = closure_20(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: items1, useReducedMotion };
        items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        tmp3 = closure_20(closure_25, obj);
      }
      tmp10 = tmp3;
    }
  }
  return tmp10;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let analyticsLocations2;
  let currentUser;
  let featureName;
  let items5;
  let legacyProps;
  let loading;
  let onDismiss;
  let onPress;
  let subfeatureName;
  let theme;
  let tmp4;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let useTier0UpsellContent;
  const tmp2 = useTier0UpsellContent;
  let obj = legacyProps(useTier0UpsellContent[16]);
  const cResult = obj.c(83);
  ({ featureName, legacyProps } = arg0);
  ({ subfeatureName, analyticsLocations, onDismiss } = arg0);
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
  const tmp5 = closure_23();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class A {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = A;
    tmp7 = A;
    tmp6 = items1;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = legacyProps(tmp2[44]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  analyticsLocations2 = analyticsLocations2(tmp2[45])(tmp4).analyticsLocations;
  if (cResult[4] === featureName) {
    let tmp14;
    const tmp11 = cResult[5];
    class A {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    if (tmp11 === undefined) {
      tmp14 = cResult[6];
    }
    const tmpResult10 = legacyProps(tmp2[47]);
    const premiumUpsellConfig = tmpResult10.usePremiumUpsellConfig(tmp14, analyticsLocations2);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
    const tmpResult11 = legacyProps(tmp2[48]);
    const premiumTrialOffer = tmpResult11.usePremiumTrialOffer();
    if (cResult[7] === premiumTrialOffer) {
      let tmp19;
      let tmp27;
      let tmp26;
      if (cResult[8] === useTier0UpsellContent) {
        tmp19 = cResult[9];
      }
      const _Symbol = Symbol;
      class A {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      const tmpResult12 = legacyProps(tmp2[44]);
      const stateFromStores1 = tmpResult12.useStateFromStores(tmp23, tmp24);
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SelectedGuildStore];
        class W {
          constructor() {
            return guildId.getGuildId();
          }
        }
        cResult[12] = W;
        cResult[13] = items2;
        tmp27 = items2;
        tmp26 = W;
      } else {
        tmp26 = cResult[12];
        tmp27 = cResult[13];
      }
      const tmpResult13 = legacyProps(tmp2[44]);
      const stateFromStores2 = tmpResult13.useStateFromStores(tmp27, tmp26);
      const tmp31 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
      if (cResult[14] === featureName) {
        if (cResult[15] === stateFromStores2) {
          if (cResult[16] === subfeatureName) {
            if (cResult[17] === tmp31) {
              if (cResult[18] === stateFromStores1) {
                let tmp32;
                let tmp36;
                let tmp35;
                if (cResult[19] === stateFromStores) {
                  tmp32 = cResult[20];
                }
                const tmp34 = closure_24(tmp32)[featureName];
                class W {
                  constructor() {
                    return guildId.getGuildId();
                  }
                }
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const items3 = [AccessibilityStore];
                  class Z {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  cResult[21] = items3;
                  cResult[22] = Z;
                  tmp36 = Z;
                  tmp35 = items3;
                } else {
                  tmp35 = cResult[21];
                  tmp36 = cResult[22];
                }
                const tmpResult14 = legacyProps(tmp2[44]);
                const stateFromStores3 = tmpResult14.useStateFromStores(tmp35, tmp36);
                const tmpResult15 = legacyProps(tmp2[24]);
                let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmpResult15.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
                if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
                  const tmpResult16 = legacyProps(tmp2[50]);
                  mobileEmojiPickerUpsellRestyleEnabledForFeature = tmpResult16.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
                }
                if (cResult[23] === analyticsLocations2) {
                  const tmp40 = cResult[24];
                  class Z {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  if (tmp40 === undefined) {
                    if (cResult[25] === tmp34.upsellType) {
                      let tmp43;
                      if (cResult[26] === useTier0UpsellContent) {
                        tmp43 = cResult[27];
                      }
                      if (cResult[28] === analyticsLocations2) {
                        if (cResult[29] === legacyProps) {
                          if (cResult[30] === tmp34) {
                            let tmp46;
                            let tmp53;
                            if (cResult[31] === useTier0UpsellContent) {
                              tmp46 = cResult[32];
                            }
                            const effect = onViewAllPerks.useEffect(tmp43, tmp46);
                            class Z {
                              constructor() {
                                return useReducedMotion.useReducedMotion;
                              }
                            }
                            ({ loading, onPress } = analyticsLocations2(tmp2[52])(useTier0UpsellContent, onViewAllPerks, tmp34.analyticsPage, undefined, tmp4));
                            analyticsLocations2(tmp2[52])(useTier0UpsellContent, onViewAllPerks, tmp34.analyticsPage, undefined, tmp4);
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
                              tmp53 = ne;
                            } else {
                              tmp53 = cResult[34];
                            }
                            if (null == tmp34) {
                              return null;
                            } else {
                              const ActionSheet = tmp(tmp2[54]).ActionSheet;
                              if (cResult[35] === tmp34) {
                                if (cResult[36] === tmp5) {
                                  let tmp55;
                                  let tmp59;
                                  if (cResult[37] === stateFromStores3) {
                                    tmp55 = cResult[38];
                                  }
                                  if (cResult[39] === tmp34.showBetaBadge) {
                                    let tmp58;
                                    if (cResult[40] === tmp5.betaTag) {
                                      tmp58 = cResult[41];
                                    }
                                    if (cResult[42] === tmp34.title) {
                                      let tmp62;
                                      if (cResult[43] === tmp5.text) {
                                        tmp62 = cResult[44];
                                      }
                                      if (cResult[45] === tmp5.description) {
                                        let tmp66;
                                        if (cResult[46] === tmp5.text) {
                                          tmp66 = cResult[47];
                                        }
                                        if (cResult[48] === tmp34.description) {
                                          let tmp67;
                                          if (cResult[49] === tmp66) {
                                            tmp67 = cResult[50];
                                          }
                                          if (cResult[51] === tmp5.textContainer) {
                                            if (cResult[52] === tmp58) {
                                              if (cResult[53] === tmp62) {
                                                let tmp71;
                                                let stringResult;
                                                if (cResult[54] === tmp67) {
                                                  tmp71 = cResult[55];
                                                }
                                                const buttonContainer = tmp5.buttonContainer;
                                                const Button = tmp(tmp2[57]).Button;
                                                class Z {
                                                  constructor() {
                                                    return useReducedMotion.useReducedMotion;
                                                  }
                                                }
                                                if (cResult[56] === tmp19) {
                                                  let tmp76;
                                                  if (cResult[57] === useTier0UpsellContent) {
                                                    tmp76 = cResult[58];
                                                  }
                                                  const tmp10Result = analyticsLocations2(tmp2[58]);
                                                  class Z {
                                                    constructor() {
                                                      return useReducedMotion.useReducedMotion;
                                                    }
                                                  }
                                                  if (cResult[59] === Button) {
                                                    if (cResult[60] === loading) {
                                                      if (cResult[61] === tmp75) {
                                                        if (cResult[62] === tmp76) {
                                                          if (cResult[63] === tmp10Result) {
                                                            let tmp79;
                                                            let tmp84;
                                                            if (cResult[64] === "primary") {
                                                              tmp79 = cResult[65];
                                                            }
                                                            const _Symbol4 = Symbol;
                                                            class Z {
                                                              constructor() {
                                                                return useReducedMotion.useReducedMotion;
                                                              }
                                                            }
                                                            if (cResult[67] !== tmp53) {
                                                              let obj2 = { variant: "secondary", text: tmp83, onPress: null };
                                                              class Z {
                                                                constructor() {
                                                                  return useReducedMotion.useReducedMotion;
                                                                }
                                                              }
                                                              const tmp86 = closure_20(legacyProps(tmp2[57]).Button, obj2);
                                                              cResult[67] = tmp53;
                                                              cResult[68] = tmp86;
                                                              tmp84 = tmp86;
                                                            } else {
                                                              tmp84 = cResult[68];
                                                            }
                                                            if (cResult[69] === View) {
                                                              if (cResult[70] === tmp5.buttonContainer) {
                                                                if (cResult[71] === tmp79) {
                                                                  let tmp87;
                                                                  if (cResult[72] === tmp84) {
                                                                    tmp87 = cResult[73];
                                                                  }
                                                                  if (cResult[74] === View) {
                                                                    if (cResult[75] === tmp55) {
                                                                      if (cResult[76] === tmp71) {
                                                                        let tmp90;
                                                                        if (cResult[77] === tmp87) {
                                                                          tmp90 = cResult[78];
                                                                        }
                                                                        if (cResult[79] === ActionSheet) {
                                                                          if (cResult[80] === onDismiss) {
                                                                            let tmp94;
                                                                            if (cResult[81] === tmp90) {
                                                                              tmp94 = cResult[82];
                                                                            }
                                                                            return tmp94;
                                                                          }
                                                                        }
                                                                        class Z {
                                                                          constructor() {
                                                                            return useReducedMotion.useReducedMotion;
                                                                          }
                                                                        }
                                                                        tmp96[1] = onDismiss;
                                                                        tmp96[2] = tmp90;
                                                                        const tmp97 = closure_20(ActionSheet, tmp96);
                                                                        cResult[79] = ActionSheet;
                                                                        cResult[80] = onDismiss;
                                                                        cResult[81] = tmp90;
                                                                        cResult[82] = tmp97;
                                                                        tmp94 = tmp97;
                                                                      }
                                                                    }
                                                                  }
                                                                  class Z {
                                                                    constructor() {
                                                                      return useReducedMotion.useReducedMotion;
                                                                    }
                                                                  }
                                                                  const items4 = [tmp55, tmp71, tmp87];
                                                                  tmp92[0] = items4;
                                                                  const tmp93 = closure_22(View, tmp92);
                                                                  cResult[74] = View;
                                                                  cResult[75] = tmp55;
                                                                  cResult[76] = tmp71;
                                                                  cResult[77] = tmp87;
                                                                  cResult[78] = tmp93;
                                                                  tmp90 = tmp93;
                                                                }
                                                              }
                                                            }
                                                            const obj3 = { style: buttonContainer, children: items5 };
                                                            items5 = [tmp79, tmp84];
                                                            const tmp89 = closure_22(View, obj3);
                                                            cResult[69] = View;
                                                            cResult[70] = tmp5.buttonContainer;
                                                            cResult[71] = tmp79;
                                                            cResult[72] = tmp84;
                                                            cResult[73] = tmp89;
                                                            tmp87 = tmp89;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj4 = { loading, onPress: tmp75, text: tmp76, icon: tmp10Result, variant: "primary" };
                                                  const tmp81 = closure_20(Button, obj4);
                                                  cResult[59] = Button;
                                                  cResult[60] = loading;
                                                  cResult[61] = tmp75;
                                                  cResult[62] = tmp76;
                                                  cResult[63] = tmp10Result;
                                                  cResult[64] = "primary";
                                                  cResult[65] = tmp81;
                                                  tmp79 = tmp81;
                                                }
                                                if (useTier0UpsellContent) {
                                                  const intl2 = tmp(tmp2[26]).intl;
                                                  stringResult = intl2.string(tmp(tmp2[26]).t.cM8bbx);
                                                } else {
                                                  stringResult = tmp19;
                                                  if (tmp19 == null) {
                                                    const intl = tmp(tmp2[26]).intl;
                                                    stringResult = intl.string(tmp(tmp2[26]).t["8x0jKT"]);
                                                  }
                                                }
                                                cResult[56] = tmp19;
                                                cResult[57] = useTier0UpsellContent;
                                                cResult[58] = stringResult;
                                                tmp76 = stringResult;
                                              }
                                            }
                                          }
                                          class Z {
                                            constructor() {
                                              return useReducedMotion.useReducedMotion;
                                            }
                                          }
                                          tmp73[0] = tmp5.textContainer;
                                          const items6 = [tmp58, tmp62, tmp67];
                                          tmp73[1] = items6;
                                          const tmp74 = closure_22(View, tmp73);
                                          cResult[51] = tmp5.textContainer;
                                          cResult[52] = tmp58;
                                          cResult[53] = tmp62;
                                          cResult[54] = tmp67;
                                          cResult[55] = tmp74;
                                          tmp71 = tmp74;
                                        }
                                        class Z {
                                          constructor() {
                                            return useReducedMotion.useReducedMotion;
                                          }
                                        }
                                        tmp69[0] = tmp66;
                                        tmp69[2] = tmp34.description;
                                        const tmp70 = closure_20(legacyProps(tmp2[56]).Text, tmp69);
                                        cResult[48] = tmp34.description;
                                        cResult[49] = tmp66;
                                        cResult[50] = tmp70;
                                        tmp67 = tmp70;
                                      }
                                      const items7 = [, ];
                                      class Z {
                                        constructor() {
                                          return useReducedMotion.useReducedMotion;
                                        }
                                      }
                                      items7[1] = tmp5.description;
                                      cResult[45] = tmp5.description;
                                      cResult[46] = tmp5.text;
                                      cResult[47] = items7;
                                      tmp66 = items7;
                                    }
                                    class Z {
                                      constructor() {
                                        return useReducedMotion.useReducedMotion;
                                      }
                                    }
                                    tmp64[0] = tmp5.text;
                                    tmp64[3] = tmp34.title;
                                    const tmp65 = closure_20(legacyProps(tmp2[56]).Text, tmp64);
                                    cResult[42] = tmp34.title;
                                    cResult[43] = tmp5.text;
                                    cResult[44] = tmp65;
                                    tmp62 = tmp65;
                                  }
                                  class Z {
                                    constructor() {
                                      return useReducedMotion.useReducedMotion;
                                    }
                                  }
                                  if (true === tmp34.showBetaBadge) {
                                    const obj5 = { size: null, gradient: true, style: tmp5.betaTag };
                                    const tmp10Result2 = analyticsLocations2(tmp2[55]);
                                    class Z {
                                      constructor() {
                                        return useReducedMotion.useReducedMotion;
                                      }
                                    }
                                    tmp59 = closure_20(tmp10Result2, obj5);
                                  }
                                  cResult[39] = tmp34.showBetaBadge;
                                  cResult[40] = tmp5.betaTag;
                                  cResult[41] = tmp59;
                                  tmp58 = tmp59;
                                }
                              }
                              class Z {
                                constructor() {
                                  return useReducedMotion.useReducedMotion;
                                }
                              }
                              const obj6 = { pageConfig: tmp34, styles: tmp5, useReducedMotion: stateFromStores3 };
                              const tmp57 = closure_20(closure_26, obj6);
                              cResult[35] = tmp34;
                              cResult[36] = tmp5;
                              cResult[37] = stateFromStores3;
                              cResult[38] = tmp57;
                              tmp55 = tmp57;
                            }
                          }
                        }
                      }
                      const items8 = [, , , ];
                      class Z {
                        constructor() {
                          return useReducedMotion.useReducedMotion;
                        }
                      }
                      items8[1] = analyticsLocations2;
                      items8[2] = useTier0UpsellContent;
                      items8[3] = legacyProps;
                      cResult[28] = analyticsLocations2;
                      cResult[29] = legacyProps;
                      cResult[30] = tmp34;
                      cResult[31] = useTier0UpsellContent;
                      cResult[32] = items8;
                      tmp46 = items8;
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
                  const obj = { type: upsellType, location: location, location_stack: analyticsLocations2, sku_id: obj2.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? authStore.TIER_0 : authStore.TIER_2), voice_guild_id: guildId };
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
                cResult[25] = tmp34.upsellType;
                cResult[26] = useTier0UpsellContent;
                cResult[27] = ee;
                tmp43 = ee;
              }
            }
          }
        }
      }
      const obj7 = { user: stateFromStores, premiumType: tmp31, theme: stateFromStores1, guildId: stateFromStores2, featureName, subfeatureName };
      cResult[14] = featureName;
      cResult[15] = stateFromStores2;
      cResult[16] = subfeatureName;
      cResult[17] = tmp31;
      cResult[18] = stateFromStores1;
      cResult[19] = stateFromStores;
      cResult[20] = obj7;
      tmp32 = obj7;
    }
    let trialCtaOverride = null;
    if (!useTier0UpsellContent) {
      const tmpResult17 = legacyProps(tmp2[49]);
      trialCtaOverride = tmpResult17.getTrialCtaOverride(premiumTrialOffer, closure_10.TIER_2);
    }
    cResult[7] = premiumTrialOffer;
    cResult[8] = useTier0UpsellContent;
    cResult[9] = trialCtaOverride;
    tmp19 = trialCtaOverride;
  }
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    const tmpResult18 = legacyProps(tmp2[46]);
    initialUpsellKey = tmpResult18.getUpsellType(featureName);
  }
  cResult[4] = featureName;
  let initialUpsellKey1;
  if (legacyProps != null) {
    initialUpsellKey1 = legacyProps.initialUpsellKey;
  }
  cResult[5] = initialUpsellKey1;
  cResult[6] = initialUpsellKey;
  tmp14 = initialUpsellKey;
}) : ((analyticsLocations) => {
  let currentUser;
  let featureName;
  let intl3;
  let items6;
  let items7;
  let items8;
  let legacyProps;
  let obj11;
  let str;
  let theme;
  let tmp29;
  let useReducedMotion;
  ({ featureName, legacyProps } = analyticsLocations);
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  const subfeatureName = analyticsLocations.subfeatureName;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  analyticsLocations = undefined;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let upsellType;
  const onDismiss = analyticsLocations.onDismiss;
  const tmp = closure_23();
  const tmp2 = legacyProps;
  let obj = legacyProps(useTier0UpsellContent[44]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations = analyticsLocations(useTier0UpsellContent[45])(analyticsLocations1).analyticsLocations;
  let initialUpsellKey;
  const usePremiumUpsellConfig = legacyProps(useTier0UpsellContent[47]).usePremiumUpsellConfig;
  const tmp6 = legacyProps(useTier0UpsellContent[47]);
  const tmp7 = analyticsLocations1;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    const tmp2Result = tmp2(useTier0UpsellContent[46]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = usePremiumUpsellConfig(initialUpsellKey, analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  tmp2(useTier0UpsellContent[48]);
  let trialCtaOverride = null;
  if (!useTier0UpsellContent) {
    const tmp2Result9 = tmp2(useTier0UpsellContent[49]);
    trialCtaOverride = tmp2Result9.getTrialCtaOverride(tmp11, closure_10.TIER_2);
  }
  const items1 = [ThemeStore];
  const tmp2Result10 = tmp2(useTier0UpsellContent[44]);
  const stateFromStores1 = tmp2Result10.useStateFromStores(items1, () => theme.theme);
  const items2 = [SelectedGuildStore];
  const tmp2Result11 = tmp2(useTier0UpsellContent[44]);
  let obj2 = { user: stateFromStores, premiumType: useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2, theme: stateFromStores1, guildId: tmp2Result11.useStateFromStores(items2, () => guildId.getGuildId()), featureName, subfeatureName };
  const tmp16 = closure_24(obj2)[featureName];
  upsellType = tmp16;
  const items3 = [AccessibilityStore];
  const tmp2Result12 = tmp2(useTier0UpsellContent[44]);
  const stateFromStores2 = tmp2Result12.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result13 = tmp2(useTier0UpsellContent[24]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2Result13.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    const tmp2Result14 = tmp2(useTier0UpsellContent[50]);
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2Result14.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  }
  const items4 = [tmp16, analyticsLocations, useTier0UpsellContent, legacyProps];
  const effect = onViewAllPerks.useEffect(() => {
    let obj2;
    let analyticsProperties;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_UPSELL_VIEWED = map1.PREMIUM_UPSELL_VIEWED;
    AnalyticsUtilsDefault;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj = { type: upsellType, location: location, location_stack: analyticsLocations, sku_id: obj2.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? authStore.TIER_0 : authStore.TIER_2), voice_guild_id: guildId };
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
  const tmp20 = analyticsLocations(useTier0UpsellContent[52])(useTier0UpsellContent, onViewAllPerks, tmp16.analyticsPage, undefined, tmp7);
  const loading = tmp20.loading;
  [][0] = onViewAllPerks;
  const onPress = tmp20.onPress;
  let tmp23Result2 = null;
  if (null != tmp16) {
    const obj3 = { startExpanded: true, onDismiss, children: closure_22(upsellType, obj11) };
    const obj4 = { pageConfig: tmp16, styles: tmp, useReducedMotion: stateFromStores2 };
    const ActionSheet = tmp2(tmp3[54]).ActionSheet;
    const items5 = [closure_20(closure_26, obj4), , ];
    let tmp23Result = null;
    const obj5 = { style: tmp.textContainer, children: items6 };
    if (true === tmp16.showBetaBadge) {
      const obj6 = { size: tmp2(useTier0UpsellContent[55]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      const tmp5Result = analyticsLocations(useTier0UpsellContent[55]);
      tmp23Result = tmp23(tmp5Result, obj6);
    }
    items6 = [tmp23Result, , ];
    const obj7 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: tmp16.title };
    items6[1] = closure_20(tmp2(useTier0UpsellContent[56]).Text, obj7);
    const obj8 = { style: items7, variant: "text-sm/normal", children: tmp16.description };
    items7 = [, ];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    items6[2] = closure_20(tmp2(useTier0UpsellContent[56]).Text, obj8);
    items5[1] = closure_22(upsellType, obj5);
    const obj9 = { style: tmp.buttonContainer, children: items8 };
    const obj10 = { loading, onPress: tmp29, text: trialCtaOverride, icon: analyticsLocations(useTier0UpsellContent[58]), variant: str };
    tmp29 = null;
    const Button = tmp2(tmp3[57]).Button;
    if (!loading) {
      tmp29 = onPress;
    }
    if (useTier0UpsellContent) {
      const intl2 = tmp2(tmp3[26]).intl;
      trialCtaOverride = intl2.string(tmp2(tmp3[26]).t.cM8bbx);
    } else if (trialCtaOverride == null) {
      const intl = tmp2(tmp3[26]).intl;
      trialCtaOverride = intl.string(tmp2(tmp3[26]).t["8x0jKT"]);
    }
    str = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str2 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str2 = "experimental_premium-basic";
      }
      str = str2;
    }
    obj11 = { children: items5 };
    items8 = [closure_20(Button, obj10), ];
    const obj12 = { variant: "secondary", text: intl3.string(tmp2(useTier0UpsellContent[26]).t.PcTCB7), onPress: tmp21 };
    const Button2 = tmp2(tmp3[57]).Button;
    intl3 = tmp2(tmp3[26]).intl;
    items8[1] = closure_20(Button2, obj12);
    items5[2] = closure_22(upsellType, obj9);
    tmp23Result2 = tmp23(ActionSheet, obj3);
  }
  return tmp23Result2;
});
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default tmp7;
