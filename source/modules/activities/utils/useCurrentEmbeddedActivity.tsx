// Module ID: 9619
// Function ID: 9620
// Name: useCurrentEmbeddedActivity
// Dependencies: [1385, 586, 2]
// Exports: default

// Module 9619 (useCurrentEmbeddedActivity)
import initialize from "initialize" /* 586 */;
import closure_2 from "participantFromServer" /* 1385 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};
