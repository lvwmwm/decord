// Module ID: 16893
// Function ID: 16894
// Name: SoundboardHooks
// Dependencies: [5, 19, 4825, 1182, 16885, 6572, 1479, 504, 4685, 2026, 6756, 2]
// Exports: useMaybeFetchSoundboardSounds, useSoundButtonStyleConfig

// Module 16893 (SoundboardHooks)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 16885 */;
import size from "module_2" /* 2 */;

let c0, c1;

let metroImportAll;
let metroImportDefault;
({ SOUNDS_PER_ROW: metroImportDefault, SOUND_ROW_PADDING: metroImportAll } = SoundboardStyleConstants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export const useSoundButtonStyleConfig = function useSoundButtonStyleConfig() {
  const obj = { buttonWidth: (Math.min(ACTION_SHEET_MAX_WIDTH, useWindowDimensionsDefault().width) - metroImportAll) / metroImportDefault };
  return obj;
};
export const useMaybeFetchSoundboardSounds = function useMaybeFetchSoundboardSounds(shouldFetch) {
  let saturation;
  let theme;
  shouldFetch = shouldFetch.shouldFetch;
  let obj = shouldFetch(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
  let obj2 = shouldFetch(504);
  const items1 = [ThemeStore];
  const items2 = [
    stateFromStores,
    obj2.useStateFromStores(items1, () => {
      const obj = shouldFetch(dependencyMap[8]);
      return obj.isThemeDark(theme.theme);
    }),
    shouldFetch
  ];
  const effect = react.useEffect(() => {
    function fetchAndHydrateColors() {
      return obj(...arguments);
    }
    let obj = function _fetchAndHydrateColors() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                const tmp4 = c0;
                if (tmp4) {
                  const FrecencyUserSettingsActionCreators = closure_2_0(closure_2_2[9]).FrecencyUserSettingsActionCreators;
                  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: obj2.maybeFetchSoundboardSounds(), done: false };
                  obj2 = closure_2_0(closure_2_2[10]);
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp8) {
            c0 = 3;
            throw tmp8;
          }
        }
      });
      return obj(...arguments);
    };
    !fetchAndHydrateColors();
  }, items2);
};
