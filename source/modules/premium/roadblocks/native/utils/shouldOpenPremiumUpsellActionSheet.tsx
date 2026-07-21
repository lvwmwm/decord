// Module ID: 7941
// Function ID: 63360
// Name: _maybeOpenPremiumUpsellActionSheet
// Dependencies: []
// Exports: default

// Module 7941 (_maybeOpenPremiumUpsellActionSheet)
function _maybeOpenPremiumUpsellActionSheet(ANIMATED_EMOJIS) {
  importDefault(dependencyMap[0])(ANIMATED_EMOJIS);
  return true;
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (require(dependencyMap[1]).UpsellTypes.UPLOAD === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(dependencyMap[2]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (require(dependencyMap[1]).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(dependencyMap[2]).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (require(dependencyMap[1]).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(dependencyMap[2]).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (require(dependencyMap[1]).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(dependencyMap[2]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (require(dependencyMap[1]).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    _maybeOpenPremiumUpsellActionSheet(require(dependencyMap[2]).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
