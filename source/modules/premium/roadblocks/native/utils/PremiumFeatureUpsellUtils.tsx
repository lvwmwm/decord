// Module ID: 7957
// Function ID: 63479
// Name: isSoundboardSectionNitroLocked
// Dependencies: [4585, 7951, 668, 44, 2]
// Exports: getUpsellType, isSoundboardSectionNitroLocked

// Module 7957 (isSoundboardSectionNitroLocked)
const result = require("keys").fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(featureName) {
  if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.ANIMATED_EMOJIS === featureName) {
    return require(668) /* keys */.UpsellTypes.ANIMATED_EMOJI;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return require(668) /* keys */.UpsellTypes.GLOBAL_EMOJI;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return require(668) /* keys */.UpsellTypes.UPLOAD;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return require(668) /* keys */.UpsellTypes.SOUNDBOARD;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return require(668) /* keys */.UpsellTypes.CLIENT_THEMES;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.APP_ICONS === featureName) {
    return require(668) /* keys */.UpsellTypes.APP_ICONS;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return require(668) /* keys */.UpsellTypes.FOR_LATER;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return require(668) /* keys */.UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    importDefault(44)(false, "Missing featureName: " + featureName);
  }
};
