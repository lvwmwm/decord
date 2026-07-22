// Module ID: 8726
// Function ID: 69058
// Name: useIsVariantColorLight
// Dependencies: []
// Exports: default

// Module 8726 (useIsVariantColorLight)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  const arg1 = variantValue;
  const items = [variantValue.variantValue];
  return React.useMemo(() => {
    let isValidHexResult = arg0(closure_1[1]).isValidHex(arg0.variantValue);
    if (isValidHexResult) {
      const obj2 = arg0(closure_1[1]);
      isValidHexResult = obj2.getDarkness(arg0(closure_1[1]).hex2int(arg0.variantValue)) < 0.3;
      const obj3 = arg0(closure_1[1]);
    }
    return isValidHexResult;
  }, items);
};
