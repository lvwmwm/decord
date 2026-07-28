// Module ID: 6178
// Function ID: 55191
// Name: _maybeOpenPremiumUpsellActionSheet
// Dependencies: [6179, 668, 6181, 2]
// Exports: default

// Module 6178 (_maybeOpenPremiumUpsellActionSheet)
function _maybeOpenPremiumUpsellActionSheet(ANIMATED_EMOJIS) {
  importDefault(6179)(ANIMATED_EMOJIS);
  return true;
}
const result = require("EntitlementFeatureNames").fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (require(668) /* keys */.UpsellTypes.UPLOAD === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(6181) /* EntitlementFeatureNames */.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (require(668) /* keys */.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(6181) /* EntitlementFeatureNames */.EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (require(668) /* keys */.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(6181) /* EntitlementFeatureNames */.EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (require(668) /* keys */.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(6181) /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (require(668) /* keys */.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(6181) /* EntitlementFeatureNames */.EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
