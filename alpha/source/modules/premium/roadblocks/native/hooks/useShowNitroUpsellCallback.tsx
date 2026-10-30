// Module ID: 10011
// Function ID: 10012
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 5090, 2]
// Exports: default

// Module 10011 (useShowNitroUpsellCallback)
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  const obj = ReanimatedRexport;
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
