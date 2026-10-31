// Module ID: 10690
// Function ID: 10691
// Name: useSubscriptionSelection
// Dependencies: [32, 19, 2]
// Exports: default

// Module 10690 (useSubscriptionSelection)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default function useSubscriptionSelection() {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = react.useState(undefined);
  _slicedToArray(react.useState(undefined), 2);
  const tmp4 = _slicedToArray(react.useState(undefined), 2);
  return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
};
