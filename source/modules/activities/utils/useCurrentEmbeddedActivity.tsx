// Module ID: 11285
// Function ID: 11286
// Name: useCurrentEmbeddedActivity
// Dependencies: [1390, 589, 2]
// Exports: default

// Module 11285 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 589 */;
import closure_2 from "participantFromServer" /* 1390 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};
