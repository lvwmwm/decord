// Module ID: 11085
// Function ID: 11086
// Name: useSubscriptionSelection
// Dependencies: [32, 19, 2]
// Exports: default

// Module 11085 (useSubscriptionSelection)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default function useSubscriptionSelection() {
  [tmp2, tmp3] = noop.useState(undefined);
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
};
