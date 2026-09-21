// Module ID: 15597
// Function ID: 15598
// Name: useDisplayNameStylesHandleApply
// Dependencies: [19, 1078, 558, 568, 1395, 8441, 8438, 1245, 1396, 2]

// Module 15597 (useDisplayNameStylesHandleApply)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1395 */;
import DisplayNameFont from "DisplayNameFont" /* 1396 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1078).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const useDisplayNameStylesHandleApply = ReactCompilerGating.isReactCompilerEnabled() ? ((hasChanges) => {
  const cResult = hasChanges(selectedEffectId[3]).c(9);
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
                if (cResult[7] === selectedFontId) {
                  let tmp2 = cResult[8];
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
    if (hasChanges) {
      let tmp4 = selectedEffectId === DisplayNameEffect.DisplayNameEffect.SOLID;
      if (tmp4) {
        tmp4 = arr.length > 0;
      }
      if (tmp4) {
        tmp4 = arr[0] === defaultColor;
      }
      let items = arr;
      if (tmp4) {
        items = [];
      }
      const obj = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
      if (isTryItOut) {
        const result = tmp2(8441).setTryItOutDisplayNameStyles(obj);
        const tmp2Result = tmp2(8441);
      } else {
        const obj2 = { guildId, displayNameStyles: obj };
        tmp2(8438).setPendingChanges(obj2);
        const tmp2Result2 = tmp2(8438);
      }
      const obj3 = { font_name: DisplayNameFont.DisplayNameFont[selectedFontId], effect_name: DisplayNameEffect.DisplayNameEffect[selectedEffectId], colors: selectedColors };
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_APPLIED, obj3);
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
    if (hasChanges) {
      let tmp4 = selectedEffectId === DisplayNameEffect.DisplayNameEffect.SOLID;
      if (tmp4) {
        tmp4 = arr.length > 0;
      }
      if (tmp4) {
        tmp4 = arr[0] === defaultColor;
      }
      let items = arr;
      if (tmp4) {
        items = [];
      }
      const obj = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
      if (isTryItOut) {
        const result = tmp2(8441).setTryItOutDisplayNameStyles(obj);
        const tmp2Result = tmp2(8441);
      } else {
        const obj2 = { guildId, displayNameStyles: obj };
        tmp2(8438).setPendingChanges(obj2);
        const tmp2Result2 = tmp2(8438);
      }
      const obj3 = { font_name: DisplayNameFont.DisplayNameFont[selectedFontId], effect_name: DisplayNameEffect.DisplayNameEffect[selectedEffectId], colors: selectedColors };
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_APPLIED, obj3);
      if (onClose != null) {
        onClose();
      }
    }
  }, items);
});
