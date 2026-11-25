// Module ID: 9768
// Function ID: 9769
// Name: useDisplayNameStylesAccessibleColors
// Dependencies: [19, 5013, 504, 1397, 9769, 1394, 5009, 671, 2]
// Exports: useDisplayNameStylesAccessibleColors

// Module 9768 (useDisplayNameStylesAccessibleColors)
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1394 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;
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
      let tmp2 = require;
      const tmp3 = dependencyMap;
      const found = colors.filter(DisplayNameStylesUtils.isValidDisplayNameColor);
      items = found.map((item) => {
        let tmp5;
        const tmp2 = displayNameStyles(stateFromStores[6]);
        const getAccessibleForegroundColor = tmp2.getAccessibleForegroundColor;
        const obj = { foreground: backgroundColor(stateFromStores[7])(item), background: tmp5, ratio: minContrastRatio.minContrastRatio, saturationFactor };
        if (effectId === displayNameStyles(stateFromStores[3]).DisplayNameEffect.TOON) {
          tmp5 = tmp3(tmp[7])("#333");
        } else {
          tmp5 = tmp3(tmp[7])(closure_1_1);
        }
        const accessibleForegroundColor = getAccessibleForegroundColor(obj);
        return accessibleForegroundColor.hex();
      });
    }
    return items;
  }, items1);
}
