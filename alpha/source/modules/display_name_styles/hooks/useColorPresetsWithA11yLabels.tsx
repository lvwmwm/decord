// Module ID: 17213
// Function ID: 17214
// Name: useColorPresetsWithA11yLabels
// Dependencies: [19, 558, 576, 1406, 1125, 2930, 1102, 2]

// Module 17213 (useColorPresetsWithA11yLabels)
import react2 from "react" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1102 */;
import intl2 from "intl" /* 1125 */;
import _modDef2930 from "module_2930" /* 2930 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const DisplayNameStylesUtils = tmp(1406);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useColorPresetsWithA11yLabels(selectedEffectId, arg1) {
  let obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === arg1) {
    let arr;
    let tmp5;
    if (cResult[1] === selectedEffectId) {
      arr = cResult[2];
    }
    if (cResult[3] !== arr) {
      let tmp7;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(colors, arg1) {
          let FHfTsV;
          let formatToPlainString;
          let mapped;
          let obj2;
          colors = colors.colors;
          const obj = { colors, a11yLabel: formatToPlainString(FHfTsV, obj2) };
          const intl = intl2.intl;
          formatToPlainString = intl.formatToPlainString;
          obj2 = { number: arg1 + 1, hexList: mapped.join(", ") };
          FHfTsV = _modDef2930.FHfTsV;
          mapped = colors.map(utils_ColorUtils.int2hex);
          return obj;
        };
        cResult[5] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[5];
      }
      let mapped = arr.map(tmp7);
      cResult[3] = arr;
      cResult[4] = mapped;
      tmp5 = mapped;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  let colorPaletteList = arg1;
  if (arg1 == null) {
    const tmpResult = DisplayNameStylesUtils;
    colorPaletteList = tmpResult.createColorPaletteList(selectedEffectId, null);
  }
  cResult[0] = arg1;
  cResult[1] = selectedEffectId;
  cResult[2] = colorPaletteList;
  arr = colorPaletteList;
}) : (function useColorPresetsWithA11yLabels(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let colorPaletteList = closure_1;
    if (closure_1 == null) {
      let obj = DisplayNameStylesUtils;
      colorPaletteList = obj.createColorPaletteList(closure_0, null);
    }
    return colorPaletteList.map((colors, index) => {
      let FHfTsV;
      let formatToPlainString;
      let mapped;
      let obj2;
      colors = colors.colors;
      const obj = { colors, a11yLabel: formatToPlainString(FHfTsV, obj2) };
      const intl = closure_1_0(closure_1_2[4]).intl;
      formatToPlainString = intl.formatToPlainString;
      obj2 = { number: index + 1, hexList: mapped.join(", ") };
      FHfTsV = closure_1_1(closure_1_2[5]).FHfTsV;
      mapped = colors.map(closure_1_0(closure_1_2[6]).int2hex);
      return obj;
    });
  }, items);
});
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default tmp2;
