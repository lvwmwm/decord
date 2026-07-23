// Module ID: 8517
// Function ID: 67940
// Name: useDisplayNameStylesAccessibleColors
// Dependencies: [31, 4122, 566, 1862, 8518, 3974, 666, 2]
// Exports: useDisplayNameStylesAccessibleColors

// Module 8517 (useDisplayNameStylesAccessibleColors)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx");

export const useDisplayNameStylesAccessibleColors = function useDisplayNameStylesAccessibleColors(displayNameStyles) {
  displayNameStyles = displayNameStyles.displayNameStyles;
  const backgroundColor = displayNameStyles.backgroundColor;
  let effectId;
  let displayNameStylesEffectConfig;
  let items = [displayNameStylesEffectConfig];
  stateFromStores = displayNameStyles(stateFromStores[2]).useStateFromStores(items, () => {
    let num = 1;
    if (displayNameStylesEffectConfig.desaturateUserColors) {
      num = displayNameStylesEffectConfig.saturation;
    }
    return num;
  });
  effectId = undefined;
  if (null != displayNameStyles) {
    effectId = displayNameStyles.effectId;
  }
  if (null == effectId) {
    effectId = displayNameStyles(stateFromStores[3]).DisplayNameEffect.SOLID;
  }
  let obj = displayNameStyles(stateFromStores[2]);
  displayNameStylesEffectConfig = displayNameStyles(stateFromStores[4]).useDisplayNameStylesEffectConfig(effectId);
  const items1 = [displayNameStyles, effectId, displayNameStylesEffectConfig.minContrastRatio, stateFromStores, backgroundColor];
  return effectId.useMemo(() => {
    if (null == displayNameStyles) {
      let items = [];
    } else {
      const colors = displayNameStyles.colors;
      items = colors.map((arg0) => {
        let obj = displayNameStyles(stateFromStores[5]);
        obj = { foreground: backgroundColor(stateFromStores[6])(arg0) };
        if (outer1_3 === displayNameStyles(stateFromStores[3]).DisplayNameEffect.TOON) {
          let tmp4 = backgroundColor(stateFromStores[6])("#333");
        } else {
          tmp4 = backgroundColor(stateFromStores[6])(outer1_1);
        }
        obj.background = tmp4;
        obj.ratio = outer1_4.minContrastRatio;
        obj.saturationFactor = outer1_2;
        const accessibleForegroundColor = obj.getAccessibleForegroundColor(obj);
        return accessibleForegroundColor.hex();
      });
    }
    return items;
  }, items1);
};
