// Module ID: 10360
// Function ID: 10361
// Name: useDisplayNameStylesEffectConfigs
// Dependencies: [19, 1391, 2877, 10361, 1115, 1392, 2]
// Exports: useDisplayNameStylesEffectConfig

// Module 10360 (useDisplayNameStylesEffectConfigs)
import intl2 from "intl" /* 1115 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1391 */;
import DisplayNameFont from "DisplayNameFont" /* 1392 */;
import _modDef2877 from "module_2877" /* 2877 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 10361 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const DISPLAY_NAME_STYLES_EFFECT_NAMES = {};
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.SOLID] = _modDef2877.OpWJ3f;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.GRADIENT] = _modDef2877["i9e/u1"];
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.NEON] = _modDef2877.x68b1F;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.TOON] = _modDef2877.otpeeM;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.POP] = _modDef2877.cjQOKb;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.GUMMY] = _modDef2877.x9Gtie;
DISPLAY_NAME_STYLES_EFFECT_NAMES[DisplayNameEffect.DisplayNameEffect.PRISM] = _modDef2877["/M7psm"];
let closure_5 = { [DisplayNameEffect.DisplayNameEffect.SOLID]: 3, [DisplayNameEffect.DisplayNameEffect.GRADIENT]: 2.5, [DisplayNameEffect.DisplayNameEffect.GLOW]: 2.5, [DisplayNameEffect.DisplayNameEffect.PRISM]: 2.5, [DisplayNameEffect.DisplayNameEffect.NEON]: 3, [DisplayNameEffect.DisplayNameEffect.TOON]: 3, [DisplayNameEffect.DisplayNameEffect.POP]: 3, [DisplayNameEffect.DisplayNameEffect.GUMMY]: 3 };
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export { DISPLAY_NAME_STYLES_EFFECT_NAMES };
export const useDisplayNameStylesEffectConfig = function useDisplayNameStylesEffectConfig(effectId) {
  let closure_1;
  const tmp = useDisplayNameStylesEffectDefaultColorsDefault()[effectId];
  importDefault = tmp;
  const items = [effectId, tmp];
  return react.useMemo(() => {
    let num;
    let obj;
    const intl = intl2.intl;
    let OpWJ3f = obj[effectId];
    const string = intl.string;
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2877.OpWJ3f;
    }
    obj = { name: string(OpWJ3f), defaultColors: colors, previewStyles: { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId, colors }, minContrastRatio: num };
    num = closure_5[tmp3];
    ({ fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId, colors });
    if (num == null) {
      num = 3;
    }
    return obj;
  }, items);
};
