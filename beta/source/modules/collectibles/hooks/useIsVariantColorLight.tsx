// Module ID: 9175
// Function ID: 9176
// Name: useIsVariantColorLight
// Dependencies: [19, 558, 568, 1096, 2]

// Module 9175 (useIsVariantColorLight)
import c from "c" /* 568 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1096 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((variantValue) => {
  const cResult = c.c(2);
  if (cResult[0] !== variantValue.variantValue) {
    let isValidHexResult = tmp(1096).isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const tmpResult3 = tmp(1096);
      isValidHexResult = tmpResult3.getDarkness(tmp(1096).hex2int(variantValue.variantValue)) < 0.3;
      const tmpResult4 = tmp(1096);
    }
    cResult[0] = variantValue.variantValue;
    cResult[1] = isValidHexResult;
    let tmp4 = isValidHexResult;
    const tmpResult = tmp(1096);
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((variantValue) => {
  const items = [variantValue.variantValue];
  return noop.useMemo(() => {
    let isValidHexResult = utils_ColorUtils.isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const tmpResult = tmp(1096);
      isValidHexResult = tmpResult.getDarkness(tmp(1096).hex2int(variantValue.variantValue)) < 0.3;
      const tmpResult2 = tmp(1096);
    }
    return isValidHexResult;
  }, items);
});
