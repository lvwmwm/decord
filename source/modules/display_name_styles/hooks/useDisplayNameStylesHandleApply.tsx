// Module ID: 14099
// Function ID: 107043
// Name: useDisplayNameStylesHandleApply
// Dependencies: [297467904, 297336832, 557776896, 557449216, 557514752, 270270464, 131072, 401604608]
// Exports: useDisplayNameStylesHandleApply

// Module 14099 (useDisplayNameStylesHandleApply)
let closure_3 = importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const useDisplayNameStylesHandleApply = function useDisplayNameStylesHandleApply(hasChanges) {
  hasChanges = hasChanges.hasChanges;
  const arg1 = hasChanges;
  const selectedFontId = hasChanges.selectedFontId;
  const importDefault = selectedFontId;
  const selectedEffectId = hasChanges.selectedEffectId;
  const dependencyMap = selectedEffectId;
  const selectedColors = hasChanges.selectedColors;
  const React = selectedColors;
  const defaultColor = hasChanges.defaultColor;
  const AnalyticEvents = defaultColor;
  const guildId = hasChanges.guildId;
  const isTryItOut = hasChanges.isTryItOut;
  const onClose = hasChanges.onClose;
  const items = [hasChanges, selectedFontId, selectedEffectId, selectedColors, defaultColor, onClose, guildId, isTryItOut];
  return React.useCallback(() => {
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
      obj = { font_name: hasChanges(selectedEffectId[6]).DisplayNameFont[closure_1], effect_name: hasChanges(selectedEffectId[2]).DisplayNameEffect[closure_2], colors: selectedColors };
      selectedFontId(selectedEffectId[5]).track(defaultColor.DISPLAY_NAME_STYLES_APPLIED, obj);
      if (null != onClose) {
        onClose();
      }
      const obj5 = selectedFontId(selectedEffectId[5]);
    }
  }, items);
};
