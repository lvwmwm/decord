// Module ID: 14871
// Function ID: 14872
// Name: useDisplayNameStylesHandleApply
// Dependencies: [19, 1086, 558, 576, 1397, 7616, 7613, 1253, 1398, 2]

// Module 14871 (useDisplayNameStylesHandleApply)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1397 */;
import DisplayNameFont from "DisplayNameFont" /* 1398 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7613 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7616 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasChanges;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((hasChanges) => {
  let selectedEffectId;
  let obj = hasChanges(selectedEffectId[3]);
  const cResult = obj.c(9);
  hasChanges = hasChanges.hasChanges;
  const selectedFontId = hasChanges.selectedFontId;
  selectedEffectId = hasChanges.selectedEffectId;
  const selectedColors = hasChanges.selectedColors;
  const defaultColor = hasChanges.defaultColor;
  const guildId = hasChanges.guildId;
  const isTryItOut = hasChanges.isTryItOut;
  const onClose = hasChanges.onClose;
  if (cResult[0] === defaultColor) {
    if (cResult[1] === guildId) {
      if (cResult[2] === hasChanges) {
        if (cResult[3] === isTryItOut) {
          if (cResult[4] === onClose) {
            if (cResult[5] === selectedColors) {
              if (cResult[6] === selectedEffectId) {
                let tmp2;
                if (cResult[7] === selectedFontId) {
                  tmp2 = cResult[8];
                }
                return tmp2;
              }
            }
          }
        }
      }
    }
  }
  const fn = function l() {
    const tmp = hasChanges;
    if (tmp) {
      let items = arr;
      const tmp5 = selectedEffectId === DisplayNameEffect.DisplayNameEffect.SOLID && arr.length > 0 && arr[0] === defaultColor;
      if (tmp5) {
        items = [];
      }
      const obj = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
      const tmp7 = selectedFontId;
      if (isTryItOut) {
        const tmp3Result = UserProfileActionCreators;
        const result = tmp3Result.setTryItOutDisplayNameStyles(obj);
      } else {
        const obj2 = { guildId, displayNameStyles: obj };
        const tmp3Result2 = UserProfileSettingsActionCreators;
        tmp3Result2.setPendingChanges(obj2);
      }
      const obj3 = { font_name: DisplayNameFont.DisplayNameFont[tmp7], effect_name: DisplayNameEffect.DisplayNameEffect[selectedEffectId], colors: selectedColors };
      const track = AnalyticsUtilsDefault.track;
      const DISPLAY_NAME_STYLES_APPLIED = AnalyticEvents.DISPLAY_NAME_STYLES_APPLIED;
      AnalyticsUtilsDefault;
      track(DISPLAY_NAME_STYLES_APPLIED, obj3);
      if (onClose != null) {
        onClose();
      }
    }
  };
  cResult[0] = defaultColor;
  cResult[1] = guildId;
  cResult[2] = hasChanges;
  cResult[3] = isTryItOut;
  cResult[4] = onClose;
  cResult[5] = selectedColors;
  cResult[6] = selectedEffectId;
  cResult[7] = selectedFontId;
  cResult[8] = fn;
  tmp2 = fn;
}) : ((hasChanges) => {
  hasChanges = hasChanges.hasChanges;
  const selectedFontId = hasChanges.selectedFontId;
  const selectedEffectId = hasChanges.selectedEffectId;
  const selectedColors = hasChanges.selectedColors;
  const defaultColor = hasChanges.defaultColor;
  const guildId = hasChanges.guildId;
  const isTryItOut = hasChanges.isTryItOut;
  const onClose = hasChanges.onClose;
  let items = [hasChanges, selectedFontId, selectedEffectId, selectedColors, defaultColor, onClose, guildId, isTryItOut];
  return selectedColors.useCallback(() => {
    const tmp = hasChanges;
    if (tmp) {
      let items = arr;
      const tmp5 = selectedEffectId === DisplayNameEffect.DisplayNameEffect.SOLID && arr.length > 0 && arr[0] === defaultColor;
      if (tmp5) {
        items = [];
      }
      const obj = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
      const tmp7 = selectedFontId;
      if (isTryItOut) {
        const tmp3Result = UserProfileActionCreators;
        const result = tmp3Result.setTryItOutDisplayNameStyles(obj);
      } else {
        const obj2 = { guildId, displayNameStyles: obj };
        const tmp3Result2 = UserProfileSettingsActionCreators;
        tmp3Result2.setPendingChanges(obj2);
      }
      const obj3 = { font_name: DisplayNameFont.DisplayNameFont[tmp7], effect_name: DisplayNameEffect.DisplayNameEffect[selectedEffectId], colors: selectedColors };
      const track = AnalyticsUtilsDefault.track;
      const DISPLAY_NAME_STYLES_APPLIED = AnalyticEvents.DISPLAY_NAME_STYLES_APPLIED;
      AnalyticsUtilsDefault;
      track(DISPLAY_NAME_STYLES_APPLIED, obj3);
      if (onClose != null) {
        onClose();
      }
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const useDisplayNameStylesHandleApply = tmp2;
