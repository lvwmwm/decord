// Module ID: 10754
// Function ID: 10755
// Name: useDisplayNameStylesAccessibleColors
// Dependencies: [19, 5010, 504, 1403, 10755, 5006, 671, 2]
// Exports: useDisplayNameStylesAccessibleColors

// Module 10754 (useDisplayNameStylesAccessibleColors)
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx");

export function useDisplayNameStylesAccessibleColors(displayNameStyles) {
  displayNameStyles = displayNameStyles.displayNameStyles;
  const backgroundColor = displayNameStyles.backgroundColor;
  let stateFromStores;
  let displayNameStylesEffectConfig;
  const tmp = displayNameStyles;
  let tmp2 = stateFromStores;
  let obj = displayNameStyles(stateFromStores[2]);
  let items = [displayNameStylesEffectConfig];
  stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1;
    if (displayNameStylesEffectConfig.desaturateUserColors) {
      num = displayNameStylesEffectConfig.saturation;
    }
    return num;
  });
  let effectId;
  if (displayNameStyles != null) {
    effectId = displayNameStyles.effectId;
  }
  if (effectId == null) {
    effectId = tmp(tmp2[3]).DisplayNameEffect.SOLID;
  }
  const tmpResult = tmp(tmp2[4]);
  displayNameStylesEffectConfig = tmpResult.useDisplayNameStylesEffectConfig(effectId);
  const items1 = [displayNameStyles, effectId, displayNameStylesEffectConfig.minContrastRatio, stateFromStores, backgroundColor];
  return effectId.useMemo(() => {
    let items;
    let minContrastRatio;
    let saturationFactor;
    if (null == displayNameStyles) {
      items = [];
    } else {
      const colors = tmp.colors;
      items = colors.map((item) => {
        let tmp5;
        const tmp2 = displayNameStyles(stateFromStores[5]);
        const getAccessibleForegroundColor = tmp2.getAccessibleForegroundColor;
        const obj = { foreground: backgroundColor(stateFromStores[6])(item), background: tmp5, ratio: minContrastRatio.minContrastRatio, saturationFactor };
        if (effectId === displayNameStyles(stateFromStores[3]).DisplayNameEffect.TOON) {
          tmp5 = tmp3(tmp[6])("#333");
        } else {
          tmp5 = tmp3(tmp[6])(closure_1_1);
        }
        const accessibleForegroundColor = getAccessibleForegroundColor(obj);
        return accessibleForegroundColor.hex();
      });
    }
    return items;
  }, items1);
}
