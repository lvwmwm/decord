// Module ID: 11281
// Function ID: 11282
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 1655, 2]
// Exports: default

// Module 11281 (useShowNitroUpsellCallback)
import _mod1655 from "module_1655" /* 1655 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  const obj = _mod1655;
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
