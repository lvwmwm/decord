// Module ID: 8732
// Function ID: 8733
// Name: isSoundboardSectionNitroLocked
// Dependencies: [4797, 8421, 691, 38, 2]
// Exports: getUpsellType, isSoundboardSectionNitroLocked

// Module 8732 (isSoundboardSectionNitroLocked)
const result = require("keys").fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === require(4797) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(featureName) {
  if (require(8421) /* EntitlementFeatureNames */.EntitlementFeatureNames.ANIMATED_EMOJIS === featureName) {
    return tmp(691).UpsellTypes.ANIMATED_EMOJI;
  } else if (tmp(8421).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.GLOBAL_EMOJI;
  } else if (tmp(8421).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return tmp(691).UpsellTypes.UPLOAD;
  } else if (tmp(8421).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.SOUNDBOARD;
  } else if (tmp(8421).EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return tmp(691).UpsellTypes.CLIENT_THEMES;
  } else if (tmp(8421).EntitlementFeatureNames.APP_ICONS === featureName) {
    return tmp(691).UpsellTypes.APP_ICONS;
  } else if (tmp(8421).EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return tmp(691).UpsellTypes.FOR_LATER;
  } else if (tmp(8421).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return tmp(691).UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    importDefault(38)(false, "Missing featureName: " + featureName);
  }
};
