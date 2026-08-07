// Module ID: 8309
// Function ID: 8310
// Name: maybeOpenPremiumUpsellActionSheet
// Dependencies: [8310, 691, 8313, 2]
// Exports: default

// Module 8309 (maybeOpenPremiumUpsellActionSheet)
const result = require("EntitlementFeatureNames").fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (require(691) /* keys */.UpsellTypes.UPLOAD === initialUpsellKey) {
    importDefault(8310)(tmp(8313).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(691).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    importDefault(8310)(tmp(8313).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    importDefault(8310)(tmp(8313).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(691).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    importDefault(8310)(tmp(8313).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    importDefault(8310)(tmp(8313).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
