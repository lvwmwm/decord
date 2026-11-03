// Module ID: 10163
// Function ID: 10164
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 1652, 2]
// Exports: default

// Module 10163 (useShowNitroUpsellCallback)
import _mod1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  const obj = _mod1652;
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
