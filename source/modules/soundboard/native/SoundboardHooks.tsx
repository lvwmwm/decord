// Module ID: 15754
// Function ID: 121582
// Name: useSoundButtonStyleConfig
// Dependencies: [5, 31, 4122, 1278, 15747, 5188, 1450, 566, 3976, 1331, 5733, 2]
// Exports: useMaybeFetchSoundboardSounds, useSoundButtonStyleConfig

// Module 15754 (useSoundButtonStyleConfig)
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import SOUND_BUTTON_HEIGHT from "SOUND_BUTTON_HEIGHT";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

let closure_7;
let closure_8;
const require = arg1;
({ SOUNDS_PER_ROW: closure_7, SOUND_ROW_PADDING: closure_8 } = SOUND_BUTTON_HEIGHT);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export const useSoundButtonStyleConfig = function useSoundButtonStyleConfig() {
  return { buttonWidth: (Math.min(ACTION_SHEET_MAX_WIDTH, importDefault(1450)().width) - closure_8) / closure_7 };
};
export const useMaybeFetchSoundboardSounds = function useMaybeFetchSoundboardSounds(shouldFetch) {
  shouldFetch = shouldFetch.shouldFetch;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = shouldFetch(566).useStateFromStores(items, () => outer1_5.saturation);
  let obj = shouldFetch(566);
  const items1 = [closure_6];
  const items2 = [stateFromStores, shouldFetch(566).useStateFromStores(items1, () => shouldFetch(outer1_2[8]).isThemeDark(outer1_6.theme)), shouldFetch];
  const effect = React.useEffect(() => {
    function _fetchAndHydrateColors() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_3(tmp);
      return obj(...arguments);
    }
    !(function fetchAndHydrateColors() {
      return _fetchAndHydrateColors(...arguments);
    })();
  }, items2);
};
