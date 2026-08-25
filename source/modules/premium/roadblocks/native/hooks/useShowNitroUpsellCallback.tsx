// Module ID: 8861
// Function ID: 8862
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 4120, 2]
// Exports: default

// Module 8861 (useShowNitroUpsellCallback)
import closure_2 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  let obj = sharedValue(4120);
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
