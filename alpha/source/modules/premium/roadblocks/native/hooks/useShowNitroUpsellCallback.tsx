// Module ID: 9738
// Function ID: 9739
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 1654, 2]
// Exports: default

// Module 9738 (useShowNitroUpsellCallback)
import _mod1654 from "module_1654" /* 1654 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  const obj = _mod1654;
  const sharedValue = obj.useSharedValue(false);
  const items = [sharedValue];
  const obj2 = {
    shouldShowUpsell: sharedValue,
    onShowNitroUpsell: react.useCallback((arg0) => {
      const result = sharedValue.set(arg0);
    }, items)
  };
  return obj2;
};
