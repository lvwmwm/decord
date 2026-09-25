// Module ID: 9765
// Function ID: 9766
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 4563, 2]
// Exports: default

// Module 9765 (useShowNitroUpsellCallback)
import ReanimatedRexport from "ReanimatedRexport" /* 4563 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  const sharedValue = ReanimatedRexport.useSharedValue(false);
  const items = [sharedValue];
  return {
    shouldShowUpsell: sharedValue,
    onShowNitroUpsell: noop.useCallback((arg0) => {
      const result = sharedValue.set(arg0);
    }, items)
  };
};
