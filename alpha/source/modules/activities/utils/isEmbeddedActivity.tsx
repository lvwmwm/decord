// Module ID: 7870
// Function ID: 7871
// Name: isEmbeddedActivity
// Dependencies: [1084, 7469, 2]
// Exports: default

// Module 7870 (isEmbeddedActivity)
import Constants from "Constants" /* 1084 */;
import hasFlagDefault from "hasFlag" /* 7469 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};
