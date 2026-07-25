// Module ID: 10540
// Function ID: 81528
// Name: useCurrentEmbeddedActivity
// Dependencies: [1347, 566, 2]
// Exports: default

// Module 10540 (useCurrentEmbeddedActivity)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [_createForOfIteratorHelperLoose];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getCurrentEmbeddedActivity());
};
