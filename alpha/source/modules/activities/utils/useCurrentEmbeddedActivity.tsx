// Module ID: 11751
// Function ID: 11752
// Name: useCurrentEmbeddedActivity
// Dependencies: [4857, 504, 2]
// Exports: default

// Module 11751 (useCurrentEmbeddedActivity)
import get_initialized from "get initialized" /* 504 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  let currentEmbeddedActivity;
  const items = [EmbeddedActivitiesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};
