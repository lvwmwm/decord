// Module ID: 8518
// Function ID: 67945
// Name: DISPLAY_NAME_STYLES_EFFECT_NAMES
// Dependencies: [31, 1862, 2556, 8519, 1212, 1863, 2]
// Exports: useDisplayNameStylesEffectConfig

// Module 8518 (DISPLAY_NAME_STYLES_EFFECT_NAMES)
import result from "result";

const require = arg1;
let obj = {};
obj[require("DisplayNameEffect").DisplayNameEffect.SOLID] = require("messagesProxy").OpWJ3f;
obj[require("DisplayNameEffect").DisplayNameEffect.GRADIENT] = require("messagesProxy")["i9e/u1"];
obj[require("DisplayNameEffect").DisplayNameEffect.NEON] = require("messagesProxy").x68b1F;
obj[require("DisplayNameEffect").DisplayNameEffect.TOON] = require("messagesProxy").otpeeM;
obj[require("DisplayNameEffect").DisplayNameEffect.POP] = require("messagesProxy").cjQOKb;
obj[require("DisplayNameEffect").DisplayNameEffect.GUMMY] = require("messagesProxy").x9Gtie;
obj[require("DisplayNameEffect").DisplayNameEffect.PRISM] = require("messagesProxy")["/M7psm"];
let closure_5 = { [arg1(1862).DisplayNameEffect.SOLID]: 3, [arg1(1862).DisplayNameEffect.GRADIENT]: 2.5, [arg1(1862).DisplayNameEffect.GLOW]: 2.5, [arg1(1862).DisplayNameEffect.PRISM]: 2.5, [arg1(1862).DisplayNameEffect.NEON]: 3, [arg1(1862).DisplayNameEffect.TOON]: 3, [arg1(1862).DisplayNameEffect.POP]: 3, [arg1(1862).DisplayNameEffect.GUMMY]: 3 };
const result = require("messagesProxy").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx");

export const DISPLAY_NAME_STYLES_EFFECT_NAMES = obj;
export const useDisplayNameStylesEffectConfig = function useDisplayNameStylesEffectConfig(effectId) {
  let closure_0 = effectId;
  const tmp = importDefault(8519)()[effectId];
  importDefault = tmp;
  const items = [effectId, tmp];
  return React.useMemo(() => {
    let obj = {};
    const intl = effectId(outer1_2[4]).intl;
    let OpWJ3f = outer1_4[effectId];
    if (null == OpWJ3f) {
      OpWJ3f = tmp(outer1_2[2]).OpWJ3f;
    }
    obj.name = intl.string(OpWJ3f);
    obj.defaultColors = tmp;
    obj = { fontId: effectId(outer1_2[5]).DisplayNameFont.DEFAULT, effectId, colors: tmp };
    obj.previewStyles = obj;
    let num2 = 3;
    if (null != outer1_5[effectId]) {
      num2 = tmp3;
    }
    obj.minContrastRatio = num2;
    return obj;
  }, items);
};
