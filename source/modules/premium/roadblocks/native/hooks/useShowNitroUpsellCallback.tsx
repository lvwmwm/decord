// Module ID: 8759
// Function ID: 8760
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 4083, 2]
// Exports: default

// Module 8759 (useShowNitroUpsellCallback)
import noop from "noop";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  let obj = sharedValue(4083);
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
