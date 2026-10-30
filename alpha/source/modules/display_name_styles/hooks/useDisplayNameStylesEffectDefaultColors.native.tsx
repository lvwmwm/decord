// Module ID: 10756
// Function ID: 10757
// Name: useDisplayNameStylesEffectDefaultColors
// Dependencies: [19, 1402, 1091, 5591, 575, 1403, 2]
// Exports: default

// Module 10756 (useDisplayNameStylesEffectDefaultColors)
import nativeDefault from "native" /* 575 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1403 */;
import useToken from "useToken" /* 5591 */;
import react from "react" /* 19 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1402 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ DISPLAY_NAME_STYLES_GRADIENT_PRESETS: closure_4, DISPLAY_NAME_STYLES_GUMMY_PRESETS: hasOwnProperty, DISPLAY_NAME_STYLES_PRISM_PRESETS: metroRequire } = DisplayNameStylesConstants);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectDefaultColors.native.tsx");

export default function useDisplayNameStylesEffectDefaultColors() {
  const hex2int = utils_ColorUtils.hex2int;
  utils_ColorUtils;
  let obj = useToken;
  const hex2intResult = hex2int(obj.useToken(nativeDefault.colors.TEXT_DEFAULT));
  require = hex2intResult;
  let items = [hex2intResult];
  return react.useMemo(() => {
    let items;
    const obj = { [closure_2_0(closure_2_2[5]).DisplayNameEffect.SOLID]: items };
    items = [require];
    const items1 = [];
    const GRADIENT = DisplayNameEffect.DisplayNameEffect.GRADIENT;
    HermesBuiltin.arraySpread(items1, React3[0].colors, 0);
    obj[GRADIENT] = items1;
    const items2 = [];
    const GLOW = DisplayNameEffect.DisplayNameEffect.GLOW;
    HermesBuiltin.arraySpread(items2, React3[0].colors, 0);
    obj[GLOW] = items2;
    const items3 = [];
    const GUMMY = DisplayNameEffect.DisplayNameEffect.GUMMY;
    HermesBuiltin.arraySpread(items3, hasOwnProperty[0], 0);
    obj[GUMMY] = items3;
    const items4 = [];
    const PRISM = DisplayNameEffect.DisplayNameEffect.PRISM;
    HermesBuiltin.arraySpread(items4, metroRequire[0], 0);
    obj[PRISM] = items4;
    obj[DisplayNameEffect.DisplayNameEffect.TOON] = [15999128];
    obj[DisplayNameEffect.DisplayNameEffect.NEON] = [6888941];
    obj[DisplayNameEffect.DisplayNameEffect.POP] = [1036166];
    const items5 = [require];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_1] = items5;
    const items6 = [require];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_2] = items6;
    const items7 = [require];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_3] = items7;
    const items8 = [require];
    obj[DisplayNameEffect.DisplayNameEffect.TEST_4] = items8;
    return obj;
  }, items);
};
