// Module ID: 8331
// Function ID: 8332
// Name: useIsVariantColorLight
// Dependencies: [19, 1092, 2]
// Exports: default

// Module 8331 (useIsVariantColorLight)
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  const items = [variantValue.variantValue];
  return react.useMemo(() => {
    const obj = utils_ColorUtils;
    let isValidHexResult = obj.isValidHex(variantValue.variantValue);
    const tmp3 = variantValue;
    if (isValidHexResult) {
      const getDarkness = utils_ColorUtils.getDarkness;
      utils_ColorUtils;
      const tmpResult2 = utils_ColorUtils;
      isValidHexResult = getDarkness(tmpResult2.hex2int(tmp3.variantValue)) < 0.3;
    }
    return isValidHexResult;
  }, items);
};
