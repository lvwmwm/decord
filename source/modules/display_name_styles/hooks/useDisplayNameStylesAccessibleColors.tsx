// Module ID: 8506
// Function ID: 67868
// Name: useDisplayNameStylesAccessibleColors
// Dependencies: []
// Exports: useDisplayNameStylesAccessibleColors

// Module 8506 (useDisplayNameStylesAccessibleColors)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx");

export const useDisplayNameStylesAccessibleColors = function useDisplayNameStylesAccessibleColors(displayNameStyles) {
  displayNameStyles = displayNameStyles.displayNameStyles;
  const arg1 = displayNameStyles;
  const backgroundColor = displayNameStyles.backgroundColor;
  const importDefault = backgroundColor;
  let React;
  let closure_4;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let num = 1;
    if (displayNameStylesEffectConfig.desaturateUserColors) {
      num = displayNameStylesEffectConfig.saturation;
    }
    return num;
  });
  const dependencyMap = stateFromStores;
  let effectId;
  if (null != displayNameStyles) {
    effectId = displayNameStyles.effectId;
  }
  if (null == effectId) {
    effectId = arg1(dependencyMap[3]).DisplayNameEffect.SOLID;
  }
  React = effectId;
  const obj = arg1(dependencyMap[2]);
  const displayNameStylesEffectConfig = arg1(dependencyMap[4]).useDisplayNameStylesEffectConfig(effectId);
  closure_4 = displayNameStylesEffectConfig;
  const items1 = [displayNameStyles, effectId, displayNameStylesEffectConfig.minContrastRatio, stateFromStores, backgroundColor];
  return React.useMemo(() => {
    if (null == displayNameStyles) {
      let items = [];
    } else {
      const colors = displayNameStyles.colors;
      items = colors.map((arg0) => {
        let obj = callback(closure_2[5]);
        obj = { foreground: callback2(closure_2[6])(arg0) };
        if (closure_3 === callback(closure_2[3]).DisplayNameEffect.TOON) {
          let tmp4 = callback2(closure_2[6])("#333");
        } else {
          tmp4 = callback2(closure_2[6])(callback2);
        }
        obj.background = tmp4;
        obj.ratio = minContrastRatio.minContrastRatio;
        obj.saturationFactor = closure_2;
        const accessibleForegroundColor = obj.getAccessibleForegroundColor(obj);
        return accessibleForegroundColor.hex();
      });
    }
    return items;
  }, items1);
};
