// Module ID: 19177
// Function ID: 19178
// Name: useSoundboardSoundLock
// Dependencies: [19, 1383, 6060, 504, 7525, 2047, 19178, 9793, 5073, 5712, 1113, 9920, 2]
// Exports: useSoundboardSoundLock

// Module 19177 (useSoundboardSoundLock)
import intl3 from "intl" /* 1113 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2047 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5073 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import SoundboardConstants from "SoundboardConstants" /* 6060 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9793 */;
import BoostGemIcon from "BoostGemIcon" /* 9920 */;
import SoundboardSoundPreviewMenuExperiment2 from "SoundboardSoundPreviewMenuExperiment" /* 19178 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
let result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export function useSoundboardSoundLock(sound, channel) {
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
      let tmp20;
      const tmp17 = openPremiumUpsellActionSheetDefault;
      const SOUNDBOARD_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
      if (returnOnUpsellDismiss) {
        tmp20 = arg0;
      }
      tmp17(SOUNDBOARD_EVERYWHERE, undefined, tmp20);
    } else if (!sound.available) {
      const obj = { text: intl.string(intl3.t.MDOXJR), icon: BoostGemIcon.BoostGemIcon, duration: 3000 };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open("DISABLED_SOUND_PRESSED", obj);
    }
  }, items1);
  if (!result) {
    let stringResult;
    if (tmp7) {
      const intl2 = tmp(1113).intl;
      stringResult = intl2.string(tmp(1113).t.BARTXV);
    } else if (!sound.available) {
      let intl = tmp(1113).intl;
      stringResult = intl.string(tmp(1113).t.MDOXJR);
    }
    lockedAccessibilityHint = stringResult;
  }
  return { isLocked, lockedAccessibilityHint, onLockedPress };
}
