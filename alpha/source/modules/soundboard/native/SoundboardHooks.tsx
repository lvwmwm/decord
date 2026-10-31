// Module ID: 19174
// Function ID: 19175
// Name: SoundboardHooks
// Dependencies: [5, 19, 5015, 1192, 19167, 5272, 504, 5021, 4844, 7517, 2]
// Exports: useMaybeFetchSoundboardSounds, useSoundButtonStyleConfig

// Module 19174 (SoundboardHooks)
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 19167 */;
import size from "module_2" /* 2 */;

let c0, c1;

let metroImportDefault;
let metroRequire;
({ SOUNDS_PER_ROW: metroRequire, SOUND_ROW_PADDING: metroImportDefault } = SoundboardStyleConstants);
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export function useSoundButtonStyleConfig() {
  let obj2;
  const obj = { buttonWidth: (obj2.useBottomSheetWidth() - metroImportDefault) / metroRequire };
  obj2 = Sheet_BottomSheet;
  return obj;
}
export function useMaybeFetchSoundboardSounds(shouldFetch) {
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
      const obj = shouldFetch(dependencyMap[7]);
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                  const FrecencyUserSettingsActionCreators = closure_2_0(closure_2_1[8]).FrecencyUserSettingsActionCreators;
                  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: obj2.maybeFetchSoundboardSounds(), done: false };
                  obj2 = closure_2_0(closure_2_1[9]);
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
}
