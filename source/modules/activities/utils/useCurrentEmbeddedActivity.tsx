// Module ID: 10628
// Function ID: 82880
// Name: useCurrentEmbeddedActivity
// Dependencies: [1347, 566, 2]
// Exports: default

// Module 10628 (useCurrentEmbeddedActivity)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [_createForOfIteratorHelperLoose];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getCurrentEmbeddedActivity());
};
