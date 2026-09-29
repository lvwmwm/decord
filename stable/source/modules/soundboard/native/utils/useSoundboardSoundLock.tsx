// Module ID: 17541
// Function ID: 17542
// Name: useSoundboardSoundLock
// Dependencies: [19, 1372, 5258, 504, 7618, 4446, 17542, 8125, 8128, 4486, 10366, 1115, 2]
// Exports: useSoundboardSoundLock

// Module 17541 (useSoundboardSoundLock)
import util from "util" /* 1115 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4446 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4486 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8125 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8128 */;
import _modDef10366 from "module_10366" /* 10366 */;
import SoundboardSoundPreviewMenuExperiment2 from "SoundboardSoundPreviewMenuExperiment" /* 17542 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const DEFAULT_SOUND_GUILD_ID = fn(5258).DEFAULT_SOUND_GUILD_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = function useSoundboardSoundLock(sound, channel) {
  _require = sound;
  let BARTXV = dependencyMap;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  const result = require("SoundboardUtils").canUseSoundboardSound(stateFromStores, sound, channel);
  let obj2 = require("SoundboardUtils");
  const tmp4 = !result;
  const result1 = PremiumUtilsDefault.canUseSoundboardEverywhere(stateFromStores);
  let tmp6 = !result1;
  if (!result1) {
    tmp6 = sound.guildId !== channel.guild_id;
  }
  if (tmp6) {
    tmp6 = sound.guildId !== DEFAULT_SOUND_GUILD_ID;
  }
  importDefault = tmp6;
  const items1 = [tmp6, sound.available];
  if (result) {
    const obj4 = { isLocked: tmp4, lockedAccessibilityHint: undefined, onLockedPress: tmp8 };
    return obj4;
  } else if (tmp6) {
    const intl2 = tmp(1115).intl;
    BARTXV = tmp(1115).t.BARTXV;
    let stringResult = intl2.string(BARTXV);
  } else if (!sound.available) {
    let intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.MDOXJR);
  }
};
