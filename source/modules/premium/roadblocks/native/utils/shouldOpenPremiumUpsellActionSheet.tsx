// Module ID: 8188
// Function ID: 8189
// Name: maybeOpenPremiumUpsellActionSheet
// Dependencies: [7605, 688, 7608, 8189, 2]
// Exports: default

// Module 8188 (maybeOpenPremiumUpsellActionSheet)
import set from "set" /* 2 */;
import keys from "keys" /* 688 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7605 */;

const result = set.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (keys.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7608).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(688).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7608).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(688).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7608).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(688).UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    let flag4 = tmp(8189).getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      openPremiumUpsellActionSheetDefault(tmp(7608).EntitlementFeatureNames.STICKERS_EVERYWHERE);
      flag4 = true;
    }
    return flag4;
  } else if (tmp(688).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7608).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(688).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7608).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
