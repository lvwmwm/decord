// Module ID: 9602
// Function ID: 9603
// Name: useCurrentEmbeddedActivity
// Dependencies: [1386, 589, 2]
// Exports: default

// Module 9602 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 589 */;
import closure_2 from "participantFromServer" /* 1386 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};
