// Module ID: 7876
// Function ID: 7877
// Name: isEmbeddedActivity
// Dependencies: [1072, 7477, 2]
// Exports: default

// Module 7876 (isEmbeddedActivity)
import Constants from "Constants" /* 1072 */;
import hasFlagDefault from "hasFlag" /* 7477 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
