// Module ID: 7948
// Function ID: 63420
// Name: _maybeOpenPremiumUpsellActionSheet
// Dependencies: [7949, 668, 7951, 2]
// Exports: default

// Module 7948 (_maybeOpenPremiumUpsellActionSheet)
function _maybeOpenPremiumUpsellActionSheet(ANIMATED_EMOJIS) {
  importDefault(7949)(ANIMATED_EMOJIS);
  return true;
}
const result = require("EntitlementFeatureNames").fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (require(668) /* keys */.UpsellTypes.UPLOAD === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (require(668) /* keys */.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (require(668) /* keys */.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (require(668) /* keys */.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (require(668) /* keys */.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
