// Module ID: 15619
// Function ID: 119303
// Name: useSoundButtonStyleConfig
// Dependencies: [0, 0, 0, 4294967295, 0, 0, 0, 0, 0]
// Exports: useMaybeFetchSoundboardSounds, useSoundButtonStyleConfig

// Module 15619 (useSoundButtonStyleConfig)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import result from "result";
import { ACTION_SHEET_MAX_WIDTH } from "result";

let closure_6 = importDefault(dependencyMap[3]);
({ SOUNDS_PER_ROW: closure_7, SOUND_ROW_PADDING: closure_8 } = result);
result = arg1(dependencyMap[11]).fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export const useSoundButtonStyleConfig = function useSoundButtonStyleConfig() {
  return { buttonWidth: (Math.min(ACTION_SHEET_MAX_WIDTH, importDefault(dependencyMap[6])().width) - closure_8) / closure_7 };
};
export const useMaybeFetchSoundboardSounds = function useMaybeFetchSoundboardSounds(shouldFetch) {
  shouldFetch = shouldFetch.shouldFetch;
  const arg1 = shouldFetch;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => saturation.saturation);
  const obj = arg1(dependencyMap[7]);
  const items1 = [closure_6];
  const items2 = [stateFromStores, arg1(dependencyMap[7]).useStateFromStores(items1, () => shouldFetch(closure_2[8]).isThemeDark(theme.theme)), shouldFetch];
  const effect = React.useEffect(() => {
    function _fetchAndHydrateColors() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _fetchAndHydrateColors = obj;
      return obj(...arguments);
    }
    !function fetchAndHydrateColors() {
      return _fetchAndHydrateColors(...arguments);
    }();
  }, items2);
};
