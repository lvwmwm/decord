// Module ID: 14883
// Function ID: 14884
// Name: useDisplayNameStylesHandleApply
// Dependencies: [19, 1074, 1391, 7612, 7609, 1241, 1392, 2]
// Exports: useDisplayNameStylesHandleApply

// Module 14883 (useDisplayNameStylesHandleApply)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1391 */;
import DisplayNameFont from "DisplayNameFont" /* 1392 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7612 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const useDisplayNameStylesHandleApply = function useDisplayNameStylesHandleApply(hasChanges) {
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
};
