// Module ID: 8855
// Function ID: 8856
// Name: shouldOpenPremiumUpsellActionSheet
// Dependencies: [7491, 1105, 7494, 8856, 2]
// Exports: default

// Module 8855 (shouldOpenPremiumUpsellActionSheet)
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7491 */;
import MobileStickerPickerUpsellRestyleExperiment from "MobileStickerPickerUpsellRestyleExperiment" /* 8856 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (ConstantsIOS.UpsellTypes.UPLOAD === initialUpsellKey) {
    const INCREASED_FILE_UPLOAD_SIZE = tmp(7494).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
    openPremiumUpsellActionSheetDefault(INCREASED_FILE_UPLOAD_SIZE, undefined, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    const EMOJIS_EVERYWHERE = tmp(7494).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
    openPremiumUpsellActionSheetDefault(EMOJIS_EVERYWHERE, undefined, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    const ANIMATED_EMOJIS = tmp(7494).EntitlementFeatureNames.ANIMATED_EMOJIS;
    openPremiumUpsellActionSheetDefault(ANIMATED_EMOJIS, undefined, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    const tmpResult = MobileStickerPickerUpsellRestyleExperiment;
    let flag4 = tmpResult.getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      const STICKERS_EVERYWHERE = tmp(7494).EntitlementFeatureNames.STICKERS_EVERYWHERE;
      openPremiumUpsellActionSheetDefault(STICKERS_EVERYWHERE, undefined, undefined, undefined, initialUpsellKey.appEntryKey);
      flag4 = true;
    }
    return flag4;
  } else if (ConstantsIOS.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    const SOUNDBOARD_EVERYWHERE = tmp(7494).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
    openPremiumUpsellActionSheetDefault(SOUNDBOARD_EVERYWHERE, undefined, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    const STREAM_HIGH_QUALITY = tmp(7494).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
    openPremiumUpsellActionSheetDefault(STREAM_HIGH_QUALITY, undefined, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else {
    return false;
  }
};
