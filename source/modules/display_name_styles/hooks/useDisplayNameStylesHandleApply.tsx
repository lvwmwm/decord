// Module ID: 14224
// Function ID: 109274
// Name: useDisplayNameStylesHandleApply
// Dependencies: [31, 653, 1862, 7847, 7844, 675, 1863, 2]
// Exports: useDisplayNameStylesHandleApply

// Module 14224 (useDisplayNameStylesHandleApply)
import result from "result";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("DisplayNameEffect").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

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
    if (hasChanges) {
      let items = selectedColors;
      let tmp4 = selectedEffectId === hasChanges(selectedEffectId[2]).DisplayNameEffect.SOLID;
      if (tmp4) {
        tmp4 = selectedColors.length > 0;
      }
      if (tmp4) {
        tmp4 = selectedColors[0] === defaultColor;
      }
      if (tmp4) {
        items = [];
      }
      let obj = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
      if (isTryItOut) {
        let tmp11Result = tmp11(tmp12[3]);
        const result = tmp11Result.setTryItOutDisplayNameStyles(obj);
      } else {
        tmp11Result = tmp11(tmp12[4]);
        obj = { guildId };
        obj.displayNameStyles = obj;
        tmp11Result.setPendingChanges(obj);
      }
      obj = { font_name: hasChanges(selectedEffectId[6]).DisplayNameFont[selectedFontId], effect_name: hasChanges(selectedEffectId[2]).DisplayNameEffect[selectedEffectId], colors: selectedColors };
      selectedFontId(selectedEffectId[5]).track(defaultColor.DISPLAY_NAME_STYLES_APPLIED, obj);
      if (null != onClose) {
        onClose();
      }
      const obj5 = selectedFontId(selectedEffectId[5]);
    }
  }, items);
};
