// Module ID: 9405
// Function ID: 73311
// Name: useShowNitroUpsellCallback
// Dependencies: [31, 3991, 2]
// Exports: default

// Module 9405 (useShowNitroUpsellCallback)
import result from "result";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  let obj = sharedValue(3991);
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
