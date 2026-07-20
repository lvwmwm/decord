// Module ID: 8508
// Function ID: 67876
// Name: useDisplayNameStylesEffectDefaultColors
// Dependencies: []
// Exports: default

// Module 8508 (useDisplayNameStylesEffectDefaultColors)
let closure_3 = importAll(dependencyMap[0]);
({ DISPLAY_NAME_STYLES_GRADIENT_PRESETS: closure_4, DISPLAY_NAME_STYLES_GUMMY_PRESETS: closure_5, DISPLAY_NAME_STYLES_PRISM_PRESETS: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEffectDefaultColors.native.tsx");

export default function useDisplayNameStylesEffectDefaultColors() {
  const obj = arg1(dependencyMap[2]);
  const hex2intResult = obj.hex2int(arg1(dependencyMap[3]).useToken(importDefault(dependencyMap[4]).colors.TEXT_DEFAULT));
  const arg1 = hex2intResult;
  const items = [hex2intResult];
  return React.useMemo(() => {
    const obj = { [closure_0(closure_2[5]).DisplayNameEffect.SOLID]: items };
    const items = [hex2intResult];
    const items1 = [];
    HermesBuiltin.arraySpread(closure_4[0].colors, 0);
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.GRADIENT] = items1;
    const items2 = [];
    HermesBuiltin.arraySpread(closure_4[0].colors, 0);
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.GLOW] = items2;
    const items3 = [];
    HermesBuiltin.arraySpread(closure_5[0], 0);
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.GUMMY] = items3;
    const items4 = [];
    HermesBuiltin.arraySpread(closure_6[0], 0);
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.PRISM] = items4;
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.TOON] = [];
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.NEON] = [null];
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.POP] = ["<string:2923823106>"];
    const items5 = [hex2intResult];
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.TEST_1] = items5;
    const items6 = [hex2intResult];
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.TEST_2] = items6;
    const items7 = [hex2intResult];
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.TEST_3] = items7;
    const items8 = [hex2intResult];
    obj[hex2intResult(closure_2[5]).DisplayNameEffect.TEST_4] = items8;
    return obj;
  }, items);
};
