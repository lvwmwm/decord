// Module ID: 8131
// Function ID: 8132
// Name: PremiumUpsellActionSheet
// Dependencies: [19, 17, 4782, 1186, 4612, 1376, 1378, 1078, 4837, 8132, 8126, 21, 4790, 580, 558, 568, 4494, 4450, 8133, 5412, 5384, 8134, 8135, 8137, 5939, 1119, 8138, 8139, 4757, 8130, 8140, 8141, 13639, 13640, 12393, 12402, 13643, 1098, 1368, 9119, 5834, 5230, 504, 7441, 10259, 9457, 9465, 1245, 10260, 4657, 7481, 13644, 4786, 5220, 8347, 2]

// Module 8131 (PremiumUpsellActionSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import PremiumUtils from "PremiumUtils" /* 4450 */;
import ChatInputUtils from "ChatInputUtils" /* 4657 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import LinearGradientDefault from "LinearGradient" /* 5230 */;
import FastImageDefault from "FastImage" /* 5834 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 8130 */;
import _modDef8138 from "module_8138" /* 8138 */;
import _modDef8139 from "module_8139" /* 8139 */;
import showForLaterModal from "showForLaterModal" /* 8140 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8141 */;
import _modDef12402 from "module_12402" /* 12402 */;
import _modDef13643 from "module_13643" /* 13643 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;
import ThemeStore from "ThemeStore" /* 1186 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4612 */;
import UserStore from "UserStore" /* 1376 */;

