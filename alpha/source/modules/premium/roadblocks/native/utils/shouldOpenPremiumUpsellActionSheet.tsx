// Module ID: 9215
// Function ID: 9216
// Name: shouldOpenPremiumUpsellActionSheet
// Dependencies: [9216, 1105, 9219, 9468, 2]
// Exports: default

// Module 9215 (shouldOpenPremiumUpsellActionSheet)
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9216 */;
import MobileStickerPickerUpsellRestyleExperiment from "MobileStickerPickerUpsellRestyleExperiment" /* 9468 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (ConstantsIOS.UpsellTypes.UPLOAD === initialUpsellKey) {
    const INCREASED_FILE_UPLOAD_SIZE = tmp(9219).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
    openPremiumUpsellActionSheetDefault(INCREASED_FILE_UPLOAD_SIZE, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    const EMOJIS_EVERYWHERE = tmp(9219).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
    openPremiumUpsellActionSheetDefault(EMOJIS_EVERYWHERE, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    const ANIMATED_EMOJIS = tmp(9219).EntitlementFeatureNames.ANIMATED_EMOJIS;
    openPremiumUpsellActionSheetDefault(ANIMATED_EMOJIS, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    const tmpResult = MobileStickerPickerUpsellRestyleExperiment;
    let flag4 = tmpResult.getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      const STICKERS_EVERYWHERE = tmp(9219).EntitlementFeatureNames.STICKERS_EVERYWHERE;
      openPremiumUpsellActionSheetDefault(STICKERS_EVERYWHERE, undefined, undefined, initialUpsellKey.appEntryKey);
      flag4 = true;
    }
    return flag4;
  } else if (ConstantsIOS.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    const SOUNDBOARD_EVERYWHERE = tmp(9219).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
    openPremiumUpsellActionSheetDefault(SOUNDBOARD_EVERYWHERE, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    const STREAM_HIGH_QUALITY = tmp(9219).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
    openPremiumUpsellActionSheetDefault(STREAM_HIGH_QUALITY, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else {
    return false;
  }
};
