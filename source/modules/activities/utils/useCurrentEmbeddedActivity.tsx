// Module ID: 10603
// Function ID: 10604
// Name: useCurrentEmbeddedActivity
// Dependencies: [1371, 589, 2]
// Exports: default

// Module 10603 (useCurrentEmbeddedActivity)
import participantFromServer from "participantFromServer";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [participantFromServer];
  return require(589) /* initialize */.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};
