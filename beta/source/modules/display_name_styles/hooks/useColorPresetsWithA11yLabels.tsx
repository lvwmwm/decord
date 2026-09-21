// Module ID: 15607
// Function ID: 15608
// Name: useColorPresetsWithA11yLabels
// Dependencies: [19, 1394, 558, 568, 1119, 2876, 1096, 2]

// Module 15607 (useColorPresetsWithA11yLabels)
import c from "c" /* 568 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1096 */;
import util from "util" /* 1119 */;
import _modDef2876 from "module_2876" /* 2876 */;
import noop from "module_19" /* 19 */;

require = fn;
const getColorPresetsForEffect = fn(1394).getColorPresetsForEffect;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selectedEffectId) => {
  const cResult = c.c(3);
  if (cResult[0] !== selectedEffectId) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(colors, arg1) {
        const obj = { colors, a11yLabel: null };
        const intl = util.intl;
        const obj2 = { number: arg1 + 1, hexList: null };
        const mapped = colors.map(utils_ColorUtils.int2hex);
        obj2.hexList = mapped.join(", ");
        obj.a11yLabel = intl.formatToPlainString(_modDef2876.FHfTsV, obj2);
        return obj;
      };
      cResult[2] = fn;
      let tmp3 = fn;
    } else {
      tmp3 = cResult[2];
    }
    let mapped = getColorPresetsForEffect(selectedEffectId).map(tmp3);
    cResult[0] = selectedEffectId;
    cResult[1] = mapped;
    const arr = getColorPresetsForEffect(selectedEffectId);
  } else {
    return cResult[1];
  }
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => getColorPresetsForEffect(closure_0).map((colors, index) => {
    const obj = { colors, a11yLabel: null };
    const intl = closure_1_0(1119).intl;
    const obj2 = { number: index + 1, hexList: null };
    const mapped = colors.map(closure_1_0(1096).int2hex);
    obj2.hexList = mapped.join(", ");
    obj.a11yLabel = intl.formatToPlainString(closure_1_1(2876).FHfTsV, obj2);
    return obj;
  }), items);
});
