// Module ID: 10781
// Function ID: 10782
// Name: useCurrentEmbeddedActivity
// Dependencies: [4761, 504, 2]
// Exports: default

// Module 10781 (useCurrentEmbeddedActivity)
import get_initialized from "get initialized" /* 504 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4761 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  let currentEmbeddedActivity;
  const items = [EmbeddedActivitiesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};
