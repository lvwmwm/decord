// Module ID: 9249
// Function ID: 9250
// Name: maybeOpenPremiumUpsellActionSheet
// Dependencies: [7782, 688, 7785, 9250, 2]
// Exports: default

// Module 9249 (maybeOpenPremiumUpsellActionSheet)
import set from "set" /* 2 */;
import keys from "keys" /* 688 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7782 */;

const result = set.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (keys.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7785).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(688).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7785).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(688).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7785).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(688).UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    let flag4 = tmp(9250).getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      openPremiumUpsellActionSheetDefault(tmp(7785).EntitlementFeatureNames.STICKERS_EVERYWHERE);
      flag4 = true;
    }
    return flag4;
  } else if (tmp(688).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7785).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(688).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7785).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
