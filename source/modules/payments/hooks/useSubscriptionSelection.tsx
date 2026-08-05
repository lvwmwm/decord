// Module ID: 9461
// Function ID: 9462
// Name: useSubscriptionSelection
// Dependencies: [32, 19, 2]
// Exports: default

// Module 9461 (useSubscriptionSelection)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default function useSubscriptionSelection() {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(React.useState(undefined), 2);
  const tmp4 = callback(React.useState(undefined), 2);
  return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
};