const APNGPlayer = tmp(9119);
require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1378);
({ PremiumSubscriptionSKUs: closure_9, PremiumTypes: c10, PremiumUpsellTypes: closure_11 } = PremiumConstants);
const Constants = fn(1078);
({ AnalyticEvents: closure_12, AnalyticsPages: map1, ThemeTypes: closure_14 } = Constants);
const ApplicationStreamFPS = fn(4837).ApplicationStreamFPS;
const SavedMessagesConstants = fn(8132);
({ SAVED_BOOKMARKS_MAX: closure_16, SAVED_REMINDERS_MAX: closure_17 } = SavedMessagesConstants);
const premiumMax = fn(8126).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { hero: { alignSelf: "center", marginTop: nativeDefault.space.PX_16 }, image: { width: 240, height: 144 }, text: { alignSelf: "center", textAlign: "center" }, betaTag: { marginLeft: 0 }, description: null, textContainer: null, buttonContainer: null, imageGradientBackgroundContainer: null, imageGradientBackground: null, imageInGradientBackground: null };
let obj3 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
obj2.description = { marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.textContainer = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj5 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.buttonContainer = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackgroundContainer = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" };
let obj6 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackground = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
let obj7 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
obj2.imageInGradientBackground = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
let closure_22 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const tmp = _require;
  const cResult = require("c").c(76);
  ({ premiumType, guildId, featureName, subfeatureName, theme } = arg0);
  let obj = require("c");
  const token = require("useToken").useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const obj2 = require("useToken");
  const token1 = require("useToken").useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  let str = "dark";
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  if (cResult[0] === featureName) {
    if (cResult[1] === guildId) {
      if (cResult[2] === str) {
        if (cResult[3] === premiumType) {
          if (cResult[4] === subfeatureName) {
            _require = tmp7;
            const tmp4Result = tmp4(cResult[5] ? 13639 : 13640);
            if (cResult[46] === cResult[6]) {
              if (cResult[47] === tmp4Result) {
                if (cResult[48] === tmp18) {
                  if (cResult[49] === tmp19) {
                    let tmp84 = cResult[50];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl18 = tmp(1119).intl;
                    const obj4 = { premiumMax };
                    const formatToPlainStringResult = intl18.formatToPlainString(tmp(1119).t.GNoaxo, obj4);
                    cResult[51] = formatToPlainStringResult;
                    let tmp88 = formatToPlainStringResult;
                  } else {
                    tmp88 = cResult[51];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj5 = { title: tmp88, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
                    const obj6 = { children: null };
                    const intl19 = tmp(1119).intl;
                    const obj7 = {
                      premiumMax,
                      onClick() {
                                          ActionSheetActionCreatorsDefault.hideActionSheet(closure_0(8130).PREMIUM_UPSELL_ACTION_SHEET_KEY);
                                          const result = closure_0(12393).showScheduledMessagesModal();
                                        }
                    };
                    obj6.children = intl19.format(tmp(1119).t["1kFyto"], obj7);
                    obj5.description = closure_19(closure_20, obj6);
                    obj5.analyticsPage = constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
                    obj5.upsellType = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
                    obj5.image = tmp4(12402);
                    cResult[52] = obj5;
                    let tmp91 = obj5;
                  } else {
                    tmp91 = cResult[52];
                  }
                  const _Symbol6 = Symbol;
                  if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl20 = tmp(1119).intl;
                    const stringResult = intl20.string(tmp(1119).t.ETZQx5);
                    const intl21 = tmp(1119).intl;
                    const obj8 = { fps: ApplicationStreamFPS.FPS_60 };
                    const formatToPlainStringResult1 = intl21.formatToPlainString(tmp(1119).t["4nlpei"], obj8);
                    cResult[53] = stringResult;
                    cResult[54] = formatToPlainStringResult1;
                    let tmp98 = formatToPlainStringResult1;
                    let tmp97 = stringResult;
                  } else {
                    tmp97 = cResult[53];
                    tmp98 = cResult[54];
                  }
                  if (cResult[55] === token1) {
                    if (cResult[56] === token) {
                      let tmp102 = cResult[57];
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
                                      if (cResult[67] === tmp84) {
                                        if (cResult[68] === tmp102) {
                                          if (cResult[69] === tmp20) {
                                            if (cResult[70] === tmp21) {
                                              if (cResult[71] === tmp22) {
                                                if (cResult[72] === tmp23) {
                                                  if (cResult[73] === tmp24) {
                                                    if (cResult[74] === tmp25) {
                                                      let tmp105 = cResult[75];
                                                    }
                                                    return tmp105;
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
                    obj9[tmp20] = tmp21;
                    obj9[tmp22] = tmp23;
                    obj9[tmp24] = tmp25;
                    obj9[tmp9] = tmp10;
                    obj9[tmp11] = tmp12;
                    obj9[tmp13] = tmp14;
                    obj9[tmp15] = tmp16;
                    obj9[tmp17] = tmp84;
                    obj9[tmp(8133).EntitlementFeatureNames.SCHEDULED_MESSAGES] = tmp91;
                    obj9[tmp(8133).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = tmp102;
                    cResult[58] = tmp9;
                    cResult[59] = tmp10;
                    cResult[60] = tmp11;
                    cResult[61] = tmp12;
                    cResult[62] = tmp13;
                    cResult[63] = tmp14;
                    cResult[64] = tmp15;
                    cResult[65] = tmp16;
                    cResult[66] = tmp17;
                    cResult[67] = tmp84;
                    cResult[68] = tmp102;
                    cResult[69] = tmp20;
                    cResult[70] = tmp21;
                    cResult[71] = tmp22;
                    cResult[72] = tmp23;
                    cResult[73] = tmp24;
                    cResult[74] = tmp25;
                    cResult[75] = obj9;
                    tmp105 = obj9;
                  }
                  const obj10 = { title: tmp97, description: tmp98, analyticsPage: constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY, upsellType: constants.STREAM_QUALITY_UPSELL, image: tmp4(13643), imageGradientBackground: null };
                  const obj11 = { colors: null, start: null, end: null };
                  const items = [token, token1];
                  obj11.colors = items;
                  obj11.start = tmp(1098).HorizontalGradient.START;
                  obj11.end = tmp(1098).HorizontalGradient.END;
                  obj10.imageGradientBackground = obj11;
                  cResult[55] = token1;
                  cResult[56] = token;
                  cResult[57] = obj10;
                  tmp102 = obj10;
                }
              }
            }
            const obj12 = { title: cResult[6], showBetaBadge: cResult[16], description: cResult[17], analyticsPage: constants3.PREMIUM_UPSELL_FOR_LATER, upsellType: constants.FOR_LATER_MODAL_UPSELL, image: tmp4Result };
            cResult[46] = cResult[6];
            cResult[47] = tmp4Result;
            cResult[48] = cResult[16];
            cResult[49] = cResult[17];
            cResult[50] = obj12;
            tmp84 = obj12;
          }
        }
      }
    }
  }
  const obj3 = require("useToken");
  const premiumTypeDisplayName = tmp(4450).getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === tmp(8133).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const tmpResult6 = tmp(5412);
    effectiveUploadLimit = tmpResult6.getEffectiveUploadLimit(tmp(5384).maxFileSize(guildId));
    const tmpResult7 = tmp(5384);
  }
  const tmp28 = subfeatureName === tmp(8134).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  _require = tmp28;
  if (subfeatureName === tmp(8134).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const forLaterLimit = tmp(8135).getForLaterLimit("native.PremiumUpsellActionSheet", tmp28);
    const tmpResult8 = tmp(8135);
  }
  const tmp30 = tmp28 ? closure_17 : closure_16;
  if (cResult[24] !== featureName) {
    let tmp32;
    if (tmpResult9.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
      tmp32 = closure_19(tmp(5939).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
    }
    cResult[24] = featureName;
    cResult[25] = tmp32;
    let tmp31 = tmp32;
    tmpResult9 = tmp(8137);
  } else {
    tmp31 = cResult[25];
  }
  const SOUNDBOARD_EVERYWHERE = tmp(8133).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  const obj13 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = tmp(1119).intl;
  obj13.title = intl.string(tmp(1119).t.jGDYF0);
  const intl2 = tmp(1119).intl;
  obj13.description = intl2.formatToPlainString(tmp(1119).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
  obj13.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj13.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  const tmpResult = tmp(4450);
  obj13.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  const EMOJIS_EVERYWHERE = tmp(8133).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
  const obj15 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, illustration: null };
  const intl3 = tmp(1119).intl;
  obj15.title = intl3.string(tmp(1119).t.zY5PPb);
  const intl4 = tmp(1119).intl;
  obj15.description = intl4.formatToPlainString(tmp(1119).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
  obj15.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj15.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
  const obj14 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj15.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj15.illustration = tmp31;
  const STICKERS_EVERYWHERE = tmp(8133).EntitlementFeatureNames.STICKERS_EVERYWHERE;
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1119).intl;
    const stringResult1 = intl5.string(tmp(1119).t.Eukdgl);
    const intl6 = tmp(1119).intl;
    const stringResult2 = intl6.string(tmp(1119).t.sMmd7s);
    cResult[26] = stringResult1;
    cResult[27] = stringResult2;
    let tmp37 = stringResult2;
    let tmp36 = stringResult1;
  } else {
    tmp36 = cResult[26];
    tmp37 = cResult[27];
  }
  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
    const obj17 = { title: tmp36, description: tmp37, analyticsPage: tmp34.PREMIUM_UPSELL_STICKERS_EVERYWHERE, upsellType: tmp35.STICKERS_EVERYWHERE_UPSELL, illustration: closure_19(tmp(5939).StickersSpotIllustration, { width: 235, height: 132, accessible: false }) };
    cResult[28] = obj17;
    let tmp40 = obj17;
  } else {
    tmp40 = cResult[28];
  }
  const INCREASED_FILE_UPLOAD_SIZE = tmp(8133).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
    const intl7 = tmp(1119).intl;
    const stringResult3 = intl7.string(tmp(1119).t["G+pngo"]);
    cResult[29] = stringResult3;
    let tmp42 = stringResult3;
  } else {
    tmp42 = cResult[29];
  }
  const obj16 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  let result = tmp(5384).fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit });
  if (cResult[30] !== result) {
    const obj18 = { children: result };
    const tmp48 = closure_19(closure_20, obj18);
    cResult[30] = result;
    cResult[31] = tmp48;
    let tmp45 = tmp48;
  } else {
    tmp45 = cResult[31];
  }
  const combined = "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png";
  if (cResult[32] !== combined) {
    const obj19 = { uri: combined };
    cResult[32] = combined;
    cResult[33] = obj19;
    let tmp50 = obj19;
  } else {
    tmp50 = cResult[33];
  }
  if (cResult[34] === tmp45) {
    if (cResult[35] === tmp50) {
      let tmp51 = cResult[36];
    }
    const ANIMATED_EMOJIS = tmp(8133).EntitlementFeatureNames.ANIMATED_EMOJIS;
    const _Symbol = Symbol;
    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
      const intl8 = tmp(1119).intl;
      const stringResult4 = intl8.string(tmp(1119).t.SI7R9I);
      cResult[37] = stringResult4;
      let tmp52 = stringResult4;
    } else {
      tmp52 = cResult[37];
    }
    const intl9 = tmp(1119).intl;
    const obj20 = { nitroTierName: premiumTypeDisplayName };
    const formatToPlainStringResult2 = intl9.formatToPlainString(tmp(1119).t.uGkSY2, obj20);
    const _HermesInternal = HermesInternal;
    const combined1 = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png";
    if (cResult[38] !== combined1) {
      const obj21 = { uri: combined1 };
      cResult[38] = combined1;
      cResult[39] = obj21;
      let tmp56 = obj21;
    } else {
      tmp56 = cResult[39];
    }
    if (cResult[40] === tmp31) {
      if (cResult[41] === formatToPlainStringResult2) {
        if (cResult[42] === tmp56) {
          let tmp57 = cResult[43];
        }
        const CLIENT_THEMES = tmp(8133).EntitlementFeatureNames.CLIENT_THEMES;
        const _Symbol2 = Symbol;
        if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
          const obj22 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
          const intl10 = tmp(1119).intl;
          obj22.title = intl10.string(tmp(1119).t.p0I2Bk);
          const intl11 = tmp(1119).intl;
          obj22.description = intl11.string(tmp(1119).t.jBqF2k);
          obj22.analyticsPage = tmp34.PREMIUM_UPSELL_CLIENT_THEMES;
          obj22.upsellType = tmp35.CLIENT_THEMES_UPSELL;
          obj22.image = tmp4(8138);
          cResult[44] = obj22;
          let tmp58 = obj22;
        } else {
          tmp58 = cResult[44];
        }
        const APP_ICONS = tmp(8133).EntitlementFeatureNames.APP_ICONS;
        const _Symbol3 = Symbol;
        if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
          const obj23 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
          const intl12 = tmp(1119).intl;
          obj23.title = intl12.string(tmp(1119).t.TYFwcy);
          const intl13 = tmp(1119).intl;
          obj23.description = intl13.string(tmp(1119).t.HDt8ip);
          obj23.analyticsPage = tmp34.PREMIUM_UPSELL_APP_ICONS;
          obj23.upsellType = tmp35.APP_ICON_UPSELL;
          obj23.image = tmp4(8139);
          cResult[45] = obj23;
          let tmp59 = obj23;
        } else {
          tmp59 = cResult[45];
        }
        const SAVED_MESSAGES = tmp(8133).EntitlementFeatureNames.SAVED_MESSAGES;
        if (null == forLaterLimit) {
          const intl15 = tmp(1119).intl;
          let stringResult5 = intl15.string(tmp(1119).t.YXk6N7);
        } else {
          const intl14 = tmp(1119).intl;
          const t = tmp(1119).t;
          const obj24 = { premiumMax: tmp30 };
          stringResult5 = intl14.formatToPlainString(tmp28 ? t["cpj9o/"] : t.Oxm3Sq, obj24);
        }
        if (null == forLaterLimit) {
          const intl17 = tmp(1119).intl;
          let stringResult6 = intl17.string(tmp(1119).t["m/HzW8"]);
        } else {
          const intl16 = tmp(1119).intl;
          const t2 = tmp(1119).t;
          const obj25 = { children: null };
          const obj26 = {
            max: forLaterLimit,
            premiumMax: tmp30,
            onClick() {
                      ActionSheetActionCreatorsDefault.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
                      const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
                      showForLaterModal.showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
                    }
          };
          obj25.children = intl16.format(tmp28 ? t2.NRF0Wh : t2.o5OLyw, obj26);
          stringResult6 = closure_19(closure_20, obj25);
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
      }
    }
    const obj27 = { title: tmp52, description: formatToPlainStringResult2, analyticsPage: tmp34.PREMIUM_UPSELL_ANIMATED_EMOJI, upsellType: tmp35.ANIMATED_EMOJI_UPSELL, image: tmp56, illustration: tmp31 };
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
  ({ guildId, featureName, subfeatureName } = arg0);
  _require = undefined;
  const tmp = _require;
  ({ premiumType, theme } = arg0);
  const token = require("useToken").useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  let obj = require("useToken");
  let str = "dark";
  const token1 = require("useToken").useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (theme === constants4.LIGHT) {
    str = "light";
  }
  const obj2 = require("useToken");
  const premiumTypeDisplayName = tmp(4450).getPremiumTypeDisplayName(premiumType);
  let effectiveUploadLimit;
  if (featureName === tmp(8133).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const tmpResult6 = tmp(5412);
    effectiveUploadLimit = tmpResult6.getEffectiveUploadLimit(tmp(5384).maxFileSize(guildId));
    const tmpResult7 = tmp(5384);
  }
  const tmp8 = subfeatureName === tmp(8134).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  _require = tmp8;
  if (subfeatureName === tmp(8134).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const forLaterLimit = tmp(8135).getForLaterLimit("native.PremiumUpsellActionSheet", tmp8);
    const tmpResult8 = tmp(8135);
  }
  const tmp10 = tmp8 ? closure_17 : closure_16;
  const tmpResult = tmp(4450);
  let tmp11;
  if (tmpResult9.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
    tmp11 = closure_19(tmp(5939).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
  }
  const obj3 = {};
  const obj4 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = tmp(1119).intl;
  obj4.title = intl.string(tmp(1119).t.jGDYF0);
  const intl2 = tmp(1119).intl;
  obj4.description = intl2.formatToPlainString(tmp(1119).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
  obj4.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj4.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  tmpResult9 = tmp(8137);
  obj4.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj3[tmp(8133).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj4;
  const obj6 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, illustration: null };
  const intl3 = tmp(1119).intl;
  obj6.title = intl3.string(tmp(1119).t.zY5PPb);
  const intl4 = tmp(1119).intl;
  obj6.description = intl4.formatToPlainString(tmp(1119).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
  obj6.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj6.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
  const obj5 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj6.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj6.illustration = tmp11;
  obj3[tmp(8133).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj6;
  const obj8 = { title: null, description: null, analyticsPage: null, upsellType: null, illustration: null };
  const intl5 = tmp(1119).intl;
  obj8.title = intl5.string(tmp(1119).t.Eukdgl);
  const intl6 = tmp(1119).intl;
  obj8.description = intl6.string(tmp(1119).t.sMmd7s);
  obj8.analyticsPage = constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE;
  obj8.upsellType = constants.STICKERS_EVERYWHERE_UPSELL;
  obj8.illustration = closure_19(tmp(5939).StickersSpotIllustration, { width: 235, height: 132, accessible: false });
  obj3[tmp(8133).EntitlementFeatureNames.STICKERS_EVERYWHERE] = obj8;
  const obj9 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl7 = tmp(1119).intl;
  obj9.title = intl7.string(tmp(1119).t["G+pngo"]);
  const obj10 = { children: null };
  const obj7 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj10.children = tmp(5384).fileUploadLimitRoadblockDescription({ guildId, maxSize: effectiveUploadLimit });
  obj9.description = closure_19(closure_20, obj10);
  obj9.analyticsPage = constants3.PREMIUM_UPSELL_FILE_UPLOAD;
  obj9.upsellType = constants.LARGER_FILE_UPLOAD_UPSELL;
  const tmpResult10 = tmp(5384);
  obj9.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj3[tmp(8133).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj9;
  const obj12 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, illustration: null };
  const intl8 = tmp(1119).intl;
  obj12.title = intl8.string(tmp(1119).t.SI7R9I);
  const intl9 = tmp(1119).intl;
  obj12.description = intl9.formatToPlainString(tmp(1119).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
  obj12.analyticsPage = constants3.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj12.upsellType = constants.ANIMATED_EMOJI_UPSELL;
  const obj11 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj12.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj12.illustration = tmp11;
  obj3[tmp(8133).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj12;
  const obj14 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = tmp(1119).intl;
  obj14.title = intl10.string(tmp(1119).t.p0I2Bk);
  const intl11 = tmp(1119).intl;
  obj14.description = intl11.string(tmp(1119).t.jBqF2k);
  obj14.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
  obj14.upsellType = constants.CLIENT_THEMES_UPSELL;
  obj14.image = _modDef8138;
  obj3[tmp(8133).EntitlementFeatureNames.CLIENT_THEMES] = obj14;
  const obj15 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl12 = tmp(1119).intl;
  obj15.title = intl12.string(tmp(1119).t.TYFwcy);
  const intl13 = tmp(1119).intl;
  obj15.description = intl13.string(tmp(1119).t.HDt8ip);
  obj15.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
  obj15.upsellType = constants.APP_ICON_UPSELL;
  obj15.image = _modDef8139;
  obj3[tmp(8133).EntitlementFeatureNames.APP_ICONS] = obj15;
  if (null == forLaterLimit) {
    const intl15 = tmp(1119).intl;
    let stringResult = intl15.string(tmp(1119).t.YXk6N7);
  } else {
    const intl14 = tmp(1119).intl;
    const t = tmp(1119).t;
    const obj16 = { premiumMax: tmp10 };
    stringResult = intl14.formatToPlainString(tmp8 ? t["cpj9o/"] : t.Oxm3Sq, obj16);
  }
  const obj17 = { title: stringResult, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
  if (null == forLaterLimit) {
    const intl17 = tmp(1119).intl;
    let stringResult1 = intl17.string(tmp(1119).t["m/HzW8"]);
  } else {
    const intl16 = tmp(1119).intl;
    const t2 = tmp(1119).t;
    const obj18 = { children: null };
    const obj19 = {
      max: forLaterLimit,
      premiumMax: tmp10,
      onClick() {
          ActionSheetActionCreatorsDefault.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
          const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
          showForLaterModal.showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
        }
    };
    obj18.children = intl16.format(tmp8 ? t2.NRF0Wh : t2.o5OLyw, obj19);
    stringResult1 = tmp15(tmp16, obj18);
  }
  obj17.description = stringResult1;
  obj17.analyticsPage = constants3.PREMIUM_UPSELL_FOR_LATER;
  obj17.upsellType = constants.FOR_LATER_MODAL_UPSELL;
  obj17.image = importDefault(tmp8 ? 13639 : 13640);
  obj3[tmp(8133).EntitlementFeatureNames.SAVED_MESSAGES] = obj17;
  const obj20 = { title: null, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl18 = tmp(1119).intl;
  obj20.title = intl18.formatToPlainString(tmp(1119).t.GNoaxo, { premiumMax });
  const obj22 = { children: null };
  const intl19 = tmp(1119).intl;
  obj22.children = intl19.format(tmp(1119).t["1kFyto"], {
    premiumMax,
    onClick() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_0(8130).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const result = closure_0(12393).showScheduledMessagesModal();
    }
  });
  obj20.description = closure_19(closure_20, obj22);
  obj20.analyticsPage = constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
  obj20.upsellType = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
  obj20.image = _modDef12402;
  obj3[tmp(8133).EntitlementFeatureNames.SCHEDULED_MESSAGES] = obj20;
  const obj24 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, imageGradientBackground: null };
  const intl20 = tmp(1119).intl;
  obj24.title = intl20.string(tmp(1119).t.ETZQx5);
  const intl21 = tmp(1119).intl;
  obj24.description = intl21.formatToPlainString(tmp(1119).t["4nlpei"], { fps: ApplicationStreamFPS.FPS_60 });
  obj24.analyticsPage = constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj24.upsellType = constants.STREAM_QUALITY_UPSELL;
  obj24.image = _modDef13643;
  const obj26 = { colors: null, start: tmp(1098).HorizontalGradient.START, end: tmp(1098).HorizontalGradient.END };
  const items = [token, token1];
  obj26.colors = items;
  obj24.imageGradientBackground = obj26;
  obj3[tmp(8133).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj24;
  return obj3;
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ image, style, useReducedMotion } = arg0);
  if (obj2.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        if (cResult[0] === image.uri) {
          if (cResult[1] === style) {
            let tmp5 = cResult[2];
          }
          return tmp5;
        }
        const obj3 = { url: image.uri, style, autoplay: true };
        const tmp7 = closure_1_19(APNGPlayer.APNGPlayer, obj3);
        cResult[0] = image.uri;
        cResult[1] = style;
        cResult[2] = tmp7;
        tmp5 = tmp7;
      }
    }
  }
  if (cResult[3] === image) {
    if (cResult[4] === style) {
      if (cResult[5] === tmp8) {
        let tmp9 = cResult[6];
      }
      return tmp9;
    }
  }
  const tmp10 = closure_1_19(FastImageDefault, { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false });
  cResult[3] = image;
  cResult[4] = style;
  cResult[5] = !useReducedMotion;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  ({ image, style, useReducedMotion } = arg0);
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        const obj2 = { url: image.uri, style, autoplay: true };
        let tmp5 = closure_1_19(APNGPlayer.APNGPlayer, obj2);
      }
      return tmp5;
    }
  }
  tmp5 = closure_1_19(FastImageDefault, { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false });
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(27);
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    if (cResult[0] === pageConfig.illustration) {
    }
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    const tmp26 = closure_1_19(View, obj2);
    pageConfig = pageConfig.illustration;
    cResult[0] = pageConfig;
    styles = styles.hero;
    cResult[1] = styles;
    cResult[2] = tmp26;
  } else if (null == pageConfig.image) {
    return null;
  } else {
    if (null == pageConfig.imageGradientBackground) {
      if (cResult[20] === styles.hero) {
        if (cResult[21] === styles.image) {
          let tmp3 = cResult[22];
        }
        if (cResult[23] === pageConfig.image) {
          if (cResult[24] === tmp3) {
          }
        }
        const obj3 = { image: pageConfig.image, style: tmp3, useReducedMotion };
        const tmp7 = closure_1_19(closure_24, obj3);
        cResult[23] = pageConfig.image;
        cResult[24] = tmp3;
        cResult[25] = useReducedMotion;
        cResult[26] = tmp7;
      }
      const items = [, ];
      ({ hero: arr[0], image: arr[1] } = styles);
      cResult[20] = styles.hero;
      cResult[21] = styles.image;
      cResult[22] = items;
      tmp3 = items;
    }
    if (cResult[3] === styles.hero) {
      if (cResult[4] === styles.image) {
        if (cResult[5] === styles.imageInGradientBackground) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === pageConfig.image) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === useReducedMotion) {
              let tmp9 = cResult[10];
            }
            if (cResult[11] === pageConfig.imageGradientBackground.colors) {
              if (cResult[12] === pageConfig.imageGradientBackground.end) {
                if (cResult[13] === pageConfig.imageGradientBackground.start) {
                  if (cResult[14] === styles.imageGradientBackground) {
                    if (cResult[15] === tmp9) {
                      let tmp13 = cResult[16];
                    }
                    if (cResult[17] === styles.imageGradientBackgroundContainer) {
                    }
                    const obj4 = { style: styles.imageGradientBackgroundContainer, children: tmp13 };
                    const tmp20 = closure_1_19(View, obj4);
                    cResult[17] = styles.imageGradientBackgroundContainer;
                    cResult[18] = tmp13;
                    cResult[19] = tmp20;
                  }
                }
              }
            }
            const obj5 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: tmp9 };
            const tmp16 = closure_1_19(LinearGradientDefault, obj5);
            cResult[11] = pageConfig.imageGradientBackground.colors;
            cResult[12] = pageConfig.imageGradientBackground.end;
            cResult[13] = pageConfig.imageGradientBackground.start;
            cResult[14] = styles.imageGradientBackground;
            cResult[15] = tmp9;
            cResult[16] = tmp16;
            tmp13 = tmp16;
          }
        }
        const obj6 = { image: pageConfig.image, style: tmp8, useReducedMotion };
        const tmp12 = closure_1_19(closure_24, obj6);
        cResult[7] = pageConfig.image;
        cResult[8] = tmp8;
        cResult[9] = useReducedMotion;
        cResult[10] = tmp12;
        tmp9 = tmp12;
      }
    }
    const items1 = [, , ];
    ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
    cResult[3] = styles.hero;
    cResult[4] = styles.image;
    cResult[5] = styles.imageInGradientBackground;
    cResult[6] = items1;
    tmp8 = items1;
  }
}) : ((arg0) => {
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    let tmp13 = closure_1_19(View, obj2);
  } else {
    tmp13 = null;
    if (null != pageConfig.image) {
      if (null != pageConfig.imageGradientBackground) {
        const obj3 = { style: styles.imageGradientBackgroundContainer, children: null };
        const obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: null };
        const obj5 = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        obj5.style = items;
        obj5.useReducedMotion = useReducedMotion;
        obj4.children = closure_1_19(closure_24, obj5);
        obj3.children = closure_1_19(LinearGradientDefault, obj4);
        let tmp3 = closure_1_19(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        obj.style = items1;
        obj.useReducedMotion = useReducedMotion;
        tmp3 = closure_1_19(closure_24, obj);
      }
    }
  }
  return tmp13;
});
ReactCompilerGating = fn(558);
let obj8 = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = legacyProps(useTier0UpsellContent[15]).c(79);
  ({ featureName, legacyProps } = arg0);
  ({ subfeatureName, analyticsLocations, onDismiss } = arg0);
  if (cResult[0] !== analyticsLocations) {
    let items = analyticsLocations;
    if (undefined === analyticsLocations) {
      items = [];
    }
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = closure_22();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class U {
      constructor() {
        return closure_1_8.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = U;
    let tmp7 = U;
    let tmp6 = items1;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = legacyProps(useTier0UpsellContent[15]);
  const stateFromStores = legacyProps(useTier0UpsellContent[42]).useStateFromStores(tmp6, tmp7);
  analyticsLocations2 = analyticsLocations2(tmp2[43])(tmp4).analyticsLocations;
  if (cResult[4] === featureName) {
    class U {
      constructor() {
        return closure_1_8.getCurrentUser();
      }
    }
    if (cResult[5] === undefined) {
      let tmp13 = cResult[6];
    }
    const premiumUpsellConfig = tmp(tmp2[45]).usePremiumUpsellConfig(tmp13, analyticsLocations2);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ThemeStore];
      class O {
        constructor() {
          return closure_1_6.theme;
        }
      }
      cResult[7] = items2;
      cResult[8] = O;
      let tmp18 = O;
      let tmp17 = items2;
    } else {
      tmp17 = cResult[7];
      tmp18 = cResult[8];
    }
    const tmpResult8 = tmp(tmp2[45]);
    const stateFromStores1 = tmp(tmp2[42]).useStateFromStores(tmp17, tmp18);
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [SelectedGuildStore];
      class V {
        constructor() {
          return closure_1_7.getGuildId();
        }
      }
      cResult[9] = items3;
      cResult[10] = V;
      let tmp22 = V;
      let tmp21 = items3;
    } else {
      tmp21 = cResult[9];
      tmp22 = cResult[10];
    }
    const tmpResult9 = tmp(tmp2[42]);
    const stateFromStores2 = tmp(tmp2[42]).useStateFromStores(tmp21, tmp22);
    const tmp26 = useTier0UpsellContent ? closure_10.TIER_0 : closure_10.TIER_2;
    if (cResult[11] === featureName) {
      if (cResult[12] === stateFromStores2) {
        if (cResult[13] === subfeatureName) {
          if (cResult[14] === tmp26) {
            if (cResult[15] === stateFromStores1) {
              if (cResult[16] === stateFromStores) {
                let tmp27 = cResult[17];
              }
              const tmp29 = closure_23(tmp27)[featureName];
              class V {
                constructor() {
                  return closure_1_7.getGuildId();
                }
              }
              const _Symbol3 = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                const items4 = [AccessibilityStore];
                class X {
                  constructor() {
                    return closure_1_5.useReducedMotion;
                  }
                }
                cResult[18] = items4;
                cResult[19] = X;
                let tmp31 = X;
                let tmp30 = items4;
              } else {
                tmp30 = cResult[18];
                tmp31 = cResult[19];
              }
              const stateFromStores3 = tmp(tmp2[42]).useStateFromStores(tmp30, tmp31);
              const tmpResult11 = tmp(tmp2[42]);
              let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(tmp2[23]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
              if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
                mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(tmp2[46]).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
                const tmpResult13 = tmp(tmp2[46]);
              }
              if (cResult[20] === analyticsLocations2) {
                class X {
                  constructor() {
                    return closure_1_5.useReducedMotion;
                  }
                }
                if (cResult[21] === undefined) {
                  if (cResult[22] === tmp29.upsellType) {
                    if (cResult[23] === useTier0UpsellContent) {
                      let tmp37 = cResult[24];
                    }
                    if (cResult[25] === analyticsLocations2) {
                      if (cResult[26] === legacyProps) {
                        if (cResult[27] === tmp29) {
                          if (cResult[28] === useTier0UpsellContent) {
                            let tmp40 = cResult[29];
                          }
                          const effect = onViewAllPerks.useEffect(tmp37, tmp40);
                          class X {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
                          ({ loading, onPress } = tmp10(tmp2[48])(useTier0UpsellContent, onViewAllPerks, tmp29.analyticsPage, undefined, tmp4));
                          if (cResult[30] !== onViewAllPerks) {
                            function ee() {
                              ChatInputUtils.dismissKeyboard();
                              ActionSheetActionCreatorsDefault.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
                              onViewAllPerks();
                            }
                            cResult[30] = onViewAllPerks;
                            class X {
                              constructor() {
                                return closure_1_5.useReducedMotion;
                              }
                            }
                            cResult[31] = ee;
                            let tmp47 = ee;
                          } else {
                            tmp47 = cResult[31];
                          }
                          if (null == tmp29) {
                            return null;
                          } else {
                            const ActionSheet = tmp(tmp2[50]).ActionSheet;
                            if (cResult[32] === tmp29) {
                              if (cResult[33] === tmp5) {
                                if (cResult[34] === stateFromStores3) {
                                  let tmp49 = cResult[35];
                                }
                                if (cResult[36] === tmp29.showBetaBadge) {
                                  if (cResult[37] === tmp5.betaTag) {
                                    let tmp52 = cResult[38];
                                  }
                                  if (cResult[39] === tmp29.title) {
                                    if (cResult[40] === tmp5.text) {
                                      let tmp56 = cResult[41];
                                    }
                                    if (cResult[42] === tmp5.description) {
                                      if (cResult[43] === tmp5.text) {
                                        let tmp60 = cResult[44];
                                      }
                                      if (cResult[45] === tmp29.description) {
                                        if (cResult[46] === tmp60) {
                                          let tmp61 = cResult[47];
                                        }
                                        if (cResult[48] === tmp5.textContainer) {
                                          if (cResult[49] === tmp52) {
                                            if (cResult[50] === tmp56) {
                                              if (cResult[51] === tmp61) {
                                                let tmp65 = cResult[52];
                                              }
                                              const Button = tmp(tmp2[53]).Button;
                                              class X {
                                                constructor() {
                                                  return closure_1_5.useReducedMotion;
                                                }
                                              }
                                              if (cResult[53] !== useTier0UpsellContent) {
                                                const string = tmp(tmp2[25]).intl.string;
                                                const t = tmp(tmp2[25]).t;
                                                class X {
                                                  constructor() {
                                                    return closure_1_5.useReducedMotion;
                                                  }
                                                }
                                                cResult[53] = useTier0UpsellContent;
                                                cResult[54] = tmp71;
                                              } else {
                                                const tmp10Result = tmp10(tmp2[54]);
                                                class X {
                                                  constructor() {
                                                    return closure_1_5.useReducedMotion;
                                                  }
                                                }
                                                if (cResult[55] === Button) {
                                                  if (cResult[56] === loading) {
                                                    if (cResult[57] === tmp69) {
                                                      if (cResult[58] === tmp70) {
                                                        if (cResult[59] === tmp10Result) {
                                                          if (cResult[60] === str2) {
                                                            let tmp74 = cResult[61];
                                                          }
                                                          const _Symbol4 = Symbol;
                                                          class X {
                                                            constructor() {
                                                              return closure_1_5.useReducedMotion;
                                                            }
                                                          }
                                                          if (cResult[63] !== tmp47) {
                                                            let obj2 = { variant: "secondary", text: tmp78, onPress: null };
                                                            class X {
                                                              constructor() {
                                                                return closure_1_5.useReducedMotion;
                                                              }
                                                            }
                                                            const tmp81 = closure_19(tmp(tmp2[53]).Button, obj2);
                                                            cResult[63] = tmp47;
                                                            cResult[64] = tmp81;
                                                            let tmp79 = tmp81;
                                                          } else {
                                                            tmp79 = cResult[64];
                                                          }
                                                          if (cResult[65] === tmp93) {
                                                            if (cResult[66] === tmp5.buttonContainer) {
                                                              if (cResult[67] === tmp74) {
                                                                if (cResult[68] === tmp79) {
                                                                  let tmp82 = cResult[69];
                                                                }
                                                                if (cResult[70] === tmp93) {
                                                                  if (cResult[71] === tmp49) {
                                                                    if (cResult[72] === tmp65) {
                                                                      if (cResult[73] === tmp82) {
                                                                        let tmp85 = cResult[74];
                                                                      }
                                                                      if (cResult[75] === ActionSheet) {
                                                                        if (cResult[76] === onDismiss) {
                                                                          if (cResult[77] === tmp85) {
                                                                            let tmp89 = cResult[78];
                                                                          }
                                                                          return tmp89;
                                                                        }
                                                                      }
                                                                      class X {
                                                                        constructor() {
                                                                          return closure_1_5.useReducedMotion;
                                                                        }
                                                                      }
                                                                      tmp91[1] = onDismiss;
                                                                      tmp91[2] = tmp85;
                                                                      const tmp92 = closure_19(ActionSheet, tmp91);
                                                                      cResult[75] = ActionSheet;
                                                                      cResult[76] = onDismiss;
                                                                      cResult[77] = tmp85;
                                                                      cResult[78] = tmp92;
                                                                      tmp89 = tmp92;
                                                                    }
                                                                  }
                                                                }
                                                                class X {
                                                                  constructor() {
                                                                    return closure_1_5.useReducedMotion;
                                                                  }
                                                                }
                                                                const items5 = [tmp49, tmp65, tmp82];
                                                                tmp87[0] = items5;
                                                                cResult[70] = tmp93;
                                                                cResult[71] = tmp49;
                                                                cResult[72] = tmp65;
                                                                cResult[73] = tmp82;
                                                                class Q {
                                                                  constructor() {
                                                                    tmp = closure_2;
                                                                    obj = closure_1(closure_2[47]);
                                                                    analyticsProperties = undefined;
                                                                    if (legacyProps != null) {
                                                                      analyticsProperties = legacyProps.analyticsProperties;
                                                                    }
                                                                    obj1 = {};
                                                                    merged = Object.assign(analyticsProperties);
                                                                    upsellType = undefined;
                                                                    if (closure_4 != null) {
                                                                      upsellType = closure_4.upsellType;
                                                                    }
                                                                    obj1.type = upsellType;
                                                                    obj1.location = location;
                                                                    obj1.location_stack = analyticsLocations;
                                                                    obj3 = closure_0(tmp[17]);
                                                                    tmp5 = PremiumSubscriptionSKUs;
                                                                    obj1.sku_id = obj3.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? tmp5.TIER_0 : tmp5.TIER_2);
                                                                    trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
                                                                    return;
                                                                  }
                                                                }
                                                                tmp85 = closure_21(tmp93, tmp87);
                                                                const tmp88 = closure_21(tmp93, tmp87);
                                                              }
                                                            }
                                                          }
                                                          const obj3 = { style: tmp5.buttonContainer, children: null };
                                                          const items6 = [tmp74, tmp79];
                                                          obj3.children = items6;
                                                          const tmp84 = closure_21(tmp93, obj3);
                                                          cResult[65] = tmp93;
                                                          cResult[66] = tmp5.buttonContainer;
                                                          class Q {
                                                            constructor() {
                                                              tmp = closure_2;
                                                              obj = closure_1(closure_2[47]);
                                                              analyticsProperties = undefined;
                                                              if (legacyProps != null) {
                                                                analyticsProperties = legacyProps.analyticsProperties;
                                                              }
                                                              obj1 = {};
                                                              merged = Object.assign(analyticsProperties);
                                                              upsellType = undefined;
                                                              if (closure_4 != null) {
                                                                upsellType = closure_4.upsellType;
                                                              }
                                                              obj1.type = upsellType;
                                                              obj1.location = location;
                                                              obj1.location_stack = analyticsLocations;
                                                              obj3 = closure_0(tmp[17]);
                                                              tmp5 = PremiumSubscriptionSKUs;
                                                              obj1.sku_id = obj3.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? tmp5.TIER_0 : tmp5.TIER_2);
                                                              trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
                                                              return;
                                                            }
                                                          }
                                                          cResult[68] = tmp79;
                                                          cResult[69] = tmp84;
                                                          tmp82 = tmp84;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj4 = { loading, onPress: tmp69, text: cResult[54], icon: tmp10Result, variant: "primary" };
                                                const tmp76 = closure_19(Button, obj4);
                                                cResult[55] = Button;
                                                cResult[56] = loading;
                                                cResult[57] = tmp69;
                                                class Q {
                                                  constructor() {
                                                    tmp = closure_2;
                                                    obj = closure_1(closure_2[47]);
                                                    analyticsProperties = undefined;
                                                    if (legacyProps != null) {
                                                      analyticsProperties = legacyProps.analyticsProperties;
                                                    }
                                                    obj1 = {};
                                                    merged = Object.assign(analyticsProperties);
                                                    upsellType = undefined;
                                                    if (closure_4 != null) {
                                                      upsellType = closure_4.upsellType;
                                                    }
                                                    obj1.type = upsellType;
                                                    obj1.location = location;
                                                    obj1.location_stack = analyticsLocations;
                                                    obj3 = closure_0(tmp[17]);
                                                    tmp5 = PremiumSubscriptionSKUs;
                                                    obj1.sku_id = obj3.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? tmp5.TIER_0 : tmp5.TIER_2);
                                                    trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
                                                    return;
                                                  }
                                                }
                                                cResult[58] = cResult[54];
                                                cResult[59] = tmp10Result;
                                                cResult[60] = "primary";
                                                cResult[61] = tmp76;
                                                tmp74 = tmp76;
                                              }
                                            }
                                          }
                                        }
                                        class X {
                                          constructor() {
                                            return closure_1_5.useReducedMotion;
                                          }
                                        }
                                        tmp67[0] = tmp5.textContainer;
                                        const items7 = [tmp52, tmp56, tmp61];
                                        tmp67[1] = items7;
                                        const tmp68 = closure_21(tmp93, tmp67);
                                        cResult[48] = tmp5.textContainer;
                                        cResult[49] = tmp52;
                                        cResult[50] = tmp56;
                                        cResult[51] = tmp61;
                                        class Q {
                                          constructor() {
                                            tmp = closure_2;
                                            obj = closure_1(closure_2[47]);
                                            analyticsProperties = undefined;
                                            if (legacyProps != null) {
                                              analyticsProperties = legacyProps.analyticsProperties;
                                            }
                                            obj1 = {};
                                            merged = Object.assign(analyticsProperties);
                                            upsellType = undefined;
                                            if (closure_4 != null) {
                                              upsellType = closure_4.upsellType;
                                            }
                                            obj1.type = upsellType;
                                            obj1.location = location;
                                            obj1.location_stack = analyticsLocations;
                                            obj3 = closure_0(tmp[17]);
                                            tmp5 = PremiumSubscriptionSKUs;
                                            obj1.sku_id = obj3.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? tmp5.TIER_0 : tmp5.TIER_2);
                                            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
                                            return;
                                          }
                                        }
                                        cResult[52] = tmp68;
                                        tmp65 = tmp68;
                                      }
                                      class X {
                                        constructor() {
                                          return closure_1_5.useReducedMotion;
                                        }
                                      }
                                      tmp63[0] = tmp60;
                                      tmp63[2] = tmp29.description;
                                      const tmp64 = closure_19(tmp(tmp2[52]).Text, tmp63);
                                      cResult[45] = tmp29.description;
                                      cResult[46] = tmp60;
                                      cResult[47] = tmp64;
                                      tmp61 = tmp64;
                                    }
                                    const items8 = [, ];
                                    class X {
                                      constructor() {
                                        return closure_1_5.useReducedMotion;
                                      }
                                    }
                                    items8[1] = tmp5.description;
                                    cResult[42] = tmp5.description;
                                    cResult[43] = tmp5.text;
                                    cResult[44] = items8;
                                    tmp60 = items8;
                                  }
                                  class X {
                                    constructor() {
                                      return closure_1_5.useReducedMotion;
                                    }
                                  }
                                  tmp58[0] = tmp5.text;
                                  tmp58[3] = tmp29.title;
                                  const tmp59 = closure_19(tmp(tmp2[52]).Text, tmp58);
                                  cResult[39] = tmp29.title;
                                  cResult[40] = tmp5.text;
                                  cResult[41] = tmp59;
                                  tmp56 = tmp59;
                                }
                                class X {
                                  constructor() {
                                    return closure_1_5.useReducedMotion;
                                  }
                                }
                                if (true === tmp29.showBetaBadge) {
                                  const obj5 = { size: null, gradient: true, style: null };
                                  class X {
                                    constructor() {
                                      return closure_1_5.useReducedMotion;
                                    }
                                  }
                                  obj5.style = tmp5.betaTag;
                                  const tmp53 = closure_19(tmp10(tmp2[51]), obj5);
                                  const tmp10Result2 = tmp10(tmp2[51]);
                                }
                                cResult[36] = tmp29.showBetaBadge;
                                cResult[37] = tmp5.betaTag;
                                cResult[38] = tmp53;
                                tmp52 = tmp53;
                              }
                            }
                            class X {
                              constructor() {
                                return closure_1_5.useReducedMotion;
                              }
                            }
                            const obj6 = { pageConfig: tmp29, styles: tmp5, useReducedMotion: stateFromStores3 };
                            const tmp51 = closure_19(closure_25, obj6);
                            cResult[32] = tmp29;
                            cResult[33] = tmp5;
                            cResult[34] = stateFromStores3;
                            cResult[35] = tmp51;
                            tmp49 = tmp51;
                          }
                          const tmp46 = tmp10(tmp2[48])(useTier0UpsellContent, onViewAllPerks, tmp29.analyticsPage, undefined, tmp4);
                        }
                      }
                    }
                    const items9 = [, , , ];
                    class X {
                      constructor() {
                        return closure_1_5.useReducedMotion;
                      }
                    }
                    items9[1] = analyticsLocations2;
                    items9[2] = useTier0UpsellContent;
                    items9[3] = legacyProps;
                    cResult[25] = analyticsLocations2;
                    cResult[26] = legacyProps;
                    cResult[27] = tmp29;
                    cResult[28] = useTier0UpsellContent;
                    cResult[29] = items9;
                    tmp40 = items9;
                  }
                }
              }
              cResult[20] = analyticsLocations2;
              let analyticsProperties;
              if (legacyProps != null) {
                analyticsProperties = legacyProps.analyticsProperties;
              }
              class Q {
                constructor() {
                  tmp = closure_2;
                  obj = closure_1(closure_2[47]);
                  analyticsProperties = undefined;
                  if (legacyProps != null) {
                    analyticsProperties = legacyProps.analyticsProperties;
                  }
                  obj1 = {};
                  merged = Object.assign(analyticsProperties);
                  upsellType = undefined;
                  if (closure_4 != null) {
                    upsellType = closure_4.upsellType;
                  }
                  obj1.type = upsellType;
                  obj1.location = location;
                  obj1.location_stack = analyticsLocations;
                  obj3 = closure_0(tmp[17]);
                  tmp5 = PremiumSubscriptionSKUs;
                  obj1.sku_id = obj3.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? tmp5.TIER_0 : tmp5.TIER_2);
                  trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
                  return;
                }
              }
              cResult[21] = analyticsProperties;
              cResult[22] = tmp29.upsellType;
              cResult[23] = useTier0UpsellContent;
              cResult[24] = Q;
              tmp37 = Q;
              const tmpResult12 = tmp(tmp2[23]);
            }
          }
        }
      }
    }
    const obj7 = { user: stateFromStores, premiumType: tmp26, theme: stateFromStores1, guildId: stateFromStores2, featureName, subfeatureName };
    cResult[11] = featureName;
    cResult[12] = stateFromStores2;
    cResult[13] = subfeatureName;
    cResult[14] = tmp26;
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores;
    cResult[17] = obj7;
    tmp27 = obj7;
    const tmpResult10 = tmp(tmp2[42]);
  }
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    initialUpsellKey = tmp(tmp2[44]).getUpsellType(featureName);
    const tmpResult14 = tmp(tmp2[44]);
  }
  cResult[4] = featureName;
  let initialUpsellKey1;
  if (legacyProps != null) {
    initialUpsellKey1 = legacyProps.initialUpsellKey;
  }
  cResult[5] = initialUpsellKey1;
  cResult[6] = initialUpsellKey;
  tmp13 = initialUpsellKey;
}) : ((analyticsLocations) => {
  ({ featureName, legacyProps } = analyticsLocations);
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  analyticsLocations = undefined;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let upsellType;
  const tmp = closure_22();
  const items = [UserStore];
  const stateFromStores = legacyProps(useTier0UpsellContent[42]).useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations = analyticsLocations(useTier0UpsellContent[43])(analyticsLocations1).analyticsLocations;
  let obj = legacyProps(useTier0UpsellContent[42]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    initialUpsellKey = tmp2(tmp3[44]).getUpsellType(featureName);
    const tmp2Result = tmp2(tmp3[44]);
  }
  const premiumUpsellConfig = legacyProps(useTier0UpsellContent[45]).usePremiumUpsellConfig(initialUpsellKey, analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  let obj2 = legacyProps(useTier0UpsellContent[45]);
  const tmp6 = analyticsLocations1;
  const items1 = [ThemeStore];
  const stateFromStores1 = legacyProps(useTier0UpsellContent[42]).useStateFromStores(items1, () => theme.theme);
  const tmp2Result6 = legacyProps(useTier0UpsellContent[42]);
  const items2 = [SelectedGuildStore];
  const obj3 = { user: stateFromStores, premiumType: useTier0UpsellContent ? closure_10.TIER_0 : closure_10.TIER_2, theme: stateFromStores1, guildId: legacyProps(useTier0UpsellContent[42]).useStateFromStores(items2, () => guildId.getGuildId()), featureName, subfeatureName: analyticsLocations.subfeatureName };
  const tmp11 = closure_23(obj3)[featureName];
  upsellType = tmp11;
  const tmp2Result7 = legacyProps(useTier0UpsellContent[42]);
  const items3 = [AccessibilityStore];
  const stateFromStores2 = legacyProps(useTier0UpsellContent[42]).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result8 = legacyProps(useTier0UpsellContent[42]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(useTier0UpsellContent[23]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2(tmp3[46]).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
    const tmp2Result10 = tmp2(tmp3[46]);
  }
  const items4 = [tmp11, analyticsLocations, useTier0UpsellContent, legacyProps];
  const effect = onViewAllPerks.useEffect(() => {
    let analyticsProperties;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj2 = {};
    const merged = Object.assign(analyticsProperties);
    upsellType = undefined;
    if (upsellType != null) {
      upsellType = upsellType.upsellType;
    }
    obj2.type = upsellType;
    obj2.location = location;
    obj2.location_stack = analyticsLocations;
    const obj = AnalyticsUtilsDefault;
    obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? options.TIER_0 : options.TIER_2);
    obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj2);
  }, items4);
  const tmp15 = analyticsLocations(useTier0UpsellContent[48])(useTier0UpsellContent, onViewAllPerks, tmp11.analyticsPage, undefined, tmp6);
  const loading = tmp15.loading;
  [][0] = onViewAllPerks;
  let tmp18Result2 = null;
  if (null != tmp11) {
    const obj4 = { startExpanded: true, onDismiss: analyticsLocations.onDismiss, children: null };
    const obj5 = { pageConfig: tmp11, styles: tmp, useReducedMotion: stateFromStores2 };
    const items5 = [closure_19(closure_25, obj5), , ];
    const obj6 = { style: tmp.textContainer, children: null };
    let tmp18Result = null;
    if (true === tmp11.showBetaBadge) {
      const obj7 = { size: tmp2(tmp3[51]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      tmp18Result = tmp18(tmp5(tmp3[51]), obj7);
      const tmp5Result = tmp5(tmp3[51]);
    }
    const items6 = [tmp18Result, , ];
    const obj8 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: tmp11.title };
    items6[1] = closure_19(tmp2(tmp3[52]).Text, obj8);
    const obj9 = { style: null, variant: "text-sm/normal", children: null };
    const items7 = [, ];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    obj9.style = items7;
    obj9.children = tmp11.description;
    items6[2] = closure_19(tmp2(tmp3[52]).Text, obj9);
    obj6.children = items6;
    items5[1] = closure_21(upsellType, obj6);
    const obj10 = { style: tmp.buttonContainer, children: null };
    const obj11 = { loading, onPress: null, text: null, icon: null, variant: null };
    let onPress = null;
    if (!loading) {
      onPress = tmp15.onPress;
    }
    obj11.onPress = onPress;
    const intl = tmp2(tmp3[25]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[25]).t;
    if (useTier0UpsellContent) {
      let stringResult = string(t.cM8bbx);
    } else {
      stringResult = string(t["8x0jKT"]);
    }
    obj11.text = stringResult;
    obj11.icon = tmp5(tmp3[54]);
    let str = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str2 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str2 = "experimental_premium-basic";
      }
      str = str2;
    }
    const obj12 = { children: null };
    obj11.variant = str;
    const items8 = [closure_19(tmp2(tmp3[53]).Button, obj11), ];
    const obj13 = { variant: "secondary", text: null, onPress: null };
    const intl2 = tmp2(tmp3[25]).intl;
    obj13.text = intl2.string(tmp2(tmp3[25]).t.PcTCB7);
    obj13.onPress = tmp16;
    items8[1] = closure_19(tmp2(tmp3[53]).Button, obj13);
    obj10.children = items8;
    items5[2] = closure_21(upsellType, obj10);
    obj12.children = items5;
    obj4.children = closure_21(upsellType, obj12);
    tmp18Result2 = tmp18(tmp2(tmp3[50]).ActionSheet, obj4);
  }
  return tmp18Result2;
});
