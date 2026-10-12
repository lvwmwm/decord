// Module ID: 9277
// Function ID: 9278
// Name: shouldOpenPremiumUpsellActionSheet
// Dependencies: [9278, 1105, 9281, 9536, 2]
// Exports: default

// Module 9277 (shouldOpenPremiumUpsellActionSheet)
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9278 */;
import MobileStickerPickerUpsellRestyleExperiment from "MobileStickerPickerUpsellRestyleExperiment" /* 9536 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (ConstantsIOS.UpsellTypes.UPLOAD === initialUpsellKey) {
    const INCREASED_FILE_UPLOAD_SIZE = tmp(9281).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
    openPremiumUpsellActionSheetDefault(INCREASED_FILE_UPLOAD_SIZE, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    const EMOJIS_EVERYWHERE = tmp(9281).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
    openPremiumUpsellActionSheetDefault(EMOJIS_EVERYWHERE, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    const ANIMATED_EMOJIS = tmp(9281).EntitlementFeatureNames.ANIMATED_EMOJIS;
    openPremiumUpsellActionSheetDefault(ANIMATED_EMOJIS, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    const tmpResult = MobileStickerPickerUpsellRestyleExperiment;
    let flag4 = tmpResult.getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      const STICKERS_EVERYWHERE = tmp(9281).EntitlementFeatureNames.STICKERS_EVERYWHERE;
      openPremiumUpsellActionSheetDefault(STICKERS_EVERYWHERE, undefined, undefined, initialUpsellKey.appEntryKey);
      flag4 = true;
    }
    return flag4;
  } else if (ConstantsIOS.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    const SOUNDBOARD_EVERYWHERE = tmp(9281).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
    openPremiumUpsellActionSheetDefault(SOUNDBOARD_EVERYWHERE, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    const STREAM_HIGH_QUALITY = tmp(9281).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
    openPremiumUpsellActionSheetDefault(STREAM_HIGH_QUALITY, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else {
    return false;
  }
};
