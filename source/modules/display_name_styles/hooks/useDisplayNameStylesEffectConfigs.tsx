// Module ID: 8511
// Function ID: 67896
// Name: DISPLAY_NAME_STYLES_EFFECT_NAMES
// Dependencies: []
// Exports: useDisplayNameStylesEffectConfig

// Module 8511 (DISPLAY_NAME_STYLES_EFFECT_NAMES)
let closure_3 = importAll(dependencyMap[0]);
const obj = {};
obj[arg1(dependencyMap[1]).DisplayNameEffect.SOLID] = importDefault(dependencyMap[2]).OpWJ3f;
obj[arg1(dependencyMap[1]).DisplayNameEffect.GRADIENT] = importDefault(dependencyMap[2]).i9e/u1;
obj[arg1(dependencyMap[1]).DisplayNameEffect.NEON] = importDefault(dependencyMap[2]).x68b1F;
obj[arg1(dependencyMap[1]).DisplayNameEffect.TOON] = importDefault(dependencyMap[2]).otpeeM;
obj[arg1(dependencyMap[1]).DisplayNameEffect.POP] = importDefault(dependencyMap[2]).cjQOKb;
obj[arg1(dependencyMap[1]).DisplayNameEffect.GUMMY] = importDefault(dependencyMap[2]).x9Gtie;
obj[arg1(dependencyMap[1]).DisplayNameEffect.PRISM] = importDefault(dependencyMap[2])./M7psm;
let closure_5 = { [arg1(dependencyMap[1]).DisplayNameEffect.SOLID]: 3, [arg1(dependencyMap[1]).DisplayNameEffect.GRADIENT]: 2.5, [arg1(dependencyMap[1]).DisplayNameEffect.GLOW]: 2.5, [arg1(dependencyMap[1]).DisplayNameEffect.PRISM]: 2.5, [arg1(dependencyMap[1]).DisplayNameEffect.NEON]: 3, [arg1(dependencyMap[1]).DisplayNameEffect.TOON]: 3, [arg1(dependencyMap[1]).DisplayNameEffect.POP]: 3, [arg1(dependencyMap[1]).DisplayNameEffect.GUMMY]: 3 };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export const DISPLAY_NAME_STYLES_EFFECT_NAMES = obj;
export const useDisplayNameStylesEffectConfig = function useDisplayNameStylesEffectConfig(effectId) {
  const arg1 = effectId;
  const tmp = importDefault(dependencyMap[3])()[effectId];
  const importDefault = tmp;
  const items = [effectId, tmp];
  return React.useMemo(() => {
    let obj = {};
    const intl = arg0(closure_2[4]).intl;
    let OpWJ3f = closure_4[closure_0];
    if (null == OpWJ3f) {
      OpWJ3f = tmp(closure_2[2]).OpWJ3f;
    }
    obj.name = intl.string(OpWJ3f);
    obj.defaultColors = tmp;
    obj = { fontId: arg0(closure_2[5]).DisplayNameFont.DEFAULT, effectId: arg0, colors: tmp };
    obj.previewStyles = obj;
    let num2 = 3;
    if (null != closure_5[closure_0]) {
      num2 = tmp3;
    }
    obj.minContrastRatio = num2;
    return obj;
  }, items);
};
