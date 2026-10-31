// Module ID: 9792
// Function ID: 9793
// Name: shouldOpenPremiumUpsellActionSheet
// Dependencies: [9793, 1092, 5073, 10046, 2]
// Exports: default

// Module 9792 (shouldOpenPremiumUpsellActionSheet)
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9793 */;
import MobileStickerPickerUpsellRestyleExperiment from "MobileStickerPickerUpsellRestyleExperiment" /* 10046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  let analyticsLocations;
  let analyticsLocations2;
  let analyticsLocations3;
  let analyticsLocations4;
  let analyticsLocations5;
  let analyticsLocations6;
  let appEntryKey;
  let appEntryKey2;
  let appEntryKey3;
  let appEntryKey4;
  let appEntryKey5;
  let appEntryKey6;
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (ConstantsIOS.UpsellTypes.UPLOAD === initialUpsellKey) {
    const INCREASED_FILE_UPLOAD_SIZE = tmp(5073).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
    ({ analyticsLocations: analyticsLocations6, appEntryKey: appEntryKey6 } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(INCREASED_FILE_UPLOAD_SIZE, analyticsLocations6, undefined, appEntryKey6);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    const EMOJIS_EVERYWHERE = tmp(5073).EntitlementFeatureNames.EMOJIS_EVERYWHERE;
    ({ analyticsLocations: analyticsLocations5, appEntryKey: appEntryKey5 } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(EMOJIS_EVERYWHERE, analyticsLocations5, undefined, appEntryKey5);
    return true;
  } else if (ConstantsIOS.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    const ANIMATED_EMOJIS = tmp(5073).EntitlementFeatureNames.ANIMATED_EMOJIS;
    ({ analyticsLocations: analyticsLocations4, appEntryKey: appEntryKey4 } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(ANIMATED_EMOJIS, analyticsLocations4, undefined, appEntryKey4);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    const tmpResult = MobileStickerPickerUpsellRestyleExperiment;
    let flag4 = tmpResult.getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      const STICKERS_EVERYWHERE = tmp(5073).EntitlementFeatureNames.STICKERS_EVERYWHERE;
      ({ analyticsLocations: analyticsLocations3, appEntryKey: appEntryKey3 } = initialUpsellKey);
      openPremiumUpsellActionSheetDefault(STICKERS_EVERYWHERE, analyticsLocations3, undefined, appEntryKey3);
      flag4 = true;
    }
    return flag4;
  } else if (ConstantsIOS.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    const SOUNDBOARD_EVERYWHERE = tmp(5073).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
    ({ analyticsLocations: analyticsLocations2, appEntryKey: appEntryKey2 } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(SOUNDBOARD_EVERYWHERE, analyticsLocations2, undefined, appEntryKey2);
    return true;
  } else if (ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    const STREAM_HIGH_QUALITY = tmp(5073).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
    ({ analyticsLocations, appEntryKey } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(STREAM_HIGH_QUALITY, analyticsLocations, undefined, appEntryKey);
    return true;
  } else {
    return false;
  }
};
