// Module ID: 8733
// Function ID: 69099
// Name: useIsVariantColorLight
// Dependencies: [31, 665, 2]
// Exports: default

// Module 8733 (useIsVariantColorLight)
import result from "result";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  let closure_0 = variantValue;
  const items = [variantValue.variantValue];
  return React.useMemo(() => {
    let isValidHexResult = variantValue(outer1_1[1]).isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const obj2 = variantValue(outer1_1[1]);
      isValidHexResult = obj2.getDarkness(variantValue(outer1_1[1]).hex2int(variantValue.variantValue)) < 0.3;
      const obj3 = variantValue(outer1_1[1]);
    }
    return isValidHexResult;
  }, items);
};
