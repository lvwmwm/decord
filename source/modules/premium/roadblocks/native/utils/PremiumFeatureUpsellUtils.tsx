// Module ID: 7946
// Function ID: 63407
// Name: isSoundboardSectionNitroLocked
// Dependencies: []
// Exports: getUpsellType, isSoundboardSectionNitroLocked

// Module 7946 (isSoundboardSectionNitroLocked)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === require(dependencyMap[0]).SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(featureName) {
  if (require(dependencyMap[1]).EntitlementFeatureNames.ANIMATED_EMOJIS === featureName) {
    return require(dependencyMap[2]).UpsellTypes.ANIMATED_EMOJI;
  } else if (require(dependencyMap[1]).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return require(dependencyMap[2]).UpsellTypes.GLOBAL_EMOJI;
  } else if (require(dependencyMap[1]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return require(dependencyMap[2]).UpsellTypes.UPLOAD;
  } else if (require(dependencyMap[1]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return require(dependencyMap[2]).UpsellTypes.SOUNDBOARD;
  } else if (require(dependencyMap[1]).EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return require(dependencyMap[2]).UpsellTypes.CLIENT_THEMES;
  } else if (require(dependencyMap[1]).EntitlementFeatureNames.APP_ICONS === featureName) {
    return require(dependencyMap[2]).UpsellTypes.APP_ICONS;
  } else if (require(dependencyMap[1]).EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return require(dependencyMap[2]).UpsellTypes.FOR_LATER;
  } else if (require(dependencyMap[1]).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return require(dependencyMap[2]).UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    importDefault(dependencyMap[3])(false, "Missing featureName: " + featureName);
  }
};
