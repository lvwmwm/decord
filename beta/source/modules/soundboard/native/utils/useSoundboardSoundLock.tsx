// Module ID: 16896
// Function ID: 16897
// Name: useSoundboardSoundLock
// Dependencies: [19, 1372, 5321, 504, 6762, 4488, 16897, 7270, 7273, 4528, 9530, 1115, 2]
// Exports: useSoundboardSoundLock

// Module 16896 (useSoundboardSoundLock)
import intl3 from "intl" /* 1115 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import SoundboardConstants from "SoundboardConstants" /* 5321 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7270 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7273 */;
import AssetRegistryDefault from "AssetRegistry" /* 9530 */;
import SoundboardSoundPreviewMenuExperiment2 from "SoundboardSoundPreviewMenuExperiment" /* 16897 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
let result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = function useSoundboardSoundLock(sound, channel) {
  let closure_1;
  let currentUser;
  _require = sound;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("SoundboardUtils");
  const result = obj2.canUseSoundboardSound(stateFromStores, sound, channel);
  const isLocked = !result;
  const obj3 = PremiumUtilsDefault;
  const result1 = obj3.canUseSoundboardEverywhere(stateFromStores);
  let tmp7 = !result1 && sound.guildId !== channel.guild_id;
  if (tmp7) {
    tmp7 = sound.guildId !== DEFAULT_SOUND_GUILD_ID;
  }
  importDefault = tmp7;
  const items1 = [tmp7, sound.available];
  let lockedAccessibilityHint;
  const onLockedPress = react.useCallback((arg0) => {
    let intl;
    const tmp = closure_1;
    if (tmp) {
      const SoundboardSoundPreviewMenuExperiment = SoundboardSoundPreviewMenuExperiment2.SoundboardSoundPreviewMenuExperiment;
      const returnOnUpsellDismiss = SoundboardSoundPreviewMenuExperiment.getConfig({ location: "PremiumUpsellActionSheet" }).returnOnUpsellDismiss;
      const tmp17 = openPremiumUpsellActionSheetDefault;
      const SOUNDBOARD_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
      let tmp20;
      if (returnOnUpsellDismiss) {
        tmp20 = arg0;
      }
      tmp17(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp20);
    } else if (!sound.available) {
      const obj = { key: "DISABLED_SOUND_PRESSED", icon: AssetRegistryDefault, content: intl.string(intl3.t.MDOXJR), toastDurationMs: 3000 };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open(obj);
    }
  }, items1);
  if (!result) {
    let stringResult;
    if (tmp7) {
      const intl2 = tmp(1115).intl;
      stringResult = intl2.string(tmp(1115).t.BARTXV);
    } else if (!sound.available) {
      let intl = tmp(1115).intl;
      stringResult = intl.string(tmp(1115).t.MDOXJR);
    }
    lockedAccessibilityHint = stringResult;
  }
  return { isLocked, lockedAccessibilityHint, onLockedPress };
};
