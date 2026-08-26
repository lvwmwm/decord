// Module ID: 8929
// Function ID: 8930
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 4184, 2]
// Exports: default

// Module 8929 (useShowNitroUpsellCallback)
import closure_2 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  let obj = sharedValue(4184);
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
