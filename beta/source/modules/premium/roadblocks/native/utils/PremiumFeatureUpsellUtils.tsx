// Module ID: 10259
// Function ID: 10260
// Name: PremiumFeatureUpsellUtils
// Dependencies: [1078, 5266, 8133, 38, 1098, 2]
// Exports: getAnalyticsPage, getUpsellType, isSoundboardSectionNitroLocked

// Module 10259 (PremiumFeatureUpsellUtils)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1078 */;
import SoundboardTypes from "SoundboardTypes" /* 5266 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8133 */;
import size from "module_2" /* 2 */;

const AnalyticsPages = Constants.AnalyticsPages;
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === SoundboardTypes.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getAnalyticsPage = function getAnalyticsPage(featureName) {
  if (EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_ANIMATED_EMOJI;
  } else if (tmp(8133).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  } else if (tmp(8133).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_STICKERS_EVERYWHERE;
  } else if (tmp(8133).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_FILE_UPLOAD;
  } else if (tmp(8133).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  } else if (tmp(8133).EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_CLIENT_THEMES;
  } else if (tmp(8133).EntitlementFeatureNames.APP_ICONS === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_APP_ICONS;
  } else if (tmp(8133).EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_FOR_LATER;
  } else if (tmp(8133).EntitlementFeatureNames.SCHEDULED_MESSAGES === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
  } else if (tmp(8133).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return AnalyticsPages.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    _modDef38(false, "Missing featureName: " + featureName);
  }
};
export const getUpsellType = function getUpsellType(EMOJIS_EVERYWHERE) {
  if (EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.ANIMATED_EMOJI;
  } else if (tmp(8133).EntitlementFeatureNames.EMOJIS_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.GLOBAL_EMOJI;
  } else if (tmp(8133).EntitlementFeatureNames.STICKERS_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.GLOBAL_STICKER;
  } else if (tmp(8133).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.UPLOAD;
  } else if (tmp(8133).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.SOUNDBOARD;
  } else if (tmp(8133).EntitlementFeatureNames.CLIENT_THEMES === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.CLIENT_THEMES;
  } else if (tmp(8133).EntitlementFeatureNames.APP_ICONS === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.APP_ICONS;
  } else if (tmp(8133).EntitlementFeatureNames.SAVED_MESSAGES === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.FOR_LATER;
  } else if (tmp(8133).EntitlementFeatureNames.SCHEDULED_MESSAGES === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.SCHEDULED_MESSAGES;
  } else if (tmp(8133).EntitlementFeatureNames.STREAM_HIGH_QUALITY === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.STREAM_HIGH_QUALITY;
  } else if (tmp(8133).EntitlementFeatureNames.SHOP_MEMBER_PRICING === EMOJIS_EVERYWHERE) {
    return tmp(1098).UpsellTypes.SHOP_MEMBER_PRICING;
  } else {
    const _HermesInternal = HermesInternal;
    _modDef38(false, "Missing featureName: " + EMOJIS_EVERYWHERE);
  }
};
