// Module ID: 9323
// Function ID: 72892
// Name: useShowNitroUpsellCallback
// Dependencies: [31, 3992, 2]
// Exports: default

// Module 9323 (useShowNitroUpsellCallback)
import result from "result";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  let obj = sharedValue(3992);
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
