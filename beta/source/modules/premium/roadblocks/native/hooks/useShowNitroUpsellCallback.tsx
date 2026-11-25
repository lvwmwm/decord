// Module ID: 11310
// Function ID: 11311
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 1653, 2]
// Exports: default

// Module 11310 (useShowNitroUpsellCallback)
import _mod1653 from "module_1653" /* 1653 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  const obj = _mod1653;
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
