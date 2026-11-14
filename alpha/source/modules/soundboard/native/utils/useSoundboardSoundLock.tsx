// Module ID: 19221
// Function ID: 19222
// Name: useSoundboardSoundLock
// Dependencies: [19, 1388, 6371, 504, 13021, 2174, 9035, 9037, 6015, 1113, 9981, 2]
// Exports: useSoundboardSoundLock

// Module 19221 (useSoundboardSoundLock)
import intl3 from "intl" /* 1113 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import SoundboardConstants from "SoundboardConstants" /* 6371 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9035 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9037 */;
import BoostGemIcon from "BoostGemIcon" /* 9981 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
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
  const onLockedPress = react.useCallback(() => {
    let intl;
    const tmp = closure_1;
    if (tmp) {
      const tmp15 = openPremiumUpsellActionSheetDefault;
      tmp15(EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE, undefined, "stack");
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
