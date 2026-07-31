// Module ID: 6201
// Function ID: 6202
// Name: maybeOpenPremiumUpsellActionSheet
// Dependencies: [6202, 691, 6204, 2]
// Exports: default

// Module 6201 (maybeOpenPremiumUpsellActionSheet)
const result = require("EntitlementFeatureNames").fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (require(691) /* keys */.UpsellTypes.UPLOAD === initialUpsellKey) {
    importDefault(6202)(tmp(6204).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(691).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    importDefault(6202)(tmp(6204).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    importDefault(6202)(tmp(6204).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(691).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    importDefault(6202)(tmp(6204).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    importDefault(6202)(tmp(6204).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
