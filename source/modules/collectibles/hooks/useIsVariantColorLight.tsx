// Module ID: 8796
// Function ID: 8797
// Name: useIsVariantColorLight
// Dependencies: [19, 685, 2]
// Exports: default

// Module 8796 (useIsVariantColorLight)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  closure_0 = variantValue;
  const items = [variantValue.variantValue];
  return React.useMemo(() => {
    let isValidHexResult = variantValue(closure_1_1[1]).isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      let tmpResult = tmp(tmp2[1]);
      tmpResult = tmp(tmp2[1]);
      isValidHexResult = tmpResult.getDarkness(tmpResult.hex2int(variantValue.variantValue)) < 0.3;
    }
    return isValidHexResult;
  }, items);
};
