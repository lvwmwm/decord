// Module ID: 8720
// Function ID: 8721
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 4042, 2]
// Exports: default

// Module 8720 (useShowNitroUpsellCallback)
import noop from "noop";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  let obj = sharedValue(4042);
  sharedValue = obj.useSharedValue(false);
  const items = [sharedValue];
  obj = {
    shouldShowUpsell: sharedValue,
    onShowNitroUpsell: React.useCallback((arg0) => {
      const result = sharedValue.set(arg0);
    }, items)
  };
  return obj;
};
