// Module ID: 17771
// Function ID: 17772
// Name: SoundboardHooks
// Dependencies: [5, 19, 5081, 1205, 17763, 6840, 558, 576, 1497, 504, 4969, 2046, 7047, 2]

// Module 17771 (SoundboardHooks)
import react2 from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6840 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 17763 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, c1;

let metroImportAll;
let metroImportDefault;
({ SOUNDS_PER_ROW: metroImportDefault, SOUND_ROW_PADDING: metroImportAll } = SoundboardStyleConstants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSoundButtonStyleConfig() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const result = (Math.min(ACTION_SHEET_MAX_WIDTH, useWindowDimensionsDefault().width) - metroImportAll) / metroImportDefault;
  if (cResult[0] !== result) {
    const obj2 = { buttonWidth: result };
    cResult[0] = result;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useSoundButtonStyleConfig() {
  const obj = { buttonWidth: (Math.min(ACTION_SHEET_MAX_WIDTH, useWindowDimensionsDefault().width) - metroImportAll) / metroImportDefault };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchSoundboardSounds(shouldFetch) {
  let saturation;
  let theme;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = shouldFetch;
  const tmp2 = dependencyMap;
  let obj = shouldFetch(576);
  const cResult = obj.c(10);
  shouldFetch = shouldFetch.shouldFetch;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class S {
      constructor() {
        return saturation.saturation;
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
    tmp5 = S;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ThemeStore];
    class S {
      constructor() {
        return saturation.saturation;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp11;
    tmp9 = tmp11;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== shouldFetch) {
    const fn = function _() {
      function fetchAndHydrateColors() {
        return closure_0(...arguments);
      }
      let closure_0 = _asyncToGenerator(async (arg0, value) => {
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
            return { value: "IconComponent", done: "+51" };
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
                  const FrecencyUserSettingsActionCreators = v3(dependencyMap[11]).FrecencyUserSettingsActionCreators;
                  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: obj2.maybeFetchSoundboardSounds(), done: false };
                  obj2 = v3(dependencyMap[12]);
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            return { value: "IconComponent", done: "+51" };
          } catch (tmp8) {
            c0 = 3;
            throw tmp8;
          }
        }
      });
      fetchAndHydrateColors();
    };
    cResult[4] = shouldFetch;
    class S {
      constructor() {
        return saturation.saturation;
      }
    }
    cResult[5] = fn;
    tmp13 = fn;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === stateFromStores) {
      let tmp14;
      if (cResult[8] === shouldFetch) {
        tmp14 = cResult[9];
      }
      const effect = react.useEffect(tmp13, tmp14);
      class S {
        constructor() {
          return saturation.saturation;
        }
      }
    }
  }
  const items2 = [stateFromStores, stateFromStores1, shouldFetch];
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = shouldFetch;
  cResult[9] = items2;
  tmp14 = items2;
}) : (function useMaybeFetchSoundboardSounds(shouldFetch) {
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
      const obj = shouldFetch(dependencyMap[10]);
      return obj.isThemeDark(theme.theme);
    }),
    shouldFetch
  ];
  const effect = react.useEffect(() => {
    function fetchAndHydrateColors() {
      return obj(...arguments);
    }
    let obj = function _fetchAndHydrateColors2() {
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
            return { value: "IconComponent", done: "+51" };
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
                  const FrecencyUserSettingsActionCreators = closure_2_0(closure_2_2[11]).FrecencyUserSettingsActionCreators;
                  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: obj2.maybeFetchSoundboardSounds(), done: false };
                  obj2 = closure_2_0(closure_2_2[12]);
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
            return { value: "IconComponent", done: "+51" };
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
});
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export const useSoundButtonStyleConfig = tmp3;
export const useMaybeFetchSoundboardSounds = tmp4;
