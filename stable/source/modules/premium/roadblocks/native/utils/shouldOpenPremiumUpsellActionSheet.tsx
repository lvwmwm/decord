// Module ID: 9450
// Function ID: 9451
// Name: shouldOpenPremiumUpsellActionSheet
// Dependencies: [7952, 1093, 7955, 9451, 2]
// Exports: default

// Module 9450 (shouldOpenPremiumUpsellActionSheet)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7952 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (ConstantsIOS.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7955).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(1093).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7955).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(1093).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7955).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(1093).UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    let flag4 = tmp(9451).getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      openPremiumUpsellActionSheetDefault(tmp(7955).EntitlementFeatureNames.STICKERS_EVERYWHERE);
      flag4 = true;
    }
    return flag4;
  } else if (tmp(1093).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7955).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(1093).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7955).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
