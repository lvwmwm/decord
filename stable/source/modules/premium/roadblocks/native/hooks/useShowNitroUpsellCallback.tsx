// Module ID: 10444
// Function ID: 10445
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 4373, 2]
// Exports: default

// Module 10444 (useShowNitroUpsellCallback)
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
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
