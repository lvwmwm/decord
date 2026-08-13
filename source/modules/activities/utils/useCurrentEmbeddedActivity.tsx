// Module ID: 10693
// Function ID: 10694
// Name: useCurrentEmbeddedActivity
// Dependencies: [1390, 589, 2]
// Exports: default

// Module 10693 (useCurrentEmbeddedActivity)
import participantFromServer from "participantFromServer";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedActivity.tsx");

export default function useCurrentEmbeddedActivity() {
  const items = [participantFromServer];
  return require(589) /* initialize */.useStateFromStores(items, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
};
