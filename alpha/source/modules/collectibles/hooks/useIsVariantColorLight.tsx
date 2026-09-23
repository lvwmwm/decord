// Module ID: 9221
// Function ID: 9222
// Name: useIsVariantColorLight
// Dependencies: [19, 1092, 2]
// Exports: default

// Module 9221 (useIsVariantColorLight)
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  const items = [variantValue.variantValue];
  return noop.useMemo(() => {
    let isValidHexResult = utils_ColorUtils.isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const tmpResult = tmp(1092);
      isValidHexResult = tmpResult.getDarkness(tmp(1092).hex2int(variantValue.variantValue)) < 0.3;
      const tmpResult2 = tmp(1092);
    }
    return isValidHexResult;
  }, items);
};
