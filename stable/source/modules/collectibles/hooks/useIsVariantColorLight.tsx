// Module ID: 8991
// Function ID: 8992
// Name: useIsVariantColorLight
// Dependencies: [19, 1091, 2]
// Exports: default

// Module 8991 (useIsVariantColorLight)
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  const items = [variantValue.variantValue];
  return noop.useMemo(() => {
    let isValidHexResult = utils_ColorUtils.isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const tmpResult = tmp(1091);
      isValidHexResult = tmpResult.getDarkness(tmp(1091).hex2int(variantValue.variantValue)) < 0.3;
      const tmpResult2 = tmp(1091);
    }
    return isValidHexResult;
  }, items);
};
