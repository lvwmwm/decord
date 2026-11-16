// Module ID: 12843
// Function ID: 12844
// Name: useCurrentEmbeddedActivity
// Dependencies: [5154, 504, 2]
// Exports: default

// Module 12843 (useCurrentEmbeddedActivity)
import get_initialized from "get initialized" /* 504 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  let currentEmbeddedActivity;
  const items = [EmbeddedActivitiesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};
