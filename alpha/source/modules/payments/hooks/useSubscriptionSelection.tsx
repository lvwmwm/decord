// Module ID: 11091
// Function ID: 11092
// Name: useSubscriptionSelection
// Dependencies: [32, 19, 2]
// Exports: default

// Module 11091 (useSubscriptionSelection)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default function useSubscriptionSelection() {
  [tmp2, tmp3] = noop.useState(undefined);
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
};
