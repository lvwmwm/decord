// Module ID: 9727
// Function ID: 9728
// Name: useCurrentEmbeddedActivity
// Dependencies: [2041, 504, 2]
// Exports: default

// Module 9727 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 504 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};
