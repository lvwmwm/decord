// Module ID: 9362
// Function ID: 73061
// Name: useShowNitroUpsellCallback
// Dependencies: []
// Exports: default

// Module 9362 (useShowNitroUpsellCallback)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  let obj = arg1(dependencyMap[1]);
  const sharedValue = obj.useSharedValue(false);
  const arg1 = sharedValue;
  const items = [sharedValue];
  obj = {
    shouldShowUpsell: sharedValue,
    onShowNitroUpsell: React.useCallback((arg0) => {
      const result = sharedValue.set(arg0);
    }, items)
  };
  return obj;
};
